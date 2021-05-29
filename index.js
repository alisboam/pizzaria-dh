const express = require ("express");
const app = express();

const pizzas = require("./database/pizzas.json");

const listarTodasAsPizzas = () => {
  let conteudo = " ";

  pizzas.forEach((pizza) => {
    conteudo += `
        Sabor: ${pizza.sabor}
        Categoria: ${pizza.categoria}
        Preco: ${pizza.preco}
        `;
  });

  return conteudo;
};

console.log(listarTodasAsPizzas());

app.get("/pizzas", (req, res) => res.json(pizzas));

const adicionarPizza = function (sabor, categoria, preco) {
  const pizzaNova = {
    id: pizzas[pizzas.length - 1].id + 1,
    sabor,
    categoria,
    preco,
  };
  pizzas.push(pizzaNova);
  console.log(`A pizza de ${sabor} foi adicionada`);
};

const procurarPizzaPeloNome = function (nomePizza) {
  const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor === nomePizza);
  if(!pizzaEncontrada) {
    return `A pizza ${nomePizza} não foi encontrada`
  }
  return pizzaEncontrada
};

adicionarPizza("tomate", "salgado", 25);
console.log(listarTodasAsPizzas());

console.log(procurarPizzaPeloNome("lalalalalal"));


app.listen(3000, () => console.log("o servidor tá on!!"));