// Componente de contato com formulário funcional usando React Hook Form e Zod para validação.
// O formulário envia os dados para a API Web3Forms e exibe mensagens de sucesso ou erro.

import styles from "./Contact.module.css";
import { Linkedin, Github, Mail, MessageCircleMore, Send } from "lucide-react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schemas/contactSchema";
import type { ContactFormData } from "../../schemas/contactSchema";

export default function Contact() {
  // Estados para controle de envio e erros
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Configuração do React Hook Form com validação Zod
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Função de envio do formulário
  const onSubmit = async (data: ContactFormData) => {
    // Envia os dados para a API Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          access_key: "2a226cc5-4769-41cd-8d02-3f0688bb7fdd",
          ...data,
        }),
      });

      // Verifica a resposta da API e atualiza os estados de acordo
      const result = await response.json();
      if (result.success) {
        reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
      }

      // Se a resposta não for bem-sucedida, trata como erro
    } catch (error) {
      console.error("Erro ao enviar", error);
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container containerSection">
        <span className="sectionLabel">// Contato</span>
        <h2 className="title">Vamos conversar!</h2>

        <div className={styles.containerTextForm}>
          <div className={styles.contactText}>
            <span className={styles.contactTitle}>Entre em contato</span>
            <p>
              Estou disponível para oportunidades como Desenvolvedor Front-End
              Júnior. Se tiver um projeto ou vaga que combine com meu perfil,
              será um prazer conversar!
            </p>
            <div className={styles.social}>
              <a href="mailto:augusto.felipedev@gmail.com" aria-label="Email">
                <div className={styles.icon}>
                  <Mail />
                </div>
                augusto.felipedev@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/felipesilva90"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <div className={styles.icon}>
                  <Linkedin />
                </div>
                linkedin.com/in/felipesilva90
              </a>
              <a
                href="https://github.com/felipedev90"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <div className={styles.icon}>
                  <Github />
                </div>
                github.com/felipedev90
              </a>
              <a
                href="https://wa.me/5511975059454"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <div className={styles.icon}>
                  <MessageCircleMore />
                </div>
                WhatsApp
              </a>
            </div>
          </div>

          {/* ***** FORM ***** */}
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formNome}>
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  placeholder="Seu nome"
                  className={styles.formInput}
                />

                {/* Exibe mensagem de erro se houver */}
                {errors.name && (
                  <span className={styles.formError}>
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className={styles.formEmail}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="seu@email.com"
                  className={styles.formInput}
                />

                {/* Exibe mensagem de erro se houver */}
                {errors.email && (
                  <span className={styles.formError}>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className={styles.formMsg}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  {...register("message")}
                  placeholder="Escreva sua mensagem aqui..."
                  className={styles.formTextArea}
                ></textarea>

                {/* Exibe mensagem de erro se houver */}
                {errors.message && (
                  <span className={styles.formError}>
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button type="submit" className={styles.btnSubmit}>
                Enviar Mensagem
                <Send size={16} />
              </button>

              {/* Exibe mensagem de sucesso ou erro após o envio */}
              {submitted && (
                <p className={styles.formSuccess}>
                  Mensagem enviada com sucesso!
                </p>
              )}
              {error && (
                <p className={styles.formError}>
                  Ocorreu um erro ao enviar. Tente novamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
