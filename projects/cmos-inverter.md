---
id: cmos-inverter
name: CMOS Inverter Design & Characterization
type: course                     # TODO: confirm course code (VLSI Design / Analog CMOS Design coursework?)
course: ""
start: 2025-09                   # TODO: confirm — resume dates completion December 2025
end: 2025-12
status: completed
team_size: 1                     # TODO: confirm
my_role: ""
domains: [ic-design, analog]
tech: [Cadence Virtuoso, Spectre/SPICE]
repo: n/a
demo: ""
summary: >
  Sized and characterized a symmetrical CMOS inverter in a deep sub-micron
  process in Cadence Virtuoso, balancing rise/fall propagation delays and
  minimizing area-delay product under a 10 fF load.
problem: >
  Design a CMOS inverter meeting symmetry and performance targets: match
  PMOS/NMOS drive strengths so the low-to-high and high-to-low propagation
  delays balance, while minimizing the area-delay product.
outcomes:
  - text: Balanced t_pLH and t_pHL within 5 ps and minimized area-delay product under a 10 fF load in a deep sub-micron process.
    evidence: resume (user-confirmed); TODO — point at the design report/screenshots if available
  - text: Verified timing margins and waveform integrity with Spectre transient simulations before sign-off.
    evidence: resume (user-confirmed)
media: []                        # TODO: add Virtuoso schematic/layout screenshots to assets/projects/cmos-inverter/ if available
related_experience: []
resume_bullets:
  - "Sized PMOS/NMOS transistors for a symmetrical CMOS inverter in a deep sub-micron process, balancing t_pLH and t_pHL within 5 ps and minimizing Area-Delay Product under a 10 fF load."
  - "Verified timing margins and waveform integrity via Spectre transient simulations before design sign-off."
featured: false                  # TODO: decide — it's one of three projects on the dv resume, so arguably featured
visibility: public
---

## What I built

No public repo (Cadence coursework). From the resume (user-supplied,
confirming the experience bank's formerly-unverified dv-master project):
transistor sizing for a symmetrical inverter in a deep sub-micron process,
delay balancing to within 5 ps, area-delay-product optimization under a
10 fF load, and Spectre transient verification of timing margins and
waveform integrity.

TODO: add the design narrative — process node, W/L ratios chosen, how the
ADP optimization was swept.

## What I learned

TODO: fill in.
