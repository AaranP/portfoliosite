---
id: fpga-baccarat
name: Baccarat Dealer on FPGA
type: course
course: CPEN 311                 # Lab 2 (Lab_2_CPEN_311.pdf in repo)
start: 2023-09
end: 2023-09
status: completed
team_size: 2                     # TODO: confirm
my_role: >
  TODO: if done in a pair, state your split.
domains: [digital-design, fpga]
tech: [SystemVerilog, Quartus Prime, ModelSim, FPGA]
repo: https://github.com/AaranP/baccarat
demo: ""
summary: >
  Baccarat card-game dealer implemented as an FSM + datapath in
  SystemVerilog on the DE1-SoC, scoring hands per casino rules and showing
  cards on the 7-segment displays.
problem: >
  Implement the full baccarat dealing protocol (player/dealer draw rules,
  third-card logic, hand scoring, win detection) as synchronous hardware
  with a clean FSM/datapath split.
outcomes:
  - text: Complete dealer with per-module testbenches (state machine, datapath, scorehand, card display) simulated in ModelSim and run on-board.
    evidence: repo source (task5/*.sv, tb_*.sv, FSM.pdf state diagram)
media: []
related_experience: []
resume_bullets: []
featured: false
visibility: public
---

## What I built

CPEN 311 Lab 2: a card-dealing state machine (load player/dealer cards,
third-card rules, win check), a datapath with card registers and hand
scoring (`scorehand`), and 7-segment card display, with testbenches for each
module. The FSM design is documented in FSM.pdf in the repo.

## What I learned

TODO: fill in — early FSM/datapath separation practice that fed into the
later CPEN 311 labs ([[arc4-decryption]], [[fpga-vga-drawing]],
[[fpga-mp3-player]]).
