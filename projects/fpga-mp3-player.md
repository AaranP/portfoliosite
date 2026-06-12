---
id: fpga-mp3-player
name: FPGA MP3 Player (RTL Design)
type: course
course: CPEN 311                 # Lab 5 — confirmed by user as the resume's "FPGA MP3 Player"
start: 2023-11
end: 2023-11                     # NOTE: resume dates this December 2024 — repo activity is Nov 2023; sync whichever is right
status: completed
team_size: 2                     # TODO: confirm
my_role: >
  TODO: if done in a pair, state which tasks you owned.
domains: [digital-design, fpga, audio]
tech: [SystemVerilog, Quartus Prime, ModelSim, Questa, Signal Tap, FPGA]
repo: https://github.com/AaranP/CPEN311-lab5
demo: ""
summary: >
  Full RTL audio playback system on the DE1-SoC: FSM-controlled Avalon-MM
  transactions stream 16-bit samples from flash through a synchronous FIFO
  with CDC handshaking into the audio codec, plus variable-speed playback
  and a flanger DSP effect.
problem: >
  Read 2M+ signed 16-bit samples from the flash chip through its Avalon
  memory-mapped controller, buffer them across clock domains into the audio
  codec, and add playback-speed control and audio effects in hardware.
outcomes:
  - text: Working playback chain — flash reader FSM driving the Avalon-MM flash controller (waitrequest/readdatavalid handshaking), sample buffering via synchronous FIFO with CDC handshake protocols, codec output; plus speed-shifted playback ("chipmunks") and a flanger effect.
    evidence: repo source (task2 flash_reader.sv … task7 flanger.sv, tb_*.sv)
  - text: ASIC-style verification with simulation-only memory models in Questa, plus Signal Tap on-chip logic analysis for timing validation on hardware.
    evidence: resume (user-confirmed); per-task testbenches in repo
media: []
related_experience: []
resume_bullets:
  - "Architected full RTL design on DE1-SoC FPGA: FSM-controlled Avalon-MM transactions, synchronous FIFO data buffering, and CDC handshake protocols for clock-domain crossing."
  - "Performed ASIC-style verification in Questa with simulation-only memory models and Signal Tap on-chip logic analysis for timing validation."
featured: true
visibility: public
---

## What I built

This is the resume's "FPGA MP3 Player" (confirmed; experience bank's
formerly-unanchored dv-master project, now grounded in gh:CPEN311-lab5).
Built up in tasks on the DE1-SoC: a flash reader state machine speaking the
Avalon-MM protocol to the on-board flash controller (handling `waitrequest`
/ `readdatavalid` handshakes and burst reads), writing samples into on-chip
memory; audio output through the board's codec (Altera UP audio cores, with
a synchronous FIFO and CDC handshaking between the system and codec clock
domains); then DSP variants — variable-rate playback (task 6 "chipmunks")
and a flanger effect (task 7).

Verification: per-task testbenches simulated with simulation-only memory
models (Questa), and Signal Tap on-chip logic analysis for timing validation
on the live FPGA.

## What I learned

TODO: fill in — e.g. Avalon-MM handshaking corner cases, clock-domain
crossing with the sync FIFO, debugging audio glitches.
