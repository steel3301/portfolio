export const metadata = {
  title: "Contact — Kaustubh Warme",
  description:
    "Get in touch with Kaustubh Warme for AI/ML engineering, consulting, or project collaborations.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
      <div className="border-2 border-ink p-8 md:p-12 bg-paper shadow-neo mb-8">
        <p className="label-upper text-accent mb-2">DIRECT INQUIRIES</p>
        <h1 className="font-display font-bold text-ink uppercase text-3xl md:text-5xl tracking-tight mb-4">
          CONTACT & CONNECT
        </h1>
        <p className="font-body text-ink-muted max-w-xl text-base leading-relaxed">
          Reach out directly via email, GitHub, or LinkedIn. I am always open to discussing new AI/ML projects, research collaborations, or technical opportunities.
        </p>
      </div>
    </div>
  );
}
