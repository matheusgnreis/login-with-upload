const express = require("express");
const router = express.Router();
const servicosController = require("../controller/servicos");

const rnds = [];

/* GET Servicos Listing */
router.get("/", function(req, res, next) {
  const { taxaDesconto = 0 } = req.query;
  const listaServicos = servicosController.compilaListaServicos(taxaDesconto);
  const rnd = Math.random().toString().slice(-5);

  res.render("servicos", { listaServicos, title: "Servicos", rnd });
});

router.post("/", (req, res, next) => {
  const { desc, preco, rnd } = req.body;
  const { taxaDesconto = 0 } = req.query;

  if (rnds.includes(rnd)) {
   return res.render("error", { message: "Esse post já foi realizado", error: {status: "400", stack: ""} });
  }

  servicosController.inserirItemServico({ desc, preco });

  rnds.push(rnd)

  const listaServicos = servicosController.compilaListaServicos(taxaDesconto);
  res.render("servicos", { listaServicos, title: "Servicos", rnd: Math.random().toString().slice(-5) });
});

module.exports = router;
