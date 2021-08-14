const servicoModel = require("../model/servicos");

exports.compilaListaServicos = (taxaDesconto) => {
  return servicoModel.retornarListaServicos().map((item) => ({
    ...item,
    preco: item.preco * (1 - taxaDesconto),
  }));
};

exports.inserirItemServico = ({ desc, preco }) =>
  servicoModel.adicionarItemServico({ desc, preco });
