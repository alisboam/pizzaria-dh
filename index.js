const pizzas = [
  {
    id: 1,
    sabor: "Quatro queijos",
    categoria: "Salgada",
    preco: 15.89,
  },
  {
    id: 2,
    sabor: "Morango com Nutella",
    categoria: "Doce",
    preco: 30,
  },
  {
    id: 3,
    sabor: "Brócolis",
    categoria: "Vegetariana",
    preco: 35,
  },
  {
    id: 4,
    sabor: "Lombo canadense",
    categoria: "Salgada",
    preco: 25,
  },
];

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
