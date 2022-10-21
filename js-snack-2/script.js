/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const string= ["pippo", "PLUTO", "Paperino",]

const newArr=string.map(newString=>{
   console.log(newString)
   console.log(newString[0]);
   console.log(newString[1]);
   console.log(newString[0].toUpperCase())
   return newString[0].toLocaleUpperCase() + newString.toLowerCase() 
})
console.log(newArr)