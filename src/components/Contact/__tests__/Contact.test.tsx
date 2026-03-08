import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Contact component", () => {
  it("Deve exibir as mensagens de erro ao submeter o formulário sem preencher os campos obrigatórios", async () => {
    render(<Contact />);
    const user = userEvent.setup();
    const submitButton = screen.getByText("Enviar Mensagem");

    await user.click(submitButton);

    const nameError = await screen.findByText(
      "Nome deve ter pelo menos 2 caracteres",
    );
    const emailError = await screen.findByText("Email inválido");
    const messageError = await screen.findByText(
      "Mensagem deve ter pelo menos 10 caracteres",
    );

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(messageError).toBeInTheDocument();
  });
});
