---
id: fpga-vga-drawing
name: VGA Drawing Circuits (Bresenham on FPGA)
type: course
course: CPEN 311                 # Lab 4
start: 2023-10
end: 2023-11
status: completed
team_size: 2                     # TODO: confirm
my_role: >
  TODO: if done in a pair, state your split.
domains: [digital-design, fpga, graphics]
tech: [SystemVerilog, Quartus Prime, ModelSim, FPGA]
repo: https://github.com/AaranP/lab4
demo: ""
summary: >
  Hardware drawing circuits on the DE1-SoC: screen fill, Bresenham circle
  drawing, and a Reuleaux-triangle renderer composed from circle arcs, all
  driving a VGA framebuffer and verified in RTL and post-synthesis
  simulation.
problem: >
  Render geometric shapes to a VGA display with pure hardware FSMs — no CPU —
  including the integer-only Bresenham circle algorithm and composing arcs
  into a Reuleaux triangle.
outcomes:
  - text: Fillscreen, circle, and Reuleaux-triangle drawing FSMs, each with RTL and post-synthesis testbenches (tb_rtl_*, tb_syn_*) and on-board VGA output.
    evidence: repo source (task2–task4, vga-core/)
media: []
related_experience: []
resume_bullets: []
featured: false
visibility: public
---

## What I built

CPEN 311 Lab 4: drawing accelerators over a provided VGA adapter core —
a fillscreen FSM, a Bresenham circle drawer (integer arithmetic, octant
symmetry), and a Reuleaux triangle built by sweeping three circle arcs
centred on the triangle's vertices. Each task is verified at RTL and against
the post-synthesis netlist.

## What I learned

TODO: fill in.
