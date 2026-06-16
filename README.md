# PathSync 🌐
A browser-based network packet routing simulator built in HTML/CSS/JS as a
Design and Analysis of Algorithms course project. Visualize Dijkstra's and
Bellman-Ford algorithms side-by-side, stress-test network resilience, and
benchmark real performance — all running live in the browser.

## Overview
PathSync turns routing theory into an interactive lab. You design custom
network topologies, fire packets across them, and watch both algorithms race
in real time — complete with pseudocode traces, operation counters, and
auto-detected negative-weight warnings. Four dedicated modules cover
simulation, analytics, chaos engineering, and algorithm documentation.

## Pages
| Page | Purpose |
|---|---|
| `index.html` | Landing page & feature overview |
| `simulator.html` | Interactive pathfinder with live routing table |
| `analytics.html` | Algorithm benchmarks & complexity growth curves |
| `diagnostics.html` | Chaos engineering & Monte Carlo resilience tests |
| `docs.html` | Theory, pseudocode, and protocol reference |

## Features
- Side-by-side Dijkstra vs Bellman-Ford visualization on a live graph canvas
- Custom topology designer — add nodes, edges, and adjust link weights
- Real-time routing table generated from any source node
- Negative weight detection — auto-warns when Dijkstra may give wrong results
- Packet simulation — send single or multi-packet bursts across the network
- Link/node failure injection and one-click restore
- Congestion simulation and negative-weight demo modes
- Benchmark suite — execution latency (µs), operation trace counts, growth curves
- Chaos Monkey daemon with configurable failure intervals
- Monte Carlo simulator — reliability curves across failure probability ranges
- Live resilience dashboard with connectivity ratio tracking
- Dark/light theme toggle

## Algorithms
| Algorithm | Time Complexity | Use Case |
|---|---|---|
| Dijkstra | O(V²) / O(E log V) | Non-negative weights, faster in practice |
| Bellman-Ford | O(V · E) | Handles negative weights, detects negative cycles |

## How to Run
No build step required — open any HTML file directly in a browser.

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Navigate to **Simulator** to start routing packets

> All logic runs client-side. No server, no dependencies, no install.

## Tech Stack
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)

## About
Built as a semester project for Design and Analysis of Algorithms. The goal
was to implement and compare two foundational shortest-path algorithms in a
realistic, interactive environment — demonstrating how routing protocols in
real networks rely on the same core graph theory covered in class.
