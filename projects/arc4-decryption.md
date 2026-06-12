---
id: arc4-decryption
name: ARC4 Decryption & Brute-Force Cracking Hardware
type: course
course: CPEN 311                 # Lab 3 (Lab_3_CPEN_311.pdf in repo)
start: 2023-10
end: 2023-11                     # TODO: confirm end month (repo created 2023-10; README polished 2025-03)
status: completed
team_size: 2                     # TODO: confirm — CPEN 311 labs are usually pairs; set to 1 if solo
my_role: >
  TODO: if done in a pair, state which modules/testbenches you owned.
domains: [digital-design, fpga, verification, security]
tech: [SystemVerilog, ModelSim, Quartus Prime, FPGA]
repo: https://github.com/AaranP/ARC-4-Decryption
demo: ""
summary: >
  Hardware implementation of the ARC4 stream cipher on a DE1-SoC (Cyclone V)
  FPGA, plus a parallelized brute-force cracking circuit that recovers secret
  keys and displays them on the board's 7-segment displays.
problem: >
  Implement full ARC4 decryption (state init, KSA, PRGA) as RTL, then attack
  it: sweep the keyspace in hardware to recover unknown keys, validating
  candidates by a printable-ASCII check on the decrypted output.
outcomes:
  - text: Parallelized the cracking circuit for approximately 2× throughput over the single-instance version.
    evidence: repo README (testing section)
  - text: Every module verified with both RTL and post-synthesis simulation testbenches in ModelSim, then validated on-board against known plaintexts.
    evidence: tb_rtl_*.sv / tb_syn_*.sv files in repo
media:
  - file: block-diagram.png
    caption: Overview of the ARC4 decryption circuit
related_experience: []
resume_bullets: []               # TODO: paste from resumes/fragments/bullets_arc4_dv.tex
featured: true
visibility: public
---

## What I built

ARC4 in hardware on the DE1-SoC, with each phase of the cipher as a separate
RTL module: state initialization, the Key-Scheduling Algorithm (KSA), and the
Pseudo-Random Generation Algorithm (PRGA), composed into a full decryption
datapath reading ciphertext from on-chip memory.

On top of that, a brute-force cracker that re-runs the decryption circuit
across the keyspace and checks candidate plaintexts for printable ASCII,
displaying the recovered key on the 7-segment displays — then a parallelized
variant running multiple decryption instances for ~2× cracking speed.

Verification is the standout: per-module testbenches (`tb_rtl_*` and
`tb_syn_*`) run in ModelSim against both RTL and the post-synthesis netlist,
plus on-board validation. This is the portfolio's strongest verifiable
DV/ASIC-flavored project (experience bank P4).

## What I learned

TODO: fill in — e.g. FSM design across handshaking modules, debugging
post-synthesis simulation mismatches, what parallelizing taught you about
area/throughput trade-offs.
