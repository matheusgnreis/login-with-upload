const listaServicos = require("../arquivos/listaServicos.json");

exports.retornarListaServicos = () => {
  return listaServicos;
};

exports.adicionarItemServico = ({ desc, preco }) => {
  const id = listaServicos.length + 1;
  listaServicos.push({ id, desc, preco });
};
