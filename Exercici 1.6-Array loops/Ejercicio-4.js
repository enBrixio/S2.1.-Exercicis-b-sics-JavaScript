let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' 
}

for (let propiedad in obj) {
    console.log(`${propiedad}: ${obj[propiedad]}`);
}