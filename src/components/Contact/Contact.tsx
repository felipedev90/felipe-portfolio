import styles from "./Contact.module.css";
import { Linkedin, Github, Mail, MessageCircleMore, Send } from "lucide-react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schemas/contactSchema";
import type { ContactFormData } from "../../schemas/contactSchema";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
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
              {submitted && (
                <p className={styles.formSuccess}>
                  Mensagem enviada com sucesso!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
