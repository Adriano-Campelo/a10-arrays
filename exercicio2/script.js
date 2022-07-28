const arrayUM = [1,3,6,9,8,10,22,36,97]
const arrayDois = ['Quase sem querer','Fábrica','Daniel na cova dos leões']
const arrayTres = ["Legião Urbana","Album Dois", 13,"musicas", true]

console.log("array um", arrayUM)
console.log("array dois", arrayDois)
console.log("array três", arrayTres)

console.log("array um têm", arrayUM.length, "elementos")
console.log("array dois têm ", arrayDois.length, "elementos")
console.log("array três têm ", arrayTres.length, "elementos")

console.log("O primeiro item do array um é,", arrayUM[0])
console.log("O segundo item do array dois é,", arrayDois[1])
console.log("O terceiro item do array três é,", arrayTres[2])

console.log("No array um existe o número 10? ",arrayUM.includes(10))
console.log("No array dois existe a musica Geração Coca-Cola? ",arrayDois.includes("Geração Coca-Cola"))
console.log('No array três o album da Legiao Urbana é o "Quatro Estações"? ',arrayTres.includes("Quatro Estações"))
