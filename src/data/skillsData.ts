interface SkillData {
  id: number;
  titulo: string;
  tags: { name: string; icon: string }[];
}

export const skillsData: SkillData[] = [
  {
    id: 1,
    titulo: "Frontend",
    tags: [
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "CSS Modules", icon: "devicon-css3-plain" },
      { name: "SASS", icon: "devicon-sass-original" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
    ],
  },
  {
    id: 2,
    titulo: "JavaScript e Frameworks",
    tags: [
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express", icon: "devicon-express-original" },
    ],
  },
  {
    id: 3,
    titulo: "Ferramentas e Métodos",
    tags: [
      { name: "Git & GitHub", icon: "devicon-git-plain" },
      { name: "GitHub Actions", icon: "devicon-github-plain" },
      { name: "Vite", icon: "devicon-vitejs-plain" },
      { name: "Vitest", icon: "devicon-vitest-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
      { name: "Testing Library", icon: "" },
      { name: "CI/CD", icon: "" },
      { name: "Scrum", icon: "" },
    ],
  },
];
