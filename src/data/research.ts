export type ResearchProject = {
  id: string;
  title: string;
  subtitle: string;
  type: "RESEARCH" | "INTERNSHIP";
  institution: string;
  description: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  pipeline?: { label: string; sublabel?: string }[];
};

export const research: ResearchProject[] = [
  {
    id: "ppe-detection",
    title: "Vision-Based PPE Detection",
    subtitle: "CONSTRUCTION SAFETY · EDGE INFERENCE",
    type: "RESEARCH",
    institution: "Independent Research",
    description:
      "Real-time personal protective equipment detection for construction sites using YOLO-based object detection combined with pose estimation. Designed for edge deployment with AWS IoT integration for live safety monitoring.",
    technologies: ["YOLO", "Pose Estimation", "OpenCV", "Edge Inference", "AWS IoT", "Python"],
    metrics: [
      { label: "mAP", value: "0.667" },
      { label: "PRECISION", value: "0.829" },
    ],
    pipeline: [
      { label: "YOLO", sublabel: "Object detection" },
      { label: "POSE ESTIMATION", sublabel: "Body keypoint analysis" },
      { label: "PPE CLASSIFICATION", sublabel: "Helmet / vest / gloves" },
      { label: "EDGE INFERENCE", sublabel: "On-device processing" },
      { label: "AWS IoT", sublabel: "Real-time alerting" },
    ],
  },
  {
    id: "cme-internship",
    title: "College of Military Engineering",
    subtitle: "RESEARCH INTERN · MATERIALS + DATA",
    type: "INTERNSHIP",
    institution: "College of Military Engineering, Pune",
    description:
      "Research internship focused on materials science data analysis. Built Python-based data processing and visualization pipelines to support ongoing research activities. Applied statistical analysis and scientific computing to experimental datasets.",
    technologies: ["Python", "Data Analysis", "Scientific Visualization", "Statistics"],
    metrics: undefined,
    pipeline: undefined,
  },
];
