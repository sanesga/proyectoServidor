
var app=require("../../routes/api/contact.js"); //añadim el arxiu per a poder accedir a la funció
describe("NameTest",function(){ //nom del test
it("Comprobando si se recibe el nombre",function() { //descripció del test
var value=app.comprobarDatos("Maria"); //cridem a la funció i li passem les dades

expect(value).toBe(true); //que esperem que ens retorne la funció
});
});

