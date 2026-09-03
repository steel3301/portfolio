export type ArchitectureStep = {
  label: string;
  sublabel?: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  metrics: ProjectMetric[];
  problem: string;
  approach: string;
  architecture: ArchitectureStep[];
  implementation: string[];
  results: string[];
  lessons: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    id: "recruitment-automation",
    number: "01",
    title: "Recruitment Automation Agent",
    category: "AGENTIC AI · RAG · MULTI-AGENT SYSTEMS",
    tagline:
      "A multi-agent pipeline for automated resume analysis and candidate–job matching.",
    description:
      "End-to-end agentic system that ingests resumes, extracts structured skills through LLM reasoning, embeds candidates into vector space, and matches them against job descriptions using retrieval-augmented generation — with explainable output at every step.",
    technologies: [
      "LangChain",
      "AutoGen",
      "RAG",
      "FAISS",
      "Pinecone",
      "OpenAI API",
      "Docker",
      "Kubernetes",
      "AWS EC2",
      "AWS S3",
    ],
    metrics: [
      { label: "SKILL EXTRACTION ACCURACY", value: "85%" },
      { label: "SCREENING TIME REDUCTION", value: "70%" },
    ],
    problem:
      "Manual resume screening is slow, inconsistent, and unable to scale. Recruiters spend hours on initial shortlisting that produces arbitrary results.",
    approach:
      "Designed a multi-agent architecture where specialized agents handle parsing, extraction, embedding, retrieval, matching, and explanation independently — each with a narrow, well-defined scope.",
    architecture: [
      { label: "RESUME", sublabel: "PDF / DOCX input" },
      { label: "PARSER", sublabel: "Text + structure extraction" },
      { label: "SKILL EXTRACTION", sublabel: "LLM-based NER + reasoning" },
      { label: "VECTOR REPRESENTATION", sublabel: "FAISS / Pinecone embed" },
      { label: "RAG", sublabel: "Job description retrieval" },
      { label: "MATCHING AGENT", sublabel: "Candidate scoring" },
      { label: "EXPLANATION", sublabel: "Structured reasoning output" },
    ],
    implementation: [
      "Built with LangChain orchestration and AutoGen multi-agent coordination",
      "Skill extraction agent uses structured LLM prompting with chain-of-thought reasoning",
      "Embeddings stored in FAISS for fast local search and Pinecone for cloud retrieval",
      "Containerized with Docker; orchestrated on Kubernetes for distributed processing",
      "Deployed on AWS EC2 with S3 for document storage",
    ],
    results: [
      "85% skill extraction accuracy on diverse resume formats",
      "70% reduction in manual screening time",
      "Explainable match scores with cited evidence from resume text",
    ],
    lessons: [
      "Narrow agent scopes produce more reliable pipelines than broad generalist agents",
      "RAG grounding significantly reduces hallucination in matching justifications",
      "Structured extraction prompts outperform generic summarization approaches",
    ],
    github: "#",
  },
  {
    id: "federated-aneurysm-detection",
    number: "02",
    title: "Federated Brain Aneurysm Detection",
    category: "FEDERATED LEARNING · COMPUTER VISION · DISTRIBUTED SYSTEMS",
    tagline:
      "A privacy-preserving distributed training system for medical image AI across 50+ simulated hospital nodes.",
    description:
      "Implemented federated learning across simulated distributed hospital clients to train a 3D CNN for brain aneurysm detection from MRI data — without any raw patient data leaving individual nodes. Used FedAvg and FedProx aggregation with asynchronous update support.",
    technologies: [
      "Federated Learning",
      "3D CNN",
      "FedAvg",
      "FedProx",
      "PyTorch",
      "Docker",
      "Kubernetes",
      "MLflow",
      "AWS S3",
    ],
    metrics: [
      { label: "DETECTION ACCURACY", value: "92%" },
      { label: "DISTRIBUTED NODES", value: "50+" },
    ],
    problem:
      "Medical AI models require large datasets, but patient data cannot be centralized across hospitals due to privacy regulations (HIPAA, GDPR). Traditional centralized training is not viable.",
    approach:
      "Each hospital node trains locally on its own data and shares only encrypted gradient updates with a central aggregator. The global model improves without any raw data leaving individual institutions.",
    architecture: [
      { label: "HOSPITAL NODE A", sublabel: "Local 3D CNN training" },
      { label: "HOSPITAL NODE B", sublabel: "Local 3D CNN training" },
      { label: "HOSPITAL NODE C", sublabel: "Local 3D CNN training" },
      { label: "SECURE AGGREGATOR", sublabel: "FedAvg / FedProx" },
      { label: "GLOBAL MODEL", sublabel: "Aggregated weights" },
    ],
    implementation: [
      "3D CNN architecture designed for volumetric MRI input",
      "FedAvg and FedProx aggregation strategies implemented and benchmarked",
      "Asynchronous gradient updates to handle stragglers in distributed environments",
      "Simulated 50+ distributed client nodes with Docker containers",
      "Kubernetes orchestration for client coordination; MLflow for experiment tracking",
      "AWS S3 for model checkpoint storage",
    ],
    results: [
      "92% detection accuracy while keeping all raw data local",
      "Simulation validated across 50+ distributed nodes",
      "FedProx showed measurable improvement over FedAvg on heterogeneous client data",
    ],
    lessons: [
      "Non-IID data distribution across clients is the primary challenge in federated learning",
      "FedProx regularization meaningfully stabilizes training on heterogeneous data",
      "Asynchronous updates improve throughput but require careful staleness handling",
    ],
    github: "#",
  },
  {
    id: "mgeko",
    number: "03",
    title: "MGEKO",
    category: "COMPUTER VISION · LLM · MULTILINGUAL TRANSLATION",
    tagline:
      "AI-powered manga translation system combining computer vision and multi-model LLM translation.",
    description:
      "End-to-end pipeline that detects and extracts text from manga panels using computer vision, analyzes visual context, and translates using Claude and Gemini with caching — producing high-quality culturally-aware translations at scale.",
    technologies: [
      "OpenCV",
      "LangChain",
      "Claude",
      "Gemini",
      "Flask",
      "Docker",
      "AWS Lambda",
      "AWS S3",
      "Redis",
    ],
    metrics: [
      { label: "BLEU SCORE (MANGA TEST SET)", value: "78%" },
    ],
    problem:
      "Existing manga translation tools treat text extraction and translation as separate problems, losing visual context. Manga dialogue is highly context-dependent — speaker, panel order, and visual tone all affect meaning.",
    approach:
      "Built a unified pipeline where text detection and visual context analysis inform the translation step. Multi-model LLM routing selects the best model per content type, with Redis caching to minimize redundant API calls.",
    architecture: [
      { label: "MANGA PANEL", sublabel: "Image input" },
      { label: "TEXT DETECTION", sublabel: "OpenCV bounding boxes" },
      { label: "CONTEXT ANALYSIS", sublabel: "Visual scene understanding" },
      { label: "LLM TRANSLATION", sublabel: "Claude / Gemini routing" },
      { label: "CACHE", sublabel: "Redis deduplication" },
      { label: "TRANSLATED OUTPUT", sublabel: "Localized text overlay" },
    ],
    implementation: [
      "OpenCV for panel segmentation and text region bounding box detection",
      "LangChain orchestration for multi-model LLM routing between Claude and Gemini",
      "Visual context passed alongside extracted text to improve translation accuracy",
      "Flask API serving the pipeline; containerized with Docker",
      "Serverless deployment on AWS Lambda; S3 for manga asset storage",
      "Redis caching layer to avoid re-translating identical panels",
    ],
    results: [
      "78% BLEU score on manga-specific test sets",
      "Multi-model routing improved domain-specific translation quality over single-model baselines",
      "Redis caching reduced API costs on repeated panel processing",
    ],
    lessons: [
      "Visual context dramatically improves translation accuracy for onomatopoeia and culturally-specific terms",
      "Multi-model routing provides resilience and quality benefits over single-LLM approaches",
      "Manga-specific BLEU evaluation requires domain-adapted reference translations",
    ],
    github: "#",
  },
];
