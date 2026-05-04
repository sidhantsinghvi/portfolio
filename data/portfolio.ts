export const META = {
  name: "Sidhant Singhvi",
  shortName: "Sidhant",
  email: "ssinghvi@ucsd.edu",
  github: "https://github.com/sidhantsinghvi",
  linkedin: "https://linkedin.com/in/sidhantsinghvi",
  resume: "/resume.pdf",
  location: "San Diego, CA",
  current: "Engineers for Exploration · UCSD",
};

export const BIO_LINES = [
  "I'm a Computer Engineering student at UC San Diego.",
  "I love solving hard real-time problems: messy sensor input on one end, a person who needs instant feedback on the other.",
  "I like working across the whole product loop: the model, the pipeline that feeds it, and the UX the person actually touches. A latency win in inference and a latency win in the render are the same problem to me.",
  "The throughline is shipping the whole thing, not owning one slice. I do my best work in environments where effort shows up directly in the product.",
];

export const EXPERIENCES = [
  {
    id: "brg",
    company: "BRG Energies",
    role: "Systems Engineering Intern",
    period: "Jul 2025–Present",
    location: "San Diego",
    summary:
      "Built agentic workflows that took renewable-energy analysis from a manual process to an automated in-browser run–each agent orchestrates a step, hands off state to the next, and keeps the analyst out of the loop.",
    bullets: [
      "Integrated Taskyon into BRG's platform, enabling automated agent workflows and improving compute efficiency by 28% for renewable energy analysis.",
      "Moved simulation execution into the browser–solar/wind generation runs that previously required manual setup now run on demand.",
      "Implemented client-side state management to keep agent steps, sim outputs, and parcel-level forecasting UI in sync.",
    ],
  },
  {
    id: "e4e",
    company: "Engineers for Exploration",
    role: "Undergraduate Researcher, Firmware & Systems",
    period: "Sep 2025–Present",
    location: "San Diego",
    summary:
      "Field-deployed telemetry for wildlife tracking–low-power radio telemetry drones that wake up, read sensors, talk to a base station, and survive weeks in the field.",
    bullets: [
      "Writing always-on firmware with aggressive sleep/wake cycles to hit multi-week battery life without dropping sensor coverage.",
      "Built sensor polling and RF data pipelines over I²C, UART, and GPIO; interrupt-driven design keeps latency deterministic.",
      "Designed state machines for reliable field operation: graceful sensor dropout, reconnect logic, and power-fault recovery.",
    ],
  },
  {
    id: "qualcomm",
    company: "Qualcomm Institute",
    role: "Firmware Engineering Intern",
    period: "May 2025–Jul 2025",
    location: "San Diego",
    summary:
      "Real-time firmware pipelines keeping VR solar/weather visualizations smooth at 60+ FPS under live sensor load–the constraint was latency, and every subsystem boundary was a place it could leak.",
    bullets: [
      "Formulated real-time firmware pipelines enforcing deterministic execution windows for VR workloads at 60+ FPS.",
      "Engineered UART and SPI sensor interfaces and drivers with 99% runtime reliability.",
      "Applied multithreading to HPC embedded systems, achieving 25% faster compute on CPU baselines.",
    ],
  },
  {
    id: "yonder",
    company: "Yonder Deep",
    role: "Business Lead",
    period: "2023–2024",
    location: "San Diego",
    summary:
      "Underwater robotics team building AUVs for marine research. Led business development–sponsorships, partnerships, the case for why the team's work was fundable–while staying close to acoustic sensing and embedded work on the vehicle.",
    bullets: [
      "Led BD: sponsor pitches, partnership outreach, narrative around the team's research output.",
      "Contributed to acoustic sensing and embedded systems for the AUV.",
    ],
  },
  {
    id: "shrim",
    company: "Shrim Marbles",
    role: "Automation & Vision Intern",
    period: "2023",
    location: "India",
    summary:
      "QA automation on a manufacturing line–computer vision for defect detection plus RFID tracking for material flow.",
    bullets: [
      "OpenCV pipeline for tile crack / defect detection running on the line.",
      "RFID tracking integration for material flow on the production floor.",
    ],
  },
];

