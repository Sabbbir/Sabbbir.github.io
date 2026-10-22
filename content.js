// Edit this file to update your profile, research, papers, projects, and CV.
const CONTENT = {
  "profile": {
    "name": "Sabbir Ahmed",
    "title": "Machine Learning Researcher",
    "location": "Dhaka, Bangladesh",
    "email": "sabbir.ahmed.cse19.just@gmail.com",
    "photo": "assets/dp.jpg",
    "tagline": "I work on computer vision, large vision-language models, and multimodal learning.",
    "bio": [
      "I’m a machine learning researcher and M.Sc. student at Jashore University of Science and Technology. My research interests span computer vision, large vision-language models, and multimodal learning.",
      "I work with the Bangladesh Computational Social Science Lab on large-scale text classification and language-model fine-tuning, and with the Visual Machine Intelligence Lab at JUST on image mixing and generalization. Alongside research, I lead labs in machine learning, data structures, and IoT."
    ],
    "links": [
      {
        "label": "Email",
        "url": "mailto:sabbir.ahmed.cse19.just@gmail.com",
        "icon": "email"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/Sabbbir",
        "icon": "github"
      },
      {
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/sabbbir-ahmed1925/",
        "icon": "linkedin"
      },
      {
        "label": "Kaggle",
        "url": "https://www.kaggle.com/sabbbirr",
        "icon": "kaggle"
      },
      {
        "label": "Hugging Face",
        "url": "https://huggingface.co/sabbbbir",
        "icon": "huggingface"
      }
    ]
  },
  "research": [
    {
      "role": "Research Assistant",
      "org": "Bangladesh Computational Social Science Lab",
      "location": "Remote",
      "date": "Jul 2024 – Present",
      "points": [
        "PI: Dr. Nur Ahmed, Digital Fellow at MIT and Assistant Professor at the University of Arkansas.",
        "Developed an LLM-based framework to study institutional DEI discourse across 500 U.S. universities, classifying 700,000 tweets within a 9-million-tweet corpus.",
        "Fine-tuned and evaluated BERTweet and Qwen models (4B, 9B, 14B, 27B), including Qwen3.6-27B trained on 4,500 examples with generated reasoning traces.",
        "Engineered distributed Qwen3.6-27B inference with adaptive batching and fault-tolerant worker coordination."
      ]
    },
    {
      "role": "Research Assistant",
      "org": "Visual Machine Intelligence Lab, JUST",
      "location": "Jashore, Bangladesh",
      "date": "2023 – Present",
      "points": [
        "PI: Dr. A F M Shahab Uddin, Assistant Professor, JUST.",
        "Benchmarked image mixing augmentation across 273 experiments on CIFAR/ImageNet and diverse architectures.",
        "Designed CutMix, SaliencyMix, MixUp, and PuzzleMix variants to investigate intra-class and inter-class mixing.",
        "Analyzed feature representations and generalization patterns to characterize the effects of synthetic image mixing."
      ]
    }
  ],
  "projects": [
    {
      "title": "Bengali License Plate Recognition System",
      "date": "Jan – May 2024",
      "tools": "YOLOv8, PyTorch, Django, OpenCV",
      "description": "Built and deployed an end-to-end detection pipeline reaching 96.2% accuracy on a multi-format annotated dataset, with a LiDAR-triggered Raspberry Pi 4 deployment to minimize active compute time.",
      "link": "https://github.com/Sabbbir/image-segmentation"
    },
    {
      "title": "Multi-Institutional Aquaculture Research Project",
      "date": "2023 – 2024",
      "tools": "ESP32, sensor arrays, real-time dashboards",
      "description": "Engineered and deployed a 36-sensor ESP32 array monitoring six water-quality parameters for saltwater shrimp research, with a live dashboard and NVR video integration for remote diagnostics. Collaboration between JUST, Khulna University, and Bangladesh's Ministry of Fisheries and Livestock.",
      "link": ""
    },
    {
      "title": "NASA Space Apps Challenge 2023",
      "date": "Aug 2023",
      "tools": "HTML, CSS, Three.js, Python",
      "description": "Led Team Entergalactic to build an interactive 3D Mars exploration app integrating nine NASA APIs (rover imagery, helicopter telemetry, weather). Advanced to the second round among top teams.",
      "link": "https://github.com/Sabbbir/nasa-space-apps"
    },
    {
      "title": "AI Chatbot on an Open-Source LLM",
      "date": "May 2024",
      "tools": "Ollama (Llama 3-8B), Streamlit",
      "description": "Built a document-grounded chatbot that answers questions from a source PDF, designed to work as an always-on assistant.",
      "link": "https://github.com/Sabbbir/ai-chatbot"
    }
  ],
  "teaching": [
    {
      "role": "Teaching Assistant",
      "org": "Dept. of Computer Science & Engineering, JUST",
      "date": "Oct 2024 – Present",
      "points": [
        "Led labs for 200+ students across two academic years in Machine Learning, Data Structures, and IoT, developing course materials, assignments, and assessments."
      ]
    },
    {
      "role": "Network Operations Intern",
      "org": "BdREN",
      "date": "Feb – Apr 2025",
      "points": [
        "Monitored 195 networks using Wireshark and SolarWinds, simulated routing scenarios in Packet Tracer, and managed data-center support tickets."
      ]
    }
  ],
  "education": [
    {
      "degree": "M.Sc. in Computer Science and Engineering",
      "org": "Jashore University of Science and Technology",
      "date": "Expected Aug 2027",
      "details": "CGPA: 3.69/4.00 (through first semester). Thesis: Robust Fine-Tuning and Alignment of Large Language Models."
    },
    {
      "degree": "B.Sc. in Computer Science and Engineering",
      "org": "Jashore University of Science and Technology",
      "date": "2025",
      "details": "CGPA: 3.20/4.00. Thesis: Guided Unsupervised Segmentation via Cross-Model Prompting."
    }
  ],
  "awards": [
    {
      "title": "Asian Development Bank Scholarship",
      "org": "Graduate studies",
      "date": "2025–2026",
      "description": "Scholarship from the Asian Development Bank for graduate studies."
    },
    {
      "title": "National Innovation Challenge — Finalist",
      "org": "a2i and UNDP",
      "date": "2022",
      "description": "Presented solutions to a ministerial panel."
    },
    {
      "title": "Erasmus+ MELBU Summer School",
      "org": "University of Leipzig, Germany",
      "date": "Aug 2022",
      "description": "Completed a 14-day summer school."
    },
    {
      "title": "Reviewer",
      "org": "IEEE COMPAS",
      "date": "",
      "description": "Academic peer-review service."
    },
    {
      "title": "Grant Proposal Formulation",
      "org": "SPADE-AI",
      "date": "",
      "description": "Co-drafted the technical methodology for a $215K ADB proposal, translating research objectives into a hyperspectral imaging pipeline."
    }
  ],
  "skills": {
    "Programming Languages": [
      "Python",
      "R",
      "C/C++",
      "Java"
    ],
    "ML Frameworks": [
      "PyTorch",
      "OpenCV",
      "YOLO",
      "Hugging Face",
      "Transformers",
      "NLTK"
    ],
    "Databases": [
      "Firebase",
      "MySQL"
    ],
    "Tools": [
      "Git",
      "Linux / Bash",
      "Docker",
      "Weights & Biases",
      "LaTeX"
    ]
  },
  "languages": [
    {
      "name": "English",
      "level": "Proficient — IELTS 7.0"
    },
    {
      "name": "Bengali",
      "level": "Native"
    }
  ],
  "papers": [
    {
      "title": "Institutional DEI Discourse in US Higher Education Amid Political Backlash",
      "authors": "Nur Ahmed, Sabbir Ahmed",
      "status": "Working paper"
    },
    {
      "title": "Revisiting Image Mixing Augmentations: Inter- and Intra-Class Dynamics",
      "authors": "Sabbir Ahmed, Dr. A F M Shahab Uddin",
      "status": "Working paper"
    }
  ]
};

