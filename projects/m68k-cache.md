---
id: m68k-cache
name: Cache Subsystem for M68k Computer System
type: course
course: CPEN 412
start: 2024-03
end: 2024-03                     # TODO: confirm
status: completed
team_size: 2                     # TODO: confirm
my_role: >
  TODO: state your contribution.
domains: [digital-design, fpga, computer-architecture]
tech: [Verilog, VHDL, Quartus Prime, FPGA]
repo: https://github.com/AaranP/cache
demo: ""
summary: >
  Cache added in front of the SDRAM controller in a Motorola 68k soft
  computer system on the DE1 board, with tag/valid/data storage built from
  on-chip memory blocks.
problem: >
  Reduce the M68k system's effective memory latency by caching SDRAM
  accesses — tag comparison, valid bits, and hit/miss handling integrated
  into the existing DRAM controller path.
outcomes:
  - text: "TODO: cache organization (size, line width, direct-mapped?) and any measured speedup — source from the assignment report if available."
    evidence: ""
media: []
related_experience: []
resume_bullets: []
featured: false
visibility: public
---

## What I built

The cache subsystem within the same M68k computer system as
[[m68k-dram-controller]] (experience bank P6): Tag_Data, Valid_Data, and
CacheData memories with hit detection logic wired into the
DRAM controller, alongside the system's existing peripherals (ACIA UART,
graphics controller, timers).

TODO: details on the cache design decisions — the repo is a full Quartus
project snapshot, so the narrative needs your memory or the report.

## What I learned

TODO: fill in.
