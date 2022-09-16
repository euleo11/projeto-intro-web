// const time1 =
// {
//     clube: "São Paulo",
//     mundiais: 3,
//     rebaixado: false,
//     craques: ["Calleri", "Luciano", "Arboleda"]
// }

// const time2 =
// {
//     clube: "Palmeiras",
//     mundiais2: 0,
//     rebaixado: true,
//     craques: ["Rony", "Raphael Veiga", "Gustavo Gómez"]
// }

// const time3 =
// {
//     clube: "Corinthians",
//     mundiais: 2,
//     rebaixado: true,
//     craques: ["Yuri Alberto", "Roger Guedes", "Cássio"]
// }

// // const timesBrasil = []
// // if (time1.rebaixado === true) {
// //     timesBrasil.push(time1)
// //     alert(`${time1.clube} Já foi rebaixado`)
// //     console.log(`${time1.clube} Já foi rebaixado`)
// // } else {
// //     alert(`${time1.clube} Nunca foi rebaixado`)
// //    console.log(`${time1.clube} Nunca foi rebaixado`)
// // }

// // if (time2.rebaixado === true) {
// //     timesBrasil.push(time2)
// //     alert(`${time2.clube} Já foi rebaixado`)
// //     console.log(`${time2.clube} Já foi rebaixado`)
// // } else {
// //     alert(`${time2.clube} Nunca foi rebaixado`)
// //     console.log(`${time2.clube} Nunca foi rebaixado`)
// // }

// // if (time3.rebaixado === true) {
// //     timesBrasil.push(time3)
// //     alert(`${time3.clube} Já foi rebaixado`)
// //    console.log(`${time3.clube} Já foi rebaixado`)
// // } else {
// //     alert(`${time3.clube} Nunca foi rebaixado`)
// //     console.log(`${time3.clube} Nunca foi rebaixado`)
// // }

// console.log(time1, time2, time3)

//------------------------------ALTERAÇÕES

const clubes = [
    { clube: 'São Paulo', mundiais: 3, rebaixado: false, craques: ["Calleri", "Luciano", "Arboleda"] },
    { clube: 'Palmeiras', mundiais: 0, rebaixado: true, craques: ["Rony", "Raphael Veiga", "Gustavo Gómez"] },
    { clube: 'Corinthians', mundiais: 2 , rebaixado: true, craques: ["Yuri Alberto", "Roger Guedes", "Cássio"] }
  ]

console.log("Objeto de Clubes:",clubes)


  retornaTimes(clubes)
  
function retornaTimes(clubes){
    const timesBrasil = []

    for(let caiu of clubes){
        if(caiu.rebaixado === true){
            timesBrasil.push(caiu)
        }else{
            alert("Um dos clubes não foi rebaixado")
        }

    }for (let i = 0; i < 1; i++) {
        console.log("Se já foi rebaixado é true e entra no Array:", timesBrasil);

     }for(let i = 0; i < clubes.length; i++){
        console.log(`Clube:${clubes[i].clube} \nTitulos Mundial de clubes:${clubes[i].mundiais} \nJá foi rebaixado: ${clubes[i].rebaixado} \nCraques do elenco: ${clubes[i].craques}`)

    }const parte4 = clubes.filter((array)=>{
        return array.mundiais > 0
    })
    console.log("Clubes que tem mundiais:", parte4)
}