export const PROJECTS = [
  {
    id: "eyespy",
    name: "EyeSpy",
    sub: "Real-time assistive AI for smart glasses",
    year: "2024",
    award: "HardHack winner",
    image: "/projects/eyespy-hardware.png",
    imageAlt: "EyeSpy hardware build–Pi, camera ribbon, glasses, speaker, battery pack",
    github: "https://github.com/sidhantsinghvi/EyeSpy",
    span: "wide",
    body:
      "Smart-glasses-style assistive system for dementia care. Camera in, real-time object recognition, contextual feedback through audio. The interesting part was the state retention–the system remembers what you've already been told about so it doesn't repeat itself.",
    pipeline: ["Camera", "Object detection (TF + OpenCV)", "Context memory", "Audio feedback"],
    metrics: [
      { label: "Inference speedup", value: "1.4×" },
      { label: "Pipeline", value: "real-time" },
    ],
    tags: ["assistive AI", "real-time", "computer vision"],
  },
  {
    id: "rehabbuddy",
    name: "RepRight",
    sub: "Real-time rehab trainer with live feedback",
    year: "2025",
    image: "/projects/repright.png",
    imageAlt: "RepRight in-game stickman shooting hoops with live aim/reach meter",
    github: "https://github.com/sidhantsinghvi/rehab-buddy",
    span: "tall",
    body:
      "Gamified rehab trainer that pulls accelerometer data from your phone over phyphox and grades each rep live. Auto-calibrates to your range of motion. The whole pipeline is under 100ms end-to-end so the feedback feels honest.",
    pipeline: ["Phone IMU", "EMA smoothing", "Rep state machine", "Live game render"],
    metrics: [
      { label: "End-to-end latency", value: "low latency" },
      { label: "Calibration", value: "2 reps" },
    ],
    tags: ["sensor pipeline", "real-time", "AI coaching"],
  },
  {
    id: "autonomous",
    name: "Autonomous Drift",
    sub: "ROS2 + Jetson Nano vision-guided RC platform",
    year: "2025",
    image: "/projects/autonomous-drift.png",
    imageAlt: "Autonomous RC car perception/control overlay",
    github: "https://github.com/sidhantsinghvi/-autonomous-vehicle-navigation-system",
    span: "normal",
    body:
      "RC chassis with an OAK-D camera and a Jetson Nano. Yellow lines for the lane, blue lines as drift triggers. Tuning the PID was 80% of the work; getting the perception stable enough that the controller didn't fight noise was the rest.",
    pipeline: ["OAK-D + IMU", "OpenCV path tracking", "PID controller", "VESC motor cmds"],
    metrics: [
      { label: "Stack", value: "ROS2" },
      { label: "Compute", value: "Jetson Nano" },
    ],
    tags: ["robotics", "perception", "control"],
  },
  {
    id: "aec",
    name: "Acoustic Echo Cancellation",
    sub: "Real-time mic cleanup pipeline for wearable devices",
    year: "2025",
    image: "/projects/aec-spectrogram.png",
    imageAlt: "Spectrogram showing frequency content over time",
    github: "https://github.com/sidhantsinghvi/acoustic-echo-cancellation",
    span: "normal",
    body:
      "Real-time pipeline for always-on mic cleanup: when a speaker and mic share the same form factor, the speaker leaks back into the mic and drowns the user's voice in echo. LMS adaptive filter models the echo path and cancels it frame by frame. Spectral subtraction removes residual noise. Energy VAD gates the pipeline so it doesn't process silence. Sub-millisecond per-frame latency — fits inside a 20ms real-time budget with headroom to spare.",
    pipeline: ["Mic + speaker ref", "LMS adaptive AEC", "Spectral subtraction", "VAD gate", "Clean audio"],
    metrics: [
      { label: "Frame latency", value: "~0.3ms" },
      { label: "Frame budget", value: "3% used" },
    ],
    tags: ["audio DSP", "real-time", "wearable"],
  },
  {
    id: "tinyml",
    name: "TinyML RISC CPU",
    sub: "32-bit RISC core with custom ML instructions",
    year: "2025",
    image: "/projects/cpu-pipeline.png",
    imageAlt: "4-stage CPU instruction pipeline timing diagram",
    github: "https://github.com/sidhantsinghvi/tinyml_risc_cpu",
    span: "normal",
    body:
      "Single-cycle Verilog processor with custom MAC4, CONV3, and piecewise sigmoid instructions. Targeted 100 MHz on FPGA. Wrote a Python testbench that runs the design through small ML kernels and plots the waveforms.",
    pipeline: ["Instruction stream", "MAC4 / CONV3", "Sigmoid LUT", "Output"],
    metrics: [
      { label: "Target", value: "100 MHz" },
      { label: "Lang", value: "Verilog" },
    ],
    tags: ["RTL", "hardware ML", "FPGA"],
  },
  {
    id: "errorcorrection",
    name: "Error Detection Circuit",
    sub: "SEC-DED Hamming code in Verilog",
    year: "2024",
    image: "/projects/error-correction.png",
    imageAlt: "Verilog schematic of multi-phase SEC-DED error detection circuit",
    github: "https://github.com/sidhantsinghvi",
    span: "normal",
    body:
      "Multi-phase error detection circuit in Verilog implementing SEC-DED Hamming code: 100% single-bit correction and double-bit detection. Circuit complexity minimised using Karnaugh maps and Quine-McCluskey reduction.",
    pipeline: ["Data in", "Parity gen", "Syndrome decode", "Correct / flag"],
    metrics: [
      { label: "Single-bit", value: "100% corrected" },
      { label: "Double-bit", value: "100% detected" },
    ],
    tags: ["RTL", "Verilog", "digital design"],
  },
  {
    id: "insect",
    name: "Edge Insect Classifier",
    sub: "Multi-model pipeline, ONNX runtime to ViT",
    year: "2024",
    image: null,
    imageMock: "insect",
    github: "https://github.com/sidhantsinghvi/insect-classifier-complete",
    span: "normal",
    body:
      "Four model paths through the same problem: an ONNX edge runtime (~85% acc), PyTorch baselines, IP102 agricultural pest detection, and a foundation model trained on 1M+ insect images (~95%+). The point was studying the accuracy/latency tradeoff as you move toward edge deployment.",
    pipeline: ["Image", "Pre-process", "Inference (ONNX / PyTorch)", "Class"],
    metrics: [
      { label: "Top model", value: "95%+" },
      { label: "Edge model", value: "ONNX" },
    ],
    tags: ["ML", "edge inference", "ONNX"],
  },
  {
    id: "uvm",
    name: "UVM AXI-Lite Verification",
    sub: "SystemVerilog testbench for clock-gating",
    year: "2025",
    image: null,
    imageMock: "uvm",
    github: "https://github.com/sidhantsinghvi/uvm-axi-lite-clockgate",
    span: "normal",
    body:
      "Full UVM environment–agents, monitors, scoreboards–verifying clock-gating behavior on an AXI-Lite block. Clock gating is a quiet but central part of low-power SoC design; getting the verification right matters.",
    pipeline: ["AXI-Lite txn", "UVM agents", "Scoreboard", "Coverage"],
    metrics: [
      { label: "Methodology", value: "UVM" },
      { label: "Lang", value: "SystemVerilog" },
    ],
    tags: ["verification", "RTL", "low-power"],
  },
  {
    id: "vending",
    name: "Vending Machine FSM",
    sub: "Mealy state machine and Booth's multiplier in Digital",
    year: "2024",
    image: null,
    imageMock: "nachos",
    github: "https://github.com/sidhantsinghvi/Sequential-Circuit-Design-vending-machine",
    span: "small",
    body:
      "Sequential circuit design: Mealy state machine for a vending machine controller, optimised Booth's multiplier with hardwired controller to cut clock cycles, and a minimised pattern-recognition Mealy machine. All implemented and verified in the Digital simulation tool.",
    pipeline: ["State encoding", "Next-state logic", "Output logic", "Simulation"],
    metrics: [{ label: "Tool", value: "Digital" }, { label: "Method", value: "Mealy FSM" }],
    tags: ["digital design", "FSM", "sequential circuits"],
  },
  {
    id: "cuda",
    name: "CUDA N-Body",
    sub: "GPU-accelerated gravitational sim",
    year: "2024",
    image: "/projects/cuda-nbody.png",
    imageAlt: "CUDA N-Body gravitational simulation screenshot",
    github: "https://github.com/sidhantsinghvi/cuda-nbody",
    span: "small",
    body:
      "Gravitational N-body sim on CPU vs. GPU. Memory coalescing and thread block sizing made the difference between a 2× and a 30× speedup.",
    pipeline: ["Particles", "Force kernel", "Integrate", "Render"],
    metrics: [{ label: "Speedup", value: "~30×" }],
    tags: ["CUDA", "GPU", "perf"],
  },
];

