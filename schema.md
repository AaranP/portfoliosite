# Portfolio Database Schema

This repo is the single source of truth for all experience, projects, and skills.
The portfolio website (and future resume tailoring) is generated FROM this data —
never edit the website directly without updating this first.

All content files are Markdown with YAML frontmatter. This keeps the data
human-readable, git-diffable, and directly consumable by static site generators
(Astro, Jekyll, Hugo) for the GitHub Pages site later.

---

## Folder structure

```
portfolio-data/
├── README.md                  # What this repo is, how to add entries
├── SCHEMA.md                  # This file
├── profile/
│   ├── about.md               # Bio, headline, links (one file)
│   ├── education.md           # UBC BASc, relevant coursework, EIT status
│   └── skills.yaml            # Categorized skills inventory
├── experience/
│   ├── canal-marine-coop.md
│   ├── synopsys-coop.md
│   ├── amd-coop.md
│   ├── synopsys-contract.md
│   ├── ubc-ta-elec391.md
│   └── teaching-parttime.md
├── projects/
│   ├── capstone-drone.md
│   ├── fpga-mp3-player.md
│   ├── cmos-inverter.md
│   └── ...                    # one file per project, slug = kebab-case
└── assets/
    ├── experience/<slug>/     # job descriptions (PDF/txt), offer letters context
    └── projects/<slug>/       # screenshots, diagrams, demo GIFs, reports
```

Naming rule: filename slug is permanent and used as the `id`. Kebab-case, no dates in the name.

---

## Experience entry (`experience/<slug>.md`)

```yaml
---
id: canal-marine-coop            # matches filename
company: CANAL Marine Industries
title: Electrical Engineering Co-op
employment_type: coop            # coop | contract | full-time | part-time | volunteer
location: City, Province
remote: false
start: 2023-05                   # YYYY-MM
end: 2023-12                     # YYYY-MM or "present"
domains: [power-systems, marine] # broad area tags for filtering on the site
tech: [AutoCAD, ETAP]            # tools/languages, use consistent names (see skills.yaml)
summary: >
  One-to-two sentence plain-language description of the role.
  This is what shows on the website card.
responsibilities:                # what the job WAS (sourced from job description)
  - Produced single line diagrams for vessel electrical systems
achievements:                    # what YOU specifically did, with metrics where possible
  - text: Reduced X by Y% by doing Z
    evidence: ""                 # where this claim comes from (report, email, repo) — keeps claims verifiable
related_projects: [some-project-id]   # cross-links to projects/ entries
resume_bullets:                  # the exact polished bullets used on resumes, versioned here
  - "Bullet as it appears on the resume"
references:
  manager: ""                    # e.g. Chris — name/role only, no contact info in a public repo
links: []                        # company page, press, etc.
featured: true                   # show prominently on the site
visibility: public               # public | private (private = excluded from site build)
---

## Context
Free-form notes: team size, what the company does, why the work mattered.
Paste the original job description in assets/experience/<slug>/ and summarize it here.

## Stories
STAR-format stories for interviews (situation/task/action/result). These never
go on the website but live with the data — invaluable for behavioral prep.
```

---

## Project entry (`projects/<slug>.md`)

```yaml
---
id: capstone-drone
name: Autonomous Exploration Drone
type: capstone                   # course | capstone | personal | work | hackathon
course: ELEC 49X                 # course code if type is course/capstone, else omit
client: ICON Labs                # if there was an external client/stakeholder
start: 2025-09
end: 2026-04
status: completed                # completed | ongoing | archived
team_size: 4                     # 1 = solo
my_role: >
  What YOU specifically owned. Critical for team projects —
  the website and interviews need your contribution, not the team's.
domains: [robotics, embedded]
tech: [ROS, VINS-Fusion, Docker, Raspberry Pi, SolidWorks]
repo: https://github.com/...     # or "private" / "n/a"
demo: ""                         # live demo, video link
summary: >
  One-to-two sentence card description for the website.
problem: >
  What problem this solved / why it was built.
outcomes:
  - text: Concrete result with numbers if possible
    evidence: ""
media:                           # files in assets/projects/<slug>/
  - file: rviz-screenshot.png
    caption: ""
related_experience: []           # cross-link if done during a job
resume_bullets:
  - "Exact resume bullet(s) derived from this project"
featured: true
visibility: public
---

## What I built
Technical narrative: architecture, key decisions, hard problems and how you
solved them. Source this from the repo README, commits, and design docs.

## What I learned
Honest notes — useful for interviews, optionally shown on the site.
```

---

## Skills inventory (`profile/skills.yaml`)

Single canonical list so tags in `tech:` fields stay consistent (always "SystemVerilog", never "system-verilog" in one file and "SV" in another).

```yaml
languages: [C++, Python, SystemVerilog, JavaScript, MATLAB]
verification: [UVM, ...]
hardware: [Digital Design, FPGA, CDC, Timing Analysis]
tools: [AutoCAD, ETAP, SolidWorks, Docker, Git, Vivado]
domains: [ASIC Verification, Power Systems, Robotics, RF/IC Design]
certifications:
  - name: EIT
    issuer: EGBC
    date: 2026
```

---

## Conventions

1. **Evidence field discipline.** Every achievement/outcome claim notes where it
   comes from. You already learned this matters for the CANAL application — only
   verifiable claims survive into resumes.
2. **`visibility: private`** for anything sensitive (salary, internal tool names,
   NDA-adjacent work). The site generator skips these; the data still exists for
   resume tailoring.
3. **No PII in a public repo.** Reference names are fine; emails/phones are not.
   If the data repo itself will be public, consider keeping it private and only
   publishing the generated site.
4. **One source per fact.** Resume bullets live here and get copied OUT to
   resumes, not the reverse.
5. **Dates are YYYY-MM.** The site generator handles display formatting.