---
id: m68k-spi-controller
name: SPI Flash Controller for M68k Computer System
type: course
course: CPEN 412                 # Assignment 3
start: 2024-02
end: 2024-03                     # TODO: confirm
status: completed
team_size: 2                     # TODO: confirm
my_role: >
  TODO: state your contribution.
domains: [digital-design, embedded, computer-architecture]
tech: [Verilog, C, Quartus Prime, FPGA]
repo: https://github.com/AaranP/Assignment3-SPI-Controller
demo: ""
summary: >
  SPI controller integration for the M68k soft computer system: a
  memory-mapped SPI core driving a Winbond W25Q32 serial flash, with C
  driver code running on the 68k.
problem: >
  Let the M68k system read and program an external Winbond W25Q32 SPI flash
  chip — integrate an SPI master core onto the 68k bus and write the C
  driver routines (commands, page program, reads) to exercise it.
outcomes:
  - text: "TODO: what was demonstrated (e.g. flash erase/program/read verified from the 68k user program) — source from 'SPI Controller Documentation.doc' in the repo."
    evidence: SPI Controller Documentation.doc, M68kUserProgram (DE1).c in repo
media: []
related_experience: []
resume_bullets: []
featured: false
visibility: public
---

## What I built

Integration of the OpenCores `simple_spi` master core into the M68k computer
system (same ecosystem as [[m68k-dram-controller]] / [[m68k-cache]] /
[[tetris-fpga]]), plus the 68k-side C driver code (`M68kUserProgram`) that
talks to the Winbond W25Q32 flash — its datasheet ships in the repo.

TODO: confirm which parts were written vs provided scaffolding (the SPI core
itself is OpenCores IP; your work is the bus integration + drivers).

## What I learned

TODO: fill in — e.g. SPI protocol timing, memory-mapped peripheral driver
design.
