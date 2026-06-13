---
id: coin-picker-robot
name: Coin-Picking Robot
type: course                     # TODO: confirm — ELEC 291 (or similar design studio) term project?
course: ""                       # TODO: course code
start: 2022-03                   # repo created 2022-03; TODO: confirm project start
end: 2022-04                     # TODO: confirm end month
status: completed
team_size: 4
my_role: >
  TODO: which parts you owned (firmware? analog/power circuitry? mechanical?).
domains: [embedded, robotics, analog]
tech: [C, PIC32, Python]
repo: https://github.com/AaranP/Coin_Picker
demo: https://www.youtube.com/watch?v=dFou7sFT2Rw
summary: >
  Autonomous robot that detects and retrieves coins within a perimeter
  defined by AC current-carrying wires, built around bare-metal PIC32
  firmware, servo actuation, and an electromagnet pickup arm.
problem: >
  Detect coins on the ground, stay inside an invisible boundary (AC-carrying
  perimeter wire), navigate to each coin, and pick it up — all autonomously
  on a small battery-powered chassis.
outcomes:
  - text: Working autonomous coin retrieval demonstrated on video — detection, perimeter avoidance, navigation, and electromagnet pickup.
    evidence: YouTube demo linked in repo README; Coin Picking Robot Report.pdf in repo
media:                           # images clipped from the design report (Figures 9, 12, 13)
  - file: robot.jpg
    caption: The coin-picking robot — drive base, breadboards, and sensor wiring
  - file: pickup-arm.jpg
    caption: Electromagnet pickup arm on two servos, with collected coins in the basket
  - file: h-bridge-diagram.png
    caption: H-bridge motor driver with optocoupler isolation (report block diagram)
  - file: coin-picker-report.pdf
    caption: Full design report (40 pages)
related_experience: []
resume_bullets: []
featured: true
visibility: public
---

## What I built

Bare-metal C firmware on a PIC32MX130 covering the whole control loop:
coin detection, perimeter sensing (AC field from the boundary wires), servo
wheel drive (Solarbotics GM4 gear motors), servo-actuated pickup arm, and
electromagnet control.

The electronics included the power/analog interface: optocouplers for
isolation, N-FET and P-FET MOSFET drivers for the motors and electromagnet,
and voltage regulation off a 9 V + 4×AA supply. The full design is written
up in the report PDF in the repo.

This is the portfolio's primary verifiable bare-metal embedded anchor
(experience bank P7).

## What I learned

TODO: fill in — e.g. analog sensing in a noisy environment (AC field
detection), driving inductive loads, tuning detection thresholds.
