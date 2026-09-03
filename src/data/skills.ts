export type Skill = {
  name: string;
  context: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-llm",
    label: "AI / LLM",
    skills: [
      { name: "OpenAI", context: ["GPT-4 / API integration", "Function calling", "Embeddings"] },
      { name: "Llama", context: ["Open-weight models", "Local inference", "Fine-tuning"] },
      { name: "Claude", context: ["Long context reasoning", "Instruction following", "Agentic tasks"] },
      { name: "Gemini", context: ["Multimodal reasoning", "Translation", "Code generation"] },
      { name: "LangChain", context: ["Agent orchestration", "RAG pipelines", "Workflow construction"] },
      { name: "LlamaIndex", context: ["Document indexing", "Retrieval augmentation", "Knowledge graphs"] },
      { name: "AutoGen", context: ["Multi-agent systems", "Agent collaboration", "Role-based orchestration"] },
      { name: "Hugging Face", context: ["Model hub", "Transformers", "Inference pipelines"] },
      { name: "RAG", context: ["Retrieval-augmented generation", "Hybrid search", "Context grounding"] },
      { name: "Vector Databases", context: ["FAISS", "Pinecone", "Embedding storage"] },
    ],
  },
  {
    id: "ml-cv",
    label: "ML / CV",
    skills: [
      { name: "Deep Learning", context: ["Neural network design", "Training pipelines", "Loss optimization"] },
      { name: "Computer Vision", context: ["Image classification", "Object detection", "Segmentation"] },
      { name: "YOLO", context: ["Real-time detection", "PPE identification", "Custom training"] },
      { name: "OpenCV", context: ["Image processing", "Panel segmentation", "Bounding box extraction"] },
      { name: "Federated Learning", context: ["FedAvg / FedProx", "Distributed training", "Privacy preservation"] },
      { name: "Model Evaluation", context: ["mAP", "BLEU", "Precision / Recall"] },
      { name: "MLflow", context: ["Experiment tracking", "Model registry", "Artifact logging"] },
      { name: "PyTorch", context: ["Model definition", "Custom training loops", "GPU acceleration"] },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    skills: [
      { name: "Python", context: ["Primary language", "Automation", "ML pipelines"] },
      { name: "TypeScript", context: ["Frontend development", "Type safety", "React apps"] },
      { name: "C++", context: ["Systems programming", "Performance-critical code"] },
      { name: "JavaScript", context: ["Web development", "React", "API integrations"] },
      { name: "React", context: ["Component-based UI", "State management", "Dashboards"] },
      { name: "Flask", context: ["REST APIs", "ML model serving", "Microservices"] },
      { name: "FastAPI", context: ["Async APIs", "OpenAPI docs", "High-performance endpoints"] },
      { name: "Redis", context: ["Caching layer", "Session management", "Pub/sub"] },
      { name: "PHP", context: ["eCommerce backend", "Server-side logic"] },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    skills: [
      { name: "Docker", context: ["Containerization", "Multi-stage builds", "Compose"] },
      { name: "Kubernetes", context: ["Container orchestration", "Distributed workloads", "Deployment scaling"] },
      { name: "AWS", context: ["EC2", "S3", "Lambda", "IoT"] },
      { name: "GitHub Actions", context: ["CI/CD pipelines", "Automated testing", "Deployment workflows"] },
      { name: "CI/CD", context: ["Continuous integration", "Automated deployment", "Pipeline design"] },
      { name: "Git", context: ["Version control", "Branching strategies", "Collaborative workflows"] },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL", context: ["Relational data modeling", "Query optimization", "Transactions"] },
      { name: "MySQL", context: ["Relational databases", "ORM integration", "Migrations"] },
      { name: "Redis", context: ["Key-value store", "Cache management", "Real-time data"] },
      { name: "FAISS", context: ["Vector similarity search", "ANN indexing", "Embedding retrieval"] },
      { name: "Pinecone", context: ["Managed vector DB", "Semantic search", "Cloud embeddings"] },
    ],
  },
];
