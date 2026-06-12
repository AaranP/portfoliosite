// The data repo deliberately carries inline `TODO:` markers (deferred by the
// user) — they must never render on the public site. This plugin drops any
// paragraph/list-item containing a TODO, then drops headings left with no
// content in their section (e.g. a "What I learned" section that was only a
// TODO).

/** @param {any} node */
function nodeText(node) {
  if (node.type === 'text' || node.type === 'inlineCode') return node.value;
  return (node.children ?? []).map(nodeText).join('');
}

const hasTodo = (/** @type {any} */ node) => /\bTODO\b/.test(nodeText(node));

export function stripTodos() {
  return (/** @type {any} */ tree) => {
    /** @param {any} parent */
    const filterChildren = (parent) => {
      if (!parent.children) return;
      parent.children = parent.children.filter((/** @type {any} */ child) => {
        // raw HTML comments are internal notes — never ship them
        if (child.type === 'html' && /<!--|-->/.test(child.value)) return false;
        if ((child.type === 'paragraph' || child.type === 'listItem') && hasTodo(child)) {
          return false;
        }
        filterChildren(child);
        // drop lists that lost all their items
        if (child.type === 'list' && child.children.length === 0) return false;
        return true;
      });
    };
    filterChildren(tree);

    // remove headings whose section ended up empty
    tree.children = tree.children.filter((/** @type {any} */ node, /** @type {number} */ i) => {
      if (node.type !== 'heading') return true;
      const next = tree.children[i + 1];
      return next !== undefined && !(next.type === 'heading' && next.depth <= node.depth);
    });
  };
}
