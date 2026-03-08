import Projects from "../Projects";
import { render, screen } from "@testing-library/react";
import { projectsData } from "../../../data/projectsData";

describe("Projects component", () => {
  it("Deve renderizar todos os projetos", () => {
    render(<Projects />);

    const projectsTitles = screen.getAllByRole("heading", { level: 3 });

    expect(projectsTitles).toHaveLength(projectsData.length);

    projectsData.forEach((project) => {
      expect(screen.getByText(project.titulo)).toBeInTheDocument();
    });
  });

  it("Deve renderizar os links de demo e GitHub corretamente", () => {
    render(<Projects />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(projectsData.length * 2);
  });
});
