---
id: temperature-strip-chart
name: Real-Time Temperature Strip Chart
type: course                     # TODO: confirm course (same design lab era as capacitor-sensor-game?) or personal
course: ""                       # TODO: course code
start: 2022-10
end: 2022-10
status: completed
team_size: 1                     # TODO: confirm
my_role: ""
domains: [embedded, instrumentation]
tech: [C, Python, Matplotlib, ATmega328P]
repo: https://github.com/AaranP/Temperature_Strip_Chart
demo: ""
summary: >
  Embedded digital thermometer: ATmega328P firmware in C reads an LM335
  temperature sensor through an SPI ADC and streams readings over serial to
  a Python script that plots a live strip chart in Matplotlib.
problem: >
  Measure and visualize temperature in real time across the firmware/host
  boundary — analog sensing, SPI ADC reads, serial framing, and live
  host-side plotting.
outcomes:
  - text: Working live temperature plot fed by C firmware (adc_spi.c) over a serial link to Python (serial_in.py, Stripchart.py).
    evidence: repo README and source files
media: []
related_experience: []
resume_bullets: []
featured: false
visibility: public
---

## What I built

Two halves: ATmega328P firmware in C that samples the LM335 sensor via an
SPI ADC and writes readings out the UART, and a Python host program that
opens the serial port and renders a continuously scrolling Matplotlib strip
chart.

## What I learned

TODO: fill in.
