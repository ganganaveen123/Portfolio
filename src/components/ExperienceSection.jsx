import { ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Data Analytics Intern",
    company: "EDUNET Foundation",
    duration: "Jun 2024 – Aug 2024",
    description:
      "Worked with large datasets using Python libraries (NumPy, Pandas, Matplotlib, Seaborn). Built dashboards, performed statistical analysis, and extracted insights to support business decisions.",
    skills: ["Python", "Data Analysis", "Visualization"],
    certificateImage: "/certificates/DataAnalytics.png",
  },
  {
    id: 2,
    title: "AI Researcher – Intelligent Medical Chatbot",
    company: "Research Contribution",
    duration: "Dec 2024 – Present",
    description:
      "Developing a chatbot using NLP and CNNs for analyzing medical reports and scans. Leveraging TensorFlow and Scikit-learn to provide intelligent medical recommendations.",
    skills: ["NLP", "TensorFlow", "Scikit-learn"],
    // certificateImage: "#",
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "CODSOFT",
    duration: "Mar 2024 – Apr 2024",
    description:
      "Completed hands-on projects including portfolio design, responsive layouts, and JavaScript-based interactivity during the internship. Strengthened frontend fundamentals and practiced client-focused development.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    certificateImage: "/certificates/codsoft.png",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here's a quick overview of my hands-on experiences and internship contributions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{exp.company}</p>
                <p className="text-xs text-muted-foreground mb-3">{exp.duration}</p>

                <p className="text-muted-foreground text-sm mb-4">
                  {exp.description}
                </p>

                {exp.certificateImage && (
                  <a
                    href={exp.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                    title="Click to view full certificate"
                  >
                    <img
                      src={exp.certificateImage}
                      alt="Certificate Preview"
                      className="w-32 h-auto border rounded hover:opacity-90 hover:scale-105 transition"
                    />
                    <div className="flex items-center gap-1 text-sm text-blue-600 mt-1">
                      View Certificate <ExternalLink size={14} />
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