export const SKILLS = [
  {
    label: "AI / ML",
    items: ["PyTorch", "ONNX", "OpenCV", "TensorFlow", "real-time inference", "edge ML", "agentic workflows"],
  },
  {
    label: "Real-time / systems",
    items: ["multithreading", "audio pipelines", "STT / VAD", "data pipelines", "OS concurrency", "Linux"],
  },
  {
    label: "Languages",
    items: ["Python", "C", "C++", "TypeScript", "Java", "Verilog", "CUDA"],
  },
  {
    label: "Embedded",
    items: ["UART", "SPI", "I2C", "GPIO", "RF modules", "microcontrollers", "power management"],
  },
  {
    label: "Robotics",
    items: ["ROS2", "Jetson Nano", "OAK-D", "PID", "IMU integration", "GNSS / Kalman filter"],
  },
  {
    label: "Web / product",
    items: ["React", "Next.js", "Tailwind", "Supabase", "Node.js"],
  },
  {
    label: "Hardware",
    items: ["FPGA", "RTL", "UVM", "PCB design (KiCad)", "LTspice"],
  },
];

export const PERSONAL = [
  { emoji: "🏄", label: "surfing" },
  { emoji: "🎾", label: "tennis" },
  { emoji: "🥾", label: "hiking" },
];

// Short, inline notes–not formal "principles"
export const NOTES = [
  {
    n: "01",
    note: "Latency is a product feature, not a perf metric. 50ms vs. 500ms isn't a number–it's whether the thing feels broken.",
  },
  {
    n: "02",
    note: "Power shapes architecture. On a battery, every wake cycle is a design decision. Sleep modes aren't optimization, they're the structure.",
  },
  {
    n: "03",
    note: "Real hardware fails differently than demos. RF interference, sensor dropout, thermal throttling–none of it shows up on the bench.",
  },
  {
    n: "04",
    note: "AI is only useful when feedback is timely and contextual. A 98%-accurate model that responds 2s late is useless in a real-time loop.",
  },
];
