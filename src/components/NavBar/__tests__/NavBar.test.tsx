import Navbar from "../NavBar";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Navbar component", () => {
  it("Deve renderizar os 4 links corretamente", () => {
    render(<Navbar />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(5);
  });

  it("deve abrir e fechar o menu mobile ao clicar no ícone de hambúrguer", async () => {
    render(<Navbar />);
    const user = userEvent.setup();
    const menu = screen.getByRole("list");

    expect(menu.className).toContain("menu");
    expect(menu.className).not.toContain("menuOpen");

    const button = screen.getByRole("button", { name: "Abrir menu" });
    await user.click(button);
    expect(menu.className).toContain("menuOpen");

    const closeButton = screen.getByRole("button", { name: "Fechar menu" });
    await user.click(closeButton);
    expect(menu.className).not.toContain("menuOpen");
  });
});
