const pizzaria = [
    {
        Sabor: 'Calabresa',
        Descrição: 'Salgada',
        Ingredientes: 'Calabresa, Mussarela, Molho de Tomate e Catupiry',
        Preço: 40,
        vegetariano: false
    },

    {
        Sabor: 'Brócolis',
        Descrição: 'Salgada',
        Ingredientes: 'Brócolis, Mussarela, Molho de Tomate e Catupiry',
        Preço: 40,
        vegetariano: true
    },

    {
        Sabor: 'Frango',
        Descrição: 'Salgada',
        Ingredientes: 'Frango, Azeitona Preta, Mussarela, Molho de Tomate e Catupiry',
        Preço: 40,
        vegetariano: false
    },

    {
        Sabor: 'Palmito',
        Descrição: 'Salgada',
        Ingredientes: 'Palmito, Mussarela, Molho de Tomate e Oregano',
        Preço: 40,
        vegetariano: true
    },

    {
        Sabor: 'Ninho com Nutella',
        Descrição: 'Doce',
        Ingredientes: 'Leite Ninho, Nutella, Mussarela ',
        Preço: 45,
        vegetariano: false
    },

    {
        Sabor: 'Banana Nevada',
        Descrição: 'Doce',
        Ingredientes: 'Banana, Chocolate Branco, Mussarela',
        Preço: 45,
        vegetariano: false
    },

    {
        Sabor: 'Quato-Queijos',
        Descrição: 'Salgada',
        Ingredientes: 'Molho de Tomate, Mussarela, Catupiry, Parmesão, Gorgonzola, Azeitona e Orégano',
        Preço: 40,
        vegetariano: true
    },

    {
        Sabor: 'Rúcula com Tomate Seco',
        Descrição: 'Salgada',
        Ingredientes: 'Molho de Tomate, Mussarela, Rúcula, Tomate Seco, Orégano e Azeitona',
        Preço: 40,
        vegetariano: true
    },

    {
        Sabor: 'Super X',
        Descrição: 'Salgada',
        Ingredientes: 'Palmito, Mussarela, Molho de Tomate, Presunto, Bacon, Peito de Peru, Cebola, Catupiry, Oregano e Azeitona',
        Preço: 60,
        vegetariano: false
    }
]

console.log("Menu de pizzas:", pizzaria)

function adoroPizza(pizza) {
    return (pizza[0].Preço + pizza[1].Preço + pizza[2].Preço + pizza[3].Preço + pizza[4].Preço + pizza[5].Preço + pizza[6].Preço + pizza[7].Preço + pizza[8].Preço) / 9
}

adoroPizza(pizzaria)
console.log("Média dos preços:", adoroPizza(pizzaria))

const vegan = pizzaria[0].vegetariano && pizzaria[1].vegetariano && pizzaria[2].vegetariano && pizzaria[3].vegetariano && pizzaria[4].vegetariano;
console.log("Todas as pizzas são vegetarianas?", vegan)

const bordas = ["Catupiry", "Cream Cheese", "Cheddar", "Chocolate", "Nutella"]
pizzaria.push("Bordas:", bordas)

// -------------FUNCTION------------

imprimeSaboresPizzaVegana(pizzaria)

function imprimeSaboresPizzaVegana(pizzas) {
    const pizzasVeganas = [];

    for (let sabores of pizzas) {
        if (sabores.vegetariano === true) {
            pizzasVeganas.push(sabores);
        }
    }

    for (let i = 0; i < pizzasVeganas.length; i++) {
        console.log(`
          Sabor: ${pizzasVeganas[i].Sabor} 
          Descrição: ${pizzasVeganas[i].Descrição}
          Ingredientes:${pizzasVeganas[i].Ingredientes}
          Preço: ${pizzasVeganas[i].Preço}
          Vegetariano: ${pizzasVeganas[i].vegetariano}
        `);
    }
}

alert(`Temos sabores vegetarianos, aproveite`)

//Filtro no Imput - TESTE//

// const inputSearch = document.querySelector("#search")
// const menuPizzas = document.querySelector("#menu")

// const artigos = Array.from(document.querySelectorAll("#sabadores"))
// const divisoes = Array.from(document.querySelectorAll("div"))
// const divEsquerda = Array.from(document.querySelectorAll("div.div-esquerdo-borda"))
// const divDireita = Array.from(document.querySelectorAll("div.div-direito-borda"))



// inputSearch.addEventListener("input", function(){
//     const str = this.value;
//     console.log(str)
//     if(str){
//         filterData(str)
//     }else{
//         showAllItems()
//     }
// })

// function showAllItems(){
//     divisoes.forEach(div => div.classList.remove("hide"))
// }

// function filterData(str){
//     showAllItems()
//     divDireita.forEach(divDireita => {
//     const divD = divDireita.querySelector("div")
//     const divE = divEsquerda.querySelector("div")
    
//     if(divD && divD.textContent.toLocaleLowerCase().includes(str.toLowerCase)){
    
//     }
//     })
// }

//---------FILTRO DO INPUT//

function search_pizzaz() {
    let input = document.getElementById('searchbar').value
    var inputAll = input.toLowerCase();
    let x = document.getElementsByClassName('pizzaz');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(inputAll)) {
            // x[i].style.display="none";
            alert("Item não encontrado")
            return
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
