interface Stat {
  id: number;
  valor: string;
  label: string;
  descricao: string;
}

export const aboutStats: Stat[] = [
  {
    id: 1,
    valor: "4+",
    label: "Projetos",
    descricao: "publicados",
  },
  {
    id: 2,
    valor: "10+",
    label: "Anos",
    descricao: "de experiência profissional",
  },
  {
    id: 3,
    valor: "CI/CD",
    label: "Pipeline",
    descricao: "com GitHub Actions",
  },
  {
    id: 4,
    valor: "98",
    label: "Lighthouse",
    descricao: "performance em projetos",
  },
];
