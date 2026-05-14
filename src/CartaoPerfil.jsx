import './CartaoPerfil.css';

function CartaoPerfil({ nome, profissao, cidade, frase }) {
  const iniciais = nome
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  return (
    <div className="cartao">
      <div className="cartao-avatar">{iniciais}</div>
      <h2 className="cartao-nome">{nome}</h2>
      <p className="cartao-profissao">{profissao}</p>
      <p className="cartao-cidade">📍 {cidade}</p>
      <blockquote className="cartao-frase">"{frase}"</blockquote>
    </div>
  );
}

export default CartaoPerfil;
