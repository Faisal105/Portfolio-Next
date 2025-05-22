'use client';
import AnimatedSection from "../AnimatedSection";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import { motion } from "framer-motion";
import { Briefcase, Server, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

const experiences = [
  {
    company: "Department of Municipality and Transportation (DMT) - TAMM Project",
    title: "Full-Stack Developer | TAMM Developer",
    location: "Abu Dhabi, UAE",
    date: "April 2024 – Present",
    color: "from-blue-500 to-blue-700",
    skills: [
      "ReactJS", "Redux", "Node.js", ".NET Core", "ExpressJS", "SQL", "Entity Framework", "Material UI", "Tailwind CSS", "Bootstrap", "Ant Design", "CI/CD", "Azure", "Workbench", "Camunda Modeler", "Kibana", "Dynatrace"
    ],
    highlights: [
      "Designed and deployed end-to-end services using TAMM Workbench (ReactJS, Redux, Node.js) and .NET Core/ExpressJS for scalable backend operations, boosting operational efficiency by 20%.",
      "Developed and maintained .NET Core APIs to support backend operations and service integrations, enhancing performance and data handling efficiency.",
      "Engineered RESTful APIs using Node.js and .NET Core with SQL databases and Entity Framework (TAMM), enabling robust data handling and seamless integration across modules.",
      "Built responsive, accessible UIs using Material UI, Tailwind CSS, Bootstrap, and Ant Design, delivering consistent user experiences across platforms.",
      "Led 15+ production releases adhering to TAMM Ops QA standards, utilizing CI/CD pipelines and cloud deployment strategies to ensure zero post-release defects and rapid delivery cycles.",
      "Utilized Workbench (Custom DLS) and Camunda Modeler for process automation, streamlining workflows.",
      "Diagnosed and resolved 50+ service issues using Kibana and Dynatrace, proactively identifying 15+ critical performance bottlenecks and reducing recurring incidents by 35%."
    ],
    services: [
      "Issue Clearance for Municipality Assets",
      "Open a Company Account in Department of Municipalities and Transport",
      "Transfer Animal Ownership Between Individuals and Establishments",
      "Reserve a Sports Facility",
      "Close Animal Profile"
    ]
  },
  {
    company: "Royal Cyber Inc.",
    title: "Software Engineer",
    location: "Naperville, USA (Remote)",
    date: "June 2022 – April 2024",
    color: "from-purple-500 to-indigo-700",
    skills: [
      "ReactJS", "Angular", "Next.js", "Vue.js", "Redis", "CI/CD", "GitHub Actions", "Azure", "Socket.io", "Jest", "AWS"
    ],
    highlights: [
      "Built scalable, responsive applications using ReactJS, Angular, Next.js, and Vue.js frameworks.",
      "Integrated Redis for caching and optimized API calls, reducing response times by 40%.",
      "Designed CI/CD pipelines with GitHub Actions for automated deployments.",
      "Deployed and managed applications on Azure Cloud, leveraging its services for scalability and reliability.",
      "Developed dynamic, real-time platforms using Socket.io for seamless user interactions.",
      "Strengthened code reliability with comprehensive testing suites using Jest.",
      "Collaborated with teams to integrate cloud solutions via AWS and Azure.",
      "Worked on a Corporate Banking project focused on risk analysis and profit & loss control, ensuring data-driven financial decision-making.",
      "Implemented secure API integrations with banking systems to enhance transaction monitoring and compliance.",
      "Enhanced data visualization dashboards for financial risk assessment, enabling better strategic planning for corporate clients."
    ],
    projects: [
      { name: "UFA.com", url: "https://ufa.com/" },
      { name: "Dr. Reddy's Lab" },
      { name: "Laminex Australia", url: "https://www.laminex.com.au/" },
      { name: "Rentacenter" }
    ]
  },
  {
    company: "Stack Intel .IO",
    title: "Associate Software Engineer",
    location: "Lahore, PK",
    date: "Feb 2021 - March 2022",
    color: "from-green-500 to-green-700",
    skills: [
      "ReactJS", "Ant Design", "Node.js", "ExpressJS", "JWT", "Custom Hooks"
    ],
    highlights: [
      "Designed and implemented interactive UIs using ReactJS and Ant Design.",
      "Built backend servers using Node.js and ExpressJS, ensuring efficient data handling.",
      "Established dynamic role management systems and user authentication with JWT.",
      "Developed reusable components, improving code efficiency and testability.",
      "Integrated third-party services and managed streaming using custom hooks."
    ]
  }
];

const allSkills = [
  "JavaScript", "TypeScript", "C#", "ReactJS", "Angular", "NextJS", "VueJS", ".NET Core", "ASP.NET", "Entity Framework", "HTML", "CSS", "Node.js", "ExpressJS", "Redux", "Material UI", "Tailwind CSS", "Bootstrap", "Ant Design", "SharePoint", "Power Apps", "Power Automate", "Workbench", "Camunda Modeler", "Jira", "ServiceNow", "Kibana", "Firebase", "GraphQL", "Microsoft Azure", "Microsoft DevOps Services", "Cursor-AI", "Loveable-AI", "BoltAI", "SQL", "MongoDB", "NO-SQL", "Git", "GitHub", "GitLab"
];

const summary = `Experienced Software Engineer with 4+ years of expertise in front-end and back-end development using modern web technologies such as ReactJS, Angular, Node.js, .NET Core, and TypeScript. Skilled in building scalable solutions across Microsoft technologies including SharePoint, Power Apps, Power Automate, and ASP.NET. Proven track record of delivering innovative software in Agile environments. Adept at resolving technical challenges, collaborating with cross-functional teams, and consistently driving project success with strong problem-solving and technical capabilities.`;

export default function ExperienceSection() {
  // Simulate loading state for demo
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedSection id="experience" className="py-24 mesh-gradient relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(var(--primary)/0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,hsl(var(--secondary)/0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,hsl(var(--accent)/0.08),transparent_60%)]" />
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
        <div className="inline-block mb-4">
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-12 h-12 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[2px]">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
          </motion.div>
        </div>
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{summary}</p>
      </motion.div>
      {/* Skills Cloud */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-wrap justify-center gap-2 mb-12">
        {allSkills.map((skill) => (
          <Badge key={skill} className="bg-background/60 backdrop-blur-sm border-primary/10 text-primary/90 hover:border-primary/30 transition-all duration-200">{skill}</Badge>
        ))}
      </motion.div>
      {/* Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Animated vertical line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: loading ? 0 : '100%' }}
          transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full z-0"
          aria-hidden
        />
        <div className="space-y-16 relative z-10">
          {loading ? (
            Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 relative`}> 
                <div className="flex-1">
                  <Skeleton className="h-32 w-full mb-2" />
                  <Skeleton className="h-6 w-1/2 mb-1" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
                <div className="flex flex-col items-center">
                  <Skeleton className="w-8 h-8 rounded-full mb-2" />
                  <Skeleton className="w-1 h-24" />
                </div>
              </div>
            ))
          ) : (
            experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80, scale: 0.95, rotate: isLeft ? -3 : 3 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.15, type: 'spring', bounce: 0.3 }}
                  className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 relative`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.7, delay: 0.2 + idx * 0.1, type: 'spring' }}
                    className={`z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${exp.color} border-4 border-background`}
                  >
                    {idx === 0 ? <Briefcase className="w-5 h-5 text-white" /> : idx === 1 ? <Server className="w-5 h-5 text-white" /> : <Code2 className="w-5 h-5 text-white" />}
                  </motion.div>
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + idx * 0.1, type: 'spring' }}
                    className="flex-1"
                  >
                    <Card className={`bg-gradient-to-r ${exp.color} p-1 shadow-xl shadow-primary/10 hover:shadow-2xl transition-all duration-500`}> 
                      <CardContent className="bg-background/90 rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                          <div>
                            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">{exp.title}</CardTitle>
                            <CardDescription className="text-lg font-semibold text-muted-foreground mb-1">{exp.company}</CardDescription>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge className="text-xs bg-secondary text-secondary-foreground">{exp.location}</Badge>
                              <Badge className="text-xs bg-secondary text-secondary-foreground">{exp.date}</Badge>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {exp.skills.slice(0, 6).map((skill) => (
                              <Badge key={skill} className="bg-background/70 border-primary/20 text-primary/90">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 mb-2">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="text-muted-foreground">{h}</li>
                          ))}
                        </ul>
                        {exp.services && (
                          <div className="mb-2">
                            <span className="font-semibold text-primary">Key Services:</span>
                            <ul className="list-disc pl-5">
                              {exp.services.map((s, i) => (
                                <li key={i} className="text-muted-foreground text-sm">{s}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {exp.projects && (
                          <div className="mb-2">
                            <span className="font-semibold text-primary">Projects:</span>
                            <ul className="list-disc pl-5">
                              {exp.projects.map((p, i) => (
                                <li key={i} className="text-muted-foreground text-sm">
                                  {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">{p.name}</a> : p.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </AnimatedSection>
  );
} 