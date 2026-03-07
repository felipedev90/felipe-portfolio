export default function Footer() {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  return (
    <footer>
      <div>
        <p>
          © {getCurrentYear()} Felipe Augusto · Todos os direitos reservados.
        </p>
        <p>
          Desenvolvido com React · TypeScript · CSS Modules · Deploy na Vercel
        </p>
      </div>
    </footer>
  );
}
