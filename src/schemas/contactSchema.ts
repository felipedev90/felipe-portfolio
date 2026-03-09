// Arquivo responsável por definir o esquema de validação para o formulário de contato usando a biblioteca Zod.

import { z } from "zod";

// Define o esquema de validação para o formulário de contato
export const contactSchema = z.object({
  // Valida o campo "name" para garantir que seja uma string com pelo menos 2 caracteres
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  // Valida o campo "email" para garantir que seja um endereço de email válido
  email: z.string().email("Email inválido"),
  // Valida o campo "message" para garantir que seja uma string com pelo menos 10 caracteres
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

// Exporta o tipo inferido do esquema de contato para ser usado em outras partes do código
export type ContactFormData = z.infer<typeof contactSchema>;
