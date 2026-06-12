---
id: capacitor-sensor-game
name: Capacitive-Touch Reaction Game (8051 Assembly)
type: course                     # TODO: confirm course (ELEC 291-style design lab?) or reclassify as personal
course: ""                       # TODO: course code
start: 2022-10
end: 2022-10
status: completed
team_size: 1                     # TODO: confirm
my_role: ""
domains: [embedded]
tech: [8051 Assembly]
repo: https://github.com/AaranP/Capacitor_sensor_game
demo: ""
summary: >
  Two-player reaction game on an 8051-family microcontroller, written
  entirely in assembly: players slap capacitive touch sensors in response to
  high/low speaker tones, with LCD scorekeeping and victory music.
problem: >
  Build an interactive game from bare metal in assembly — tone generation
  via timer interrupts, capacitive-sensor slap detection, scoring rules
  (first to 5 wins; slapping on a low tone loses a point), LED feedback, and
  LCD messaging.
outcomes:
  - text: Complete game loop in a single assembly program using timer ISRs for sound, with LED slap confirmation and end-of-game music.
    evidence: Touch_game.asm feature header in repo
media: []
related_experience: []
resume_bullets: []
featured: false
visibility: public
---

## What I built

A single-file 8051 assembly program (`$MODLP51` target, 22.1184 MHz crystal)
implementing the full game: Timer 0 ISR-driven tone generation, capacitive
touch sensing for two players, score tracking with the asymmetric high/low
tone rules, LCD prompts and winner announcement, and music playback on win.

## What I learned

TODO: fill in.
