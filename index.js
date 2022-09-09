const time1 =
{
    clube: "São Paulo",
    mundiais: 3,
    rebaixado: false,
    craques: ["Calleri", "Luciano", "Arboleda"]
}

const time2 =
{
    clube: "Palmeiras",
    mundiais2: 0,
    rebaixado: true,
    craques: ["Rony", "Raphael Veiga", "Gustavo Gómez"]
}

const time3 =
{
    clube: "Corinthians",
    mundiais: 2,
    rebaixado: true,
    craques: ["Yuri Alberto", "Roger Guedes", "Cássio"]
}

const timesBrasil = []
if (time1.rebaixado === true) {
    timesBrasil.push(time1)
    alert(`${time1.clube} Já foi rebaixado`)
    console.log(`${time1.clube} Já foi rebaixado`)
} else {
    alert(`${time1.clube} Nunca foi rebaixado`)
   console.log(`${time1.clube} Nunca foi rebaixado`)
}

if (time2.rebaixado === true) {
    timesBrasil.push(time2)
    alert(`${time2.clube} Já foi rebaixado`)
    console.log(`${time2.clube} Já foi rebaixado`)
} else {
    alert(`${time2.clube} Nunca foi rebaixado`)
    console.log(`${time2.clube} Nunca foi rebaixado`)
}

if (time3.rebaixado === true) {
    timesBrasil.push(time3)
    alert(`${time3.clube} Já foi rebaixado`)
   console.log(`${time3.clube} Já foi rebaixado`)
} else {
    alert(`${time3.clube} Nunca foi rebaixado`)
    console.log(`${time3.clube} Nunca foi rebaixado`)
}

console.log(time1, time2, time3)