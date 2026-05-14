import './Rodape.css';

function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <p>© {anoAtual} — Portfólio de Profissionais. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Rodape;
