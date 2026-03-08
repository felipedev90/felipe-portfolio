import Hero from "../Hero";
import { render, screen } from "@testing-library/react";

describe("Hero component", () => {
  it("Deve renderizar o nome corretamente", () => {
    render(<Hero />);

    const nameElement = screen.getByText("Felipe Augusto");

    expect(nameElement).toBeInTheDocument();
  });

  it("Deve renderizar os 3 links sociais e 2 links adicionais corretamente", () => {
    render(<Hero />);

    const linkedin = screen.getByLabelText("LinkedIn");
    const github = screen.getByLabelText("GitHub");
    const email = screen.getByLabelText("Email");

    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/felipesilva90",
    );
    expect(github).toHaveAttribute("href", "https://github.com/felipedev90");
    expect(email).toHaveAttribute("href", "mailto:augusto.felipedev@gmail.com");
  });
});
