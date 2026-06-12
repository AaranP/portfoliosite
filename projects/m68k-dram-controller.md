---
id: m68k-dram-controller
name: SDRAM Controller for M68k Computer System
type: course
course: CPEN 412                 # Assignment 2
start: 2024-02
end: 2024-02                     # TODO: confirm
status: completed
team_size: 2                     # repo contains "Assignment 2 Contribution Sheet.doc" — TODO: confirm partner split
my_role: >
  TODO: state your contribution per the contribution sheet.
domains: [digital-design, fpga, computer-architecture]
tech: [Verilog, Quartus Prime, FPGA]
repo: https://github.com/AaranP/DRAM-controller
demo: ""
summary: >
  SDRAM controller in Verilog for a Motorola 68k soft computer system on the
  DE1 board — refresh, read/write timing, and bus handshaking for 64 MB of
  SDRAM at a 50 MHz memory clock.
problem: >
  Give the M68k system real main memory: drive a 32M×16 SDRAM (8192 rows,
  4 banks, CAS latency 2) correctly from the 68000's asynchronous bus,
  including refresh scheduling and DTACK generation.
outcomes:
  - text: Working controller state machine handling init, auto-refresh, and 68k byte/word read-write cycles (UDS/LDS strobes), verified with waveform simulation.
    evidence: M68kDramController_Verilog.v, "Write and read.vwf" waveform file in repo
media: []
related_experience: []
resume_bullets: []
featured: false
visibility: public
---

## What I built

The DRAM controller state machine for the course's M68k computer system
(part of experience bank P6, same ecosystem as [[m68k-cache]] and
[[tetris-fpga]]): SDRAM initialization sequence, periodic auto-refresh,
row/column addressing, CAS-latency-2 read timing, and write timing, bridged
to the 68000 bus via an address decoder and DTACK generator.

## What I learned

TODO: fill in — e.g. SDRAM timing parameters, refresh vs access arbitration,
asynchronous bus handshaking.