// Portfolio case studies: edit these alongside your project details.
CONTENT.work = [
 {id:'license-plates',category:'COMPUTER VISION / EDGE DEPLOYMENT',title:'Reading Bengali license plates',summary:'An end-to-end recognition system, from an annotated dataset to a Raspberry Pi deployment.',problem:'Recognize Bengali license plates and run the detection pipeline on edge hardware.',contribution:'Curated a dataset in YOLO/COCO formats, built a YOLOv8 detection pipeline, and deployed it on Raspberry Pi 4 with LiDAR-triggered capture.',outcome:'96.2% accuracy on the project dataset, with triggered capture to reduce active compute time.',metric:'96.2%',metricLabel:'accuracy on the project dataset',tools:'YOLOv8 · PyTorch · Django · OpenCV',art:'plate'},
 {id:'aquaculture',category:'SENSING / APPLIED SYSTEMS',title:'A window into aquaculture',summary:'A connected monitoring system for saltwater-shrimp research, bringing sensors and remote diagnostics together.',problem:'Monitor water conditions and give researchers remote visibility into an aquaculture setup.',contribution:'Engineered a 36-sensor ESP32 array and integrated real-time dashboards with NVR video systems.',outcome:'Monitoring across six water parameters for a collaboration involving JUST, Khulna University, and the Ministry of Fisheries and Livestock.',metric:'36',metricLabel:'sensors · 6 water parameters',tools:'ESP32 · Sensor arrays · Real-time dashboards',art:'water'},
 {id:'mars',category:'INTERACTIVE EXPERIENCE / DATA',title:'Exploring Mars through data',summary:'An interactive 3D Mars application built by Team Entergalactic for NASA Space Apps.',problem:'Bring Mars imagery and mission data into an interactive exploration experience.',contribution:'Led the team and integrated NASA datasets for rover imagery, helicopter telemetry, and Mars weather.',outcome:'A 3D application integrating nine NASA APIs.',metric:'9',metricLabel:'NASA APIs integrated',tools:'Three.js · HTML · CSS · Python',link:'https://github.com/Sabbbir/nasa-space-apps',art:'mars'},
 {id:'chatbot',category:'LANGUAGE MODELS / APPLICATION',title:'A chatbot grounded in documents',summary:'A lightweight interface for asking questions about a source PDF using an open-source language model.',problem:'Make the contents of a source PDF accessible through a conversational interface.',contribution:'Built a document-grounded chatbot using Ollama with Llama 3-8B and a Streamlit interface.',outcome:'A working application that answers questions from a source PDF.',metric:'Llama 3',metricLabel:'8B · document-grounded assistant',tools:'Ollama · Streamlit',link:'https://github.com/Sabbbir/ai-chatbot',art:'chat'}
];
