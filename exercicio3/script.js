const arrayUm = [1,3,6,9,8,10,22,36,97]
const arrayDois = ['Quase sem querer',' Fábrica',' Daniel na cova dos leões']
const arrayTres = ["Legião Urbana"," Album Dois", 13,  true]

console.log(arrayUm)
console.log(arrayDois)
console.log(arrayTres)

const arrayUmCopia = arrayUm.slice()
console.log(arrayUmCopia)
const arrayDoisCopia = arrayDois.slice()
console.log(arrayDoisCopia)
const arrayTresCopia = arrayTres.slice()
console.log(arrayTresCopia)

arrayUmCopia.push(32)
console.log(`Array um original: ${arrayUm}\nArray um cópia:    ${arrayUmCopia}`)

arrayDoisCopia.pop()
console.log(`Array dois original: ${arrayDois}\nArray dois cópia:    ${arrayDoisCopia}`)

arrayTresCopia.splice(1, 2)
console.log(`Array três original: ${arrayTres}\nArray três cópia:    ${arrayTresCopia}`)
