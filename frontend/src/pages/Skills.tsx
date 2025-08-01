import React from "react";

const skills = [
  { category: "Frontend", items: ["React", "Angular", "Vue", "Tailwind CSS"] },
  { category: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express"] },
  { category: "Database", items: ["MySQL", "MongoDB", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Postman", "Jira"] },
  { category: "Cloud", items: ["AWS EC2", "S3", "Lambda", "RDS"] },
];

const Skills = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <span className="text-blue-500">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
