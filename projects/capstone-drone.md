---
id: capstone-drone
name: Autonomous Indoor Mapping Drone (Drone V3)
type: capstone
course: ELEC 49X                 # TODO: confirm exact capstone course code
client: ICON Labs
start: 2025-09
end: 2026-04
status: completed
team_size: 5
my_role: >
  ROS architecture, V&V and design documentation, SolidWorks frame design
  (Pi holder, prop guards), and flight testing. Team KW-076, Git workflow.
  TODO: confirm/expand — this is from the Jobsearchspec seed [spec].
domains: [robotics, embedded, autonomy]
tech: [ROS Noetic, VINS-Fusion, FUEL, Docker, Raspberry Pi 5, PX4, MAVROS, Intel RealSense D435i, SolidWorks, Linux, Git]
repo: https://github.com/AaranP/Autonomous-drone-upgrade
demo: ""                         # TODO: YouTube/demo video if one exists (hover_test.gif is in the repo)
summary: >
  Autonomous indoor mapping quadrotor for ICON Labs: navigates and builds a
  3D occupancy map with no human input, using visual-inertial odometry and
  frontier-based exploration planning, fully containerized in Docker.
problem: >
  Build a drone that can autonomously explore and map an indoor space
  (GPS-denied) without a human pilot. The previous generation was unstable
  because the ROS Master ran off-board, adding WiFi round-trip latency to
  the control loop.
outcomes:
  - text: Flight-tested in a 10 m × 10 m × 3 m indoor space with closed-loop autonomous flight.
    evidence: repo README (hover_test.gif, operating-environment spec)
  - text: Moved the ROS Master onboard the Raspberry Pi 5, eliminating the WiFi round-trip latency that destabilized the previous generation.
    evidence: repo README, architecture diagram
  - text: Containerized the full stack (separate ARM64 Pi image and x86 ground-station image, ROS Noetic built from source) for reproducible deployment.
    evidence: repo Dockerfile, Dockerfile.groundstation, build scripts
media:
  - file: drone-v3.jpg
    caption: Drone V3 — autonomous indoor mapping quadrotor (241 mm span)
  - file: hover-test.gif
    caption: Drone V3 in stable hover — closed-loop flight with onboard ROS Master
  - file: hardware-wiring.png
    caption: Full wiring diagram of onboard power and signal connections
related_experience: []
resume_bullets: []               # TODO: paste current bullets from resumes/fragments/bullets_p1_dv.tex and bullets_p1_eit.tex
featured: true
visibility: public
---

## What I built

Quadrotor (241 mm span, custom carbon-fiber + PLA+ frame) that explores and
maps indoor spaces autonomously:

- **State estimation:** VINS-Fusion fusing stereo-IR from an Intel RealSense
  D435i (30 Hz) with a WHEELTEC N100 IMU (200 Hz).
- **Exploration:** FUEL (Fast UAV Exploration) — hierarchical 3D frontier
  planning at ~10 Hz, publishing trajectory setpoints back to the drone.
- **Flight stack:** Holybro Kakute H7 Mini running PX4 (1 kHz attitude loop),
  bridged to ROS via MAVROS over UART; HAKRC BLHeli_32 ESC (DShot600).
- **Compute split:** Raspberry Pi 5 (16 GB) onboard runs roscore, sensor
  drivers, MAVROS, and px4ctrl; the ground station runs VINS-Fusion, FUEL,
  and Rviz over WiFi (Direct IP or Tailscale).
- **Reproducibility:** everything runs in Docker — an ARM64 image for the Pi
  (ROS Noetic compiled from source, librealsense 2.50.0) and an x86
  ground-station image, with interactive launch scripts.

My specific ownership: ROS architecture, V&V / design documentation,
SolidWorks frame parts, flight testing. <!-- TODO: confirm and add detail on
what the V&V documentation covered and any test campaign results -->

## What I learned

TODO: fill in — e.g. debugging distributed ROS over WiFi, VINS extrinsic/
noise calibration for the N100, lessons from the previous generation's
latency problem.
