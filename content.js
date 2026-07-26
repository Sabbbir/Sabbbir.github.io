/**
 * ============================================================
 *  PORTFOLIO CONTENT
 * ============================================================
 *  This file is the ONLY file you should need to touch to keep
 *  your site up to date. Everything below is plain data — the
 *  page (script.js) reads this and builds the HTML for you.
 *
 *  HOW TO ADD SOMETHING
 *    Copy an existing object inside the relevant array, paste
 *    it as a new entry, and edit the text. Order in the array
 *    = order on the page (newest/most important first).
 *
 *  HOW TO REMOVE SOMETHING
 *    Delete its object from the array (including the { } and
 *    the trailing comma of the entry before/after it).
 *
 *  HOW TO EDIT SOMETHING
 *    Just change the text inside the quotes.
 * ============================================================
 */

const CONTENT = {

  // ---- Identity -------------------------------------------------
  profile: {
    name: "Sabbir Ahmed",
    title: "Machine Learning Researcher",
    location: "Dhaka, Bangladesh",
    email: "sabbir.ahmed.cse19.just@gmail.com",
    tagline:
      "I work across computer vision, LLM fine-tuning, and applied deep learning — currently juggling four research collaborations spanning Bangladesh and the US, mostly on a zero-compute budget.",
    bio: [
      "I'm a Machine Learning researcher with 2.5+ years of experience spanning computer vision, NLP/LLM fine-tuning, and applied deep learning. I like problems that force creative constraints — most of my work has run on free-tier or preemptible compute, which means fault tolerance and efficient pipelines matter as much as the modeling itself.",
      "Right now I split my time across four research roles: benchmarking dropout-based regularization methods with a team at UT Dallas, leading a data-augmentation study at my home lab in Bangladesh, running a large-scale LLM fine-tuning pipeline with a lab at the University of Arkansas, and teaching machine learning to 250+ undergraduates.",
      "Before all that, my undergraduate thesis took a zero-shot medical segmentation pipeline from a Dice score of 0.28 to 0.87 by repurposing the model's own mistakes as visual prompts — a result I'm still fond of."
    ],
    // Fill in your real Kaggle / Hugging Face URLs — placeholders for now.
    links: [
      { label: "Email", url: "mailto:sabbir.ahmed.cse19.just@gmail.com", icon: "email" },
      { label: "GitHub", url: "https://github.com/Sabbbir", icon: "github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sabbbir-ahmed1925/", icon: "linkedin" },
      { label: "Kaggle", url: "#", icon: "kaggle" },
      { label: "Hugging Face", url: "#", icon: "huggingface" }
    ]
  },

  // ---- Research experience ---------------------------------------
  research: [
    {
      role: "Research Assistant",
      org: "AI Security Research Lab, University of Texas at Dallas",
      location: "Remote",
      date: "Mar 2026 – Present",
      points: [
        "Collaborate with a cross-institutional team to design and benchmark novel dropout-based regularization methods for improving deep learning generalization.",
        "Reproduce published regularization techniques against baseline architectures, iterating on a new approach every few weeks."
      ]
    },
    {
      role: "Graduate Research Assistant",
      org: "Visual Machine Intelligence Lab, Jashore University of Science and Technology",
      location: "Jashore, Bangladesh",
      date: "Jul 2025 – Present",
      points: [
        "Co-developed the technical methodology and visual documentation for SPADE-AI, a hyperspectral soil-reconstruction and crop-suitability proposal.",
        "Leading an independent study on data augmentation (CutMix, MixUp, SaliencyMix), benchmarking a CutMix-augmented ResNet-18 on CIFAR-10/100 and scaling next to Vision Transformers."
      ]
    },
    {
      role: "Research Assistant",
      org: "BCS2 Lab, University of Arkansas",
      location: "Remote",
      date: "Jul 2024 – Present",
      points: [
        "Designed a zero-budget, semi-supervised labeling pipeline for 9 million tweets from the top 500 US universities, orchestrating decentralized asynchronous Gemini API calls in place of manual annotation.",
        "Fine-tuned BERTweet for large-scale DEI-trend classification, and distilled reasoning traces from Qwen-14B into a curated set used to QLoRA fine-tune Qwen models from 4B to 27B parameters.",
        "Built a fault-tolerant fine-tuning framework — async orchestration, write-ahead checkpoint logging, OOM-aware batch scaling, graceful shutdown on preemption — to run reliably on free-tier, preemptible GPUs."
      ]
    },
    {
      role: "Research Assistant (Undergraduate) — B.Sc. Thesis",
      org: "Guided Unsupervised Segmentation via Cross-Model Prompting",
      location: "Jashore University of Science and Technology",
      date: "Nov 2023 – Jun 2025",
      points: [
        "Engineered a zero-shot medical segmentation pipeline (OneFormer + SegGPT) for BraTS MRI scans, repurposing the model's own domain-shifted misclassifications as visual prompts to guide tumor identification.",
        "Improved segmentation Dice score from 0.28 to 0.87 without any additional labeled training data."
      ]
    }
  ],

  // ---- Projects ---------------------------------------------------
  projects: [
    {
      title: "Bengali License Plate Recognition System",
      date: "Jan – May 2024",
      tools: "YOLOv8, PyTorch, Django, OpenCV",
      description:
        "Built and deployed an end-to-end detection pipeline reaching 96.2% accuracy on a multi-format annotated dataset, with a LiDAR-triggered Raspberry Pi 4 deployment to minimize active compute time.",
      link: "https://github.com/Sabbbir/image-segmentation"
    },
    {
      title: "Multi-Institutional Aquaculture Research Project",
      date: "2023 – 2024",
      tools: "ESP32, sensor arrays, real-time dashboards",
      description:
        "Engineered and deployed a 36-sensor ESP32 array monitoring six water-quality parameters for saltwater shrimp research, with a live dashboard and NVR video integration for remote diagnostics. Collaboration between JUST, Khulna University, and Bangladesh's Ministry of Fisheries and Livestock.",
      link: ""
    },
    {
      title: "NASA Space Apps Challenge 2023",
      date: "Aug 2023",
      tools: "HTML, CSS, Three.js, Python",
      description:
        "Led Team Entergalactic to build an interactive 3D Mars exploration app integrating nine NASA APIs (rover imagery, helicopter telemetry, weather). Advanced to the second round among top teams.",
      link: "https://github.com/Sabbbir/nasa-space-apps"
    },
    {
      title: "AI Chatbot on an Open-Source LLM",
      date: "May 2024",
      tools: "Ollama (Llama 3-8B), Streamlit",
      description:
        "Built a document-grounded chatbot that answers questions from a source PDF, designed to work as an always-on assistant.",
      link: "https://github.com/Sabbbir/ai-chatbot"
    }
  ],

  // ---- Teaching & professional -------------------------------------
  teaching: [
    {
      role: "Teaching Assistant",
      org: "Dept. of Computer Science & Engineering, JUST",
      date: "Oct 2024 – Present",
      points: [
        "Independently instruct 250+ students across Machine Learning, IoT, and Data Structures courses.",
        "Built 15 auto-graded assignments, cutting grading time by roughly 60%."
      ]
    },
    {
      role: "Network Operations Intern",
      org: "BdREN",
      date: "Feb – Apr 2025",
      points: [
        "Monitored 195 networks using Wireshark and SolarWinds, simulated routing scenarios in Packet Tracer, and managed data-center support tickets."
      ]
    }
  ],

  // ---- Education -----------------------------------------------------
  education: [
    {
      degree: "M.Sc. Engineering in Computer Science and Engineering",
      org: "Jashore University of Science and Technology",
      date: "Jun 2025 – Present"
    },
    {
      degree: "B.Sc. in Computer Science and Engineering",
      org: "Jashore University of Science and Technology",
      date: "2020 – 2025"
    }
  ],

  // ---- Awards & service ------------------------------------------------
  awards: [
    {
      title: "Erasmus+ MELBU Summer School",
      org: "Leipzig, Germany",
      date: "Aug 2022",
      description: "Studied leadership and innovation management, and conducted German SME market research alongside peers from six countries."
    },
    {
      title: "National Innovation Challenge, Bangladesh — Top 40 Finalist",
      org: "a2i (ICT Division), Cabinet Division & UNDP Bangladesh",
      date: "Nov 2022",
      description: "Selected from 1,000+ applicants and presented to a ministerial panel with mentorship from UNDP innovation advisors."
    },
    {
      title: "Reviewer, IEEE COMPAS 2025",
      org: "AI, Machine Learning & Soft Computing track",
      date: "2025",
      description: "Academic peer-review service."
    }
  ],

  // ---- Skills ------------------------------------------------------------
  skills: {
    "Computer Vision": ["PyTorch", "OpenCV", "YOLO", "OneFormer", "SegGPT", "Vision Transformers", "Zero-shot detection"],
    "NLP & LLMs": ["Hugging Face Transformers", "LoRA / QLoRA fine-tuning", "Weak supervision", "LLM benchmarking", "Prompt engineering"],
    "ML Infrastructure": ["Distributed training", "Fault-tolerant pipelines", "Edge deployment (Raspberry Pi, ESP32)", "Data augmentation"],
    "Languages & Tools": ["Python", "C/C++", "Java", "NumPy", "Pandas", "Git", "Docker", "Linux"]
  },

  languages: [
    { name: "English", level: "Proficient — IELTS 7.0" },
    { name: "Bengali", level: "Native" }
  ]
};
