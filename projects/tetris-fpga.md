---
id: tetris-fpga
name: FPGA Tetris on an Emulated M68k
type: course
course: CPEN 412
start: 2024-04
end: 2024-05
status: completed
team_size: 1
my_role: >
  Solo project — full system integration, hardware, and game software.
domains: [digital-design, fpga, embedded, computer-architecture]
tech: [Verilog, SystemVerilog, VHDL, C, M68k Assembly, Quartus Prime, FPGA]
repo: https://github.com/AaranP/Tetris_FPGA
demo: ""                         # TODO: README embeds a gameplay video — extract/link it
summary: >
  Tetris running on an emulated Motorola 68k CPU with system DRAM and ROM on
  a DE1-SoC FPGA, with VGA output through a memory-mapped video core,
  hardware timer interrupts driving the game tick, and audible feedback from
  an emulated SPO256 speech synthesizer.
problem: >
  Build a complete playable game on a soft computer system: CPU emulation,
  memory subsystem, memory-mapped peripherals, and interrupt-driven timing
  all on one FPGA.
outcomes:
  - text: Fully playable Tetris with VGA output, built on the OpenCores 80×40 VGA adapter integrated as a Quartus BDF, memory-mapped to the 68k processor, with hardware registers controlling the VGA cursor appearance and behavior.
    evidence: repo README (gameplay video, BDF screenshot)
  - text: Hardware timer interrupts implemented in Verilog provide the precise time-keeping for the game clock in C; audible gameplay feedback from an emulated SPO256 speech synthesizer.
    evidence: repo source (Timer.vhd, verilog_code/); resume bullets (user-confirmed)
media:
  - file: vga-bdf-schematic.png
    caption: VGA core integration as a Quartus block diagram (BDF)
  # TODO: gameplay video is embedded in the repo README — grab a still/GIF
related_experience: []
resume_bullets:
  - "Integrated a VGA display core to the DE1 FPGA, mapping its memory to the 68k processor and audible feedback from emulated SPO256 speech synthesizer during gameplay."
  - "Implemented hardware timer interrupts in Verilog for precise time-keeping required by the game's clock function in C."
  - "Memory-mapped registers in hardware to control the VGA core's cursor appearance and behavior."
featured: true
visibility: public
---

## What I built

A Motorola 68k computer system emulated on the DE1-SoC (Quartus, Verilog +
VHDL components: ACIA UART, timers, bus logic, DRAM and ROM), running Tetris:

- **Video:** memory-mapped VGA core built on the OpenCores 80×40 display
  adapter, integrated as a Quartus block diagram (BDF), with custom
  hardware registers controlling cursor appearance and behavior.
- **Audio:** emulated SPO256 speech synthesizer for audible feedback during
  gameplay.
- **Timing:** hardware timer interrupts written in Verilog generate the
  precise game tick consumed by the C game clock.
- **Game logic:** C / 68k assembly compiled for the emulated CPU.

Shares the CPEN 412 M68k ecosystem with [[m68k-dram-controller]] and
[[m68k-cache]] (experience bank P5/P6).

## What I learned

TODO: fill in — e.g. memory-mapped I/O design, interrupt latency, hardware/
software co-debug on a soft CPU.
