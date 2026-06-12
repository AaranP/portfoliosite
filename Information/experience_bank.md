# experience_bank.md — grounded content bank (the ONLY source of resume content)

Every entry has a stable ID (E#/P#/C#) for inference tracing. Resume tailoring may reframe/emphasize
what's here and infer skills WITH a cited anchor, but may NEVER invent tools, employers, metrics,
certifications, or projects (guardrail 2; see resume-tailoring/inference_rules.md).

Provenance tags: `[gh:<repo>]` = grounded in a public GitHub repo (github.com/AaranP); `[work]` =
from a job (not public, user-supplied); `[spec]` = from Jobsearchspec seed; `TODO:` = gap to fill.

PII note: this file IS committed. Resume-public only — nothing that wouldn't appear on a resume.
No phone/address (those live in `resumes/fragments/personal.tex`, gitignored).

---

## ROLES  (work history — not on GitHub; user must fill the TODOs)

### E1 — Synopsys, Junior Verification Engineer (contract, 2026–present) · track: dv  [work]
- TODO: team / product / IP being verified.
- TODO: UVM / SystemVerilog / C++ usage — what specifically you build (testbench, sequences, etc.).
- TODO: regression & debug tools (e.g. VCS, Verdi, coverage tooling).
- TODO: quantifiable outcomes (only if real).
- NOTE: not yet on either resume; the resumes' "Synopsys R&D Verification Intern" is E3, not E1.

### E2 — AMD, Digital Verification Co-op (Graphics Quality, ASIC Verification) · track: dv  [work]
- On resume: ASIC validation on Display IP blocks; functional coverage → 100% coverage at sign-off;
  driver-level C++ debug; Python+SQL dashboard reducing mean debug time 10%.
- TODO: confirm IP block specifics, UVM components used (if any), coverage tooling names.

### E3 — Synopsys, Verification / Software Co-op (R&D Verification Intern) · track: dv  [work]
- On resume: modular Python verification framework for Lumerical script commands; test-plan
  authoring/execution; defect triage; functional/regression/performance testing; CI/CD.
- TODO: confirm tools (Bamboo CI, Squish appear commented-out on the dv master — real?).

### E4 — CANAL Marine Industries, Electrical Engineer Co-op (EIT) · track: eit  [work]
- ETAP electrical load analysis vs single-line diagrams; AutoCAD wiring diagrams (polar icebreaker);
  CADmatic 3D-vs-2D reconciliation; Bluebeam markup / QA discrepancy logs; cable supplier analysis.
- TODO: which formal studies (load flow / short-circuit / coordination / arc-flash?), codes (CEC).

---

## PROJECTS

### P1 — Capstone: Autonomous Indoor Mapping Drone "Drone V3" (Team KW-076, client ICON Labs)  [gh:Autonomous-drone-upgrade]
- Autonomous indoor mapping quadrotor: navigates and builds a 3D occupancy map with no human input.
- **VINS-Fusion** (stereo-IR + IMU visual-inertial odometry) for state estimation; **FUEL** (Fast UAV
  Exploration, hierarchical 3D frontier planning) for autonomous exploration.
- **ROS Noetic**; all nodes containerized in **Docker** (separate onboard Pi image + ground-station
  image) for reproducibility. ROS Master runs **onboard the Pi 5** to remove the WiFi round-trip
  latency that destabilized the previous generation.
- Onboard: **Raspberry Pi 5 (16 GB)**; **Holybro Kakute H7 Mini** flight controller running **PX4**
  (1 kHz attitude loop); **Intel RealSense D435i** depth (30 Hz); **WHEELTEC N100** IMU (200 Hz);
  **MAVROS** bridges ROS↔MAVLink. ESC: HAKRC BLHeli_32 (DShot600).
- Custom **carbon-fiber + PLA+ frame** (SolidWorks, 3D-printed), 241 mm span; **flight-tested** in a
  10 × 10 × 3 m indoor space.
- My parts [spec]: ROS architecture, V&V / design documentation, SolidWorks frame, flight testing;
  5-person team, Git workflow.
- Anchors: ROS/ROS Noetic, Docker, embedded Linux, PX4/MAVROS, visual-inertial odometry/SLAM-adjacent,
  RealSense/sensor integration, SolidWorks/3D printing, V&V/documentation, teamwork.

### P2 — UBC Thunderbikes (Team Lead) + Formula Electric  [spec — NOT on GitHub]
- TODO: Thunderbikes responsibilities as Team Lead; electrical subsystem work.
- TODO: Formula Electric role/contributions.
- Anchors: teamwork / leadership. (No public repo — user must supply specifics; do not embellish.)

### P3 — Robot Vacuum Rooting (Proscenic M6 Pro + Valetudo via ADB)  [spec — NOT on GitHub]
- Embedded Linux; shell / ADB scripting; rooted to run Valetudo locally.
- TODO: specifics. (No public repo. NOTE: P7 Coin-Picker is a stronger, verifiable embedded anchor.)

### P4 — ARC4 Decryption & Cracking Hardware (FPGA)  [gh:ARC-4-Decryption · SystemVerilog/Verilog]
- Hardware **ARC4** stream-cipher decryption on **DE1-SoC (Cyclone V FPGA)**: state-init,
  Key-Scheduling Algorithm (KSA), and Pseudo-Random Generation (PRGA) each as separate **RTL modules**.
- Companion **brute-force cracking** circuit sweeping the keyspace, validating candidate keys by
  printable-ASCII check and displaying the recovered key on the 7-seg displays; **parallelized** the
  cracker for ~2× throughput.
- **Verification:** per-module **testbenches** run in **ModelSim** for both **RTL and post-synthesis
  simulation**; on-board validation comparing decrypted output against known plaintext.
- Synthesis/toolchain: **Quartus Prime**.
- Anchors: SystemVerilog/Verilog RTL, functional verification & testbenches, ModelSim, FPGA, FSM,
  parallel hardware. (Strong, verifiable DV/ASIC project.)

### P5 — FPGA Tetris on Emulated M68k  [gh:Tetris_FPGA · Verilog/Assembly]
- Tetris running on an **emulated Motorola 68k CPU** (with system DRAM + ROM) on **DE1-SoC** in
  **Verilog**; VGA output via a **memory-mapped VGA core** (built on the OpenCores 80×40 adapter,
  integrated as a Quartus **BDF**); hardware **timer interrupts** in Verilog for game timing; game
  logic in **C** / 68k assembly; audible feedback via emulated **SPO256 speech synthesizer**.
- **Solo project** (confirmed 2026-06-12). Course: **CPEN 412**.
- Anchors: Verilog RTL, memory-mapped I/O, interrupts, VGA, embedded/computer-architecture.
- (This is the dv resume's current `bullets_p2_dv` project — now grounded.)

### P6 — M68k Computer System + Memory Subsystem  [gh:cache, gh:DRAM-controller · VHDL/Verilog]
- Built/extended a **Motorola 68k computer system** in Quartus (VHDL + Verilog): ACIA 6850 **UART**,
  address decoding, bus-request / DMA logic.
- **DRAM controller** for the M68k in Verilog (refresh + read/write timing) — repo DRAM-controller.
- **Cache** subsystem within the same M68k system — repo cache. Also an **SPI flash controller**
  integration (OpenCores simple_spi + Winbond W25Q32 + 68k C drivers) — repo Assignment3-SPI-Controller.
- Anchors: VHDL, Verilog, memory controllers (DRAM), caches, UART/serial, SPI, computer architecture.
- (Coursework: **CPEN 412** (confirmed 2026-06-12); same M68k ecosystem as P5.)

### P7 — Coin-Picking Robot  [gh:Coin_Picker · C/PIC32]
- Autonomous robot that detects and retrieves coins within a perimeter defined by **AC current-
  carrying wires**. **Team of 4** (confirmed 2026-06-12); TODO: which parts Aaran owned.
- **PIC32MX130** microcontroller firmware (bare-metal **C**): coin detection, perimeter sensing,
  servo wheel + arm actuation, electromagnet control.
- Power/analog interface: optocouplers, N-/P-FET MOSFET drivers, voltage regulation.
- Anchors: embedded C, bare-metal microcontroller firmware, sensors/actuators, analog interfacing.
  (Strong, verifiable **embedded** anchor — use this for embedded-category roles.)

### P8 — IMDB Review Sentiment Analysis  [gh:IMDB_Review_Sentiment · Python/Jupyter]
- Binary sentiment classification on 50k IMDB reviews: preprocessing (tokenization, stop-word
  removal, lemmatization), **TF-IDF** features + a custom one-hot polarity feature.
- **Logistic Regression** (grid-searched C=3.5: accuracy 0.882, F1 0.884) vs a Random Forest baseline;
  evaluated on accuracy/precision/recall/F1.
- Anchors: Python, scikit-learn, ML / data analysis, model evaluation.

### Minor repos (skill anchors only — no resume bullets unless user expands)
- **ODLC_2023** — UAV object-detection image library (AUVSI/SUAS-style competition context).
- **Capacitor_sensor_game** (Assembly), **Temperature_Strip_Chart** (C), **Lab_6** (Verilog),
  **Small-fun-python-programs** (Python). Anchor general embedded-C / Assembly / Python familiarity.

### P9 — FPGA MP3 Player (RTL Design)  [gh:CPEN311-lab5 · SystemVerilog]  (confirmed 2026-06-12)
- CPEN 311 Lab 5 — confirmed by user to be the dv resume's "FPGA MP3 Player": FSM-controlled
  **Avalon-MM** flash reads, **synchronous FIFO** buffering, **CDC handshake** to the audio codec,
  variable-speed playback + flanger effect; verification with simulation-only memory models
  (**Questa**) and **Signal Tap** on-chip logic analysis.
- NOTE: resume dates it December 2024 but repo activity is November 2023 — reconcile.
- Anchors: SystemVerilog RTL, Avalon-MM, FIFO/CDC, Questa, Signal Tap, FPGA.

### P10 — CMOS Inverter Design & Characterization  (confirmed real via user resume 2026-06-12; no repo)
- Cadence **Virtuoso** / **Spectre** transient sims; symmetrical inverter in a deep sub-micron
  process; t_pLH/t_pHL balanced within **5 ps**; minimized Area-Delay Product under a 10 fF load.
- Anchors: Cadence Virtuoso, Spectre/SPICE, analog/VLSI design. TODO: course code.

### P11 — Conditional PixelCNN++ (CPEN 455 course project)  [gh:pixelcnn · Python/PyTorch]
- Extended unconditional PixelCNN++ to class-conditional generation + zero-shot classification;
  U-Net-style encoder-decoder, fusion-strategy ablations, BPD/accuracy evaluation. Solo (course rule).
- Anchors: PyTorch, deep learning, generative models. TODO: final test accuracy / FID from report.

### Resume projects NOT found on GitHub (user must confirm they are real)
- **Laser Projector** (Altium, LTSpice, MATLAB, STM32) — eit master.
This is plausibly a real course/personal project; keep as-is until confirmed, do not embellish.

---

## COURSEWORK  (study-level wording ONLY — never phrase as professional experience)
- **C1** CPEN 211 / 311 / 412 — SystemVerilog, FSMs, timing, FPGA labs. Anchored by P4/P9
  (CPEN 311: ARC4, MP3 player) and P5/P6 (CPEN 412: Tetris, M68k system — confirmed 2026-06-12).
- **C2** ELEC 404 — RF IC design. TODO: what was designed/analyzed.
- **C3** Interview self-study (UVM, SVA, CDC, C++) — study-level familiarity only; never upgrade into
  experience wording.

---

## SKILLS  (each cites proving entries)
- SystemVerilog (P4, C1) · Verilog (P4, P5, P6, Lab_6) · VHDL (P6) · RTL design (P4, P5)
- Functional verification & testbenches (P4) · ModelSim (P4) · Quartus Prime (P4, P5, P6)
- FPGA / DE1-SoC / Cyclone V (P4, P5, P6) · FSM, memory-mapped I/O, interrupts (P5)
- Memory controllers / DRAM, cache (P6) · UART/serial (P6)
- UVM (familiar — C3; E2 TODO confirm) · SVA (C3) · CDC (C3, P9 MP3 player — confirmed)
- Questa, Signal Tap, Avalon-MM, sync FIFO (P9) · PyTorch / deep learning (P11)
- C / embedded C / bare-metal firmware (P7, Temperature_Strip_Chart) · PIC32 microcontroller (P7)
- C++ (P1; E2/E3 TODO confirm) · Python (P1, P8, Small-fun-python-programs) · scikit-learn / ML (P8)
- ROS / ROS Noetic (P1) · Docker (P1) · PX4 / MAVROS (P1) · VINS-Fusion / FUEL (P1)
- RealSense / sensor integration (P1) · SolidWorks / 3D printing (P1) · Linux (P1, P3)
- Git (all repos) · Assembly / M68k (P5, P6, Capacitor_sensor_game)
- ETAP, AutoCAD, Single-line diagrams, Bluebeam, CADmatic (E4) [work] · MATLAB, Altium, LTSpice
  (eit master projects — confirm with user) · Cadence Virtuoso, Spectre/SPICE (P10 — confirmed)

---

## INFERENCE NOTES

**Pre-approved mappings** (a JD skill on the left may be surfaced from the anchor on the right):
- documentation → P1, E4
- embedded → P1, P7 (Coin-Picker), P5/P6 (M68k)   [P7 replaces P3 as the primary embedded anchor]
- teamwork → P1, P2
- digital verification / DV → P4 (ARC4 testbenches + RTL/post-synth sim), E2 (AMD coverage)
- RTL / FPGA design → P4, P5, P6

**NEVER-claim list** (do not add to a resume unless this bank is updated with a real anchor):
- Protocol-specific DV (e.g. PCIe, USB, AMBA/AXI-by-name) unless explicitly added above.
- PE-stamped / licensed-P.Eng work (Aaran is an EIT, not a P.Eng).
- Any metric not written in this bank.
- Upgrading C-entry (coursework / interview self-study) familiarity into professional experience.
- Embellishing the three "NOT found on GitHub" resume projects beyond what the user confirms.
