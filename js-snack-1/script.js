/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const auto = [
    {
        marca: "fiat",
        modello: "punto",
        alimentazione: "benzina",

    },
    {
        marca: "ford",
        modello: "focus",
        alimentazione: "gpl",
    },
    {
        marca: "toyota",
        modello: "rav4",
        alimentazione: "diesel",
    },
    {
        marca: "audi",
        modello: "r8",
        alimentazione: "diesel",
    },
    {
        marca: "bmw",
        modello: "x5",
        alimentazione: "gpl",
    },
    {
        marca: "mercedes",
        modello: "benz classe a",
        alimentazione: "elettrico",
    },
    {
        marca: "jaguar",
        modello: "pace",
        alimentazione: "diesel",
    },
    {
        marca: "ferrari",
        modello: "roma",
        alimentazione: "gpl",
    },
    {
        marca: "alfa romeo",
        modello: "giulietta",
        alimentazione: "metano",
    },
    {
        marca: "tesla",
        modello: "model y",
        alimentazione: "elettrico",
    },
   
]

/* const benzinaArray= auto.filter(autoaBenzina)

function autoaBenzina(){
    if (auto.alimentazione==="diesel"){
        console.log(auto.marca)
       return auto.marca
        
    }
} 
console.log(benzinaArray) */

const benzinaArray = auto.filter(autoBenzina=>{
    if (autoBenzina.alimentazione==="benzina"){
        return autoBenzina.marca
        }
})

console.log(benzinaArray)

const dieselArray = auto.filter(autoDiesel=>{
    if (autoDiesel.alimentazione==="diesel"){
        return autoDiesel.marca
    }
})
console.log(dieselArray)

/* const otheraAutoArray = auto.filter(otherAuto=>{
    if (auto)
}) */