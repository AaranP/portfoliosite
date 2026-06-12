---
id: simple-risc-cpu
name: Simple RISC CPU in Verilog
type: course
course: CPEN 211                 # Lab 6 (the CPEN 211 "simple RISC machine" lab) — TODO: confirm
start: 2021-11
end: 2021-11
status: completed
team_size: 2                     # TODO: confirm
my_role: >
  TODO: if done in a pair, state your split.
domains: [digital-design, computer-architecture, fpga]
tech: [Verilog, Quartus Prime, FPGA]
repo: https://github.com/AaranP/Lab_6
demo: ""
summary: >
  A 16-bit multi-cycle RISC CPU in Verilog: instruction decoder, FSM
  controller, register file, ALU, and shifter wired into a datapath with
  status flags (N, V, Z).
problem: >
  Build a working CPU from first principles — decode instructions, sequence
  the datapath through a multi-cycle FSM, and execute arithmetic/move
  instructions with condition flags.
outcomes:
  - text: Working CPU executing the lab instruction set with sign-extended immediates and N/V/Z flag generation.
    evidence: repo source (cpu.v, instruction_decoder.v, FSM_controller.v, datapath.v)
media: []
related_experience: []
resume_bullets: []
featured: false
visibility: public
---

## What I built

The classic CPEN 211 simple RISC machine: a 16-bit CPU composed of an
instruction register, instruction decoder (opcode/operand extraction,
sign-extended 5- and 8-bit immediates), a multi-cycle FSM controller
producing an 11-bit control word, and a datapath with register file, ALU,
and shifter producing N/V/Z status flags.

## What I learned

TODO: fill in — first end-to-end CPU build; foundation for the later M68k
system work ([[tetris-fpga]], [[m68k-dram-controller]]).
