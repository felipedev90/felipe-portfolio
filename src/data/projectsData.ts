interface Project {
  id: number;
  titulo: string;
  tags: string[];
  descricao: string;
  demo: string;
  github: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    titulo: "Expense Tracker",
    tags: ["React", "TypeScript", "CSS Modules", "Vitest", "CI/CD"],
    descricao:
      "Gerenciador de despesas com filtros por categoria e período. 16 testes automatizados com 76% de cobertura e pipeline CI/CD completo via GitHub Actions.",
    demo: "https://expense-tracker-tawny-beta-38.vercel.app/",
    github: "https://github.com/felipedev90/expense-tracker",
    image: "/projects/expenseTracker1200p.webp",
  },
  {
    id: 2,
    titulo: "Mini E-commerce",
    tags: [
      "React",
      "Node.js",
      "Tailwind",
      "Context API",
      "Express",
      "Rest-API",
    ],
    descricao:
      "E-commerce com carrinho via Context API e API REST própria. Otimização Lighthouse de 92 → 98 em performance com gzip, WebP e code splitting.",
    demo: "https://use-unconde-ecommerce.onrender.com/",
    github: "https://github.com/felipedev90/use-unconde-ecommerce",
    image: "/projects/miniecommerce1200p.webp",
  },
  {
    id: 3,
    titulo: "NextBlog",
    tags: ["Next.js 15", "TypeScript", "Tailwind", "SSG", "SEO", "App-Router"],
    descricao:
      "Blog com SSG via generateStaticParams, SEO dinâmico com generateMetadata por página e data fetching em Server Components.",
    demo: "https://next-blog-liart-six.vercel.app/",
    github: "https://github.com/felipedev90/next-blog",
    image: "/projects/nextblog1200p.webp",
  },
  {
    id: 4,
    titulo: "MyBooks",
    tags: ["React", "TypeScript", "Tailwind", "CRUD", "Rest-API", "Vite"],
    descricao:
      "Catálogo de livros com operações GET, POST e DELETE em API real. Tipagem robusta com TypeScript e camada de serviço isolada.",
    demo: "https://my-books-steel.vercel.app/",
    github: "https://github.com/felipedev90/MyBooks",
    image: "/projects/mybooks1200p.webp",
  },
];
