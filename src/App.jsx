import CartaoPerfil from './CartaoPerfil';
import Rodape from './Rodape';
import './App.css';

const professionals = [
  {
    nome: "Ana Beatriz Costa",
    profissao: "Desenvolvedora Frontend",
    cidade: "São Paulo, SP",
    frase: "Transformo interfaces em experiências que as pessoas realmente querem usar.",
  },
  {
    nome: "Rafael Mendonça",
    profissao: "Designer UX/UI",
    cidade: "Rio de Janeiro, RJ",
    frase: "Design não é só como parece — é como funciona para quem precisa.",
  },
  {
    nome: "Larissa Oliveira",
    profissao: "Engenheira de Dados",
    cidade: "Belo Horizonte, MG",
    frase: "Dados são histórias esperando para serem contadas com clareza.",
  },
];

function App() {
  return (
    <div className="app">
      <header className="portfolio-header">
        <h1>Portfólio de Talentos</h1>
        <p className="subtitulo">Profissionais &amp; suas histórias</p>
      </header>

      <main className="cards-grid">
        {professionals.map((p, index) => (
          <CartaoPerfil
            key={index}
            nome={p.nome}
            profissao={p.profissao}
            cidade={p.cidade}
            frase={p.frase}
          />
        ))}
      </main>

      <Rodape />
    </div>
  );
}

export default App;
