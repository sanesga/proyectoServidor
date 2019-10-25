

/*var app=require("../../routes/api/contact.js"); //añadim el arxiu per a poder accedir a la funció
describe("NameTest",function(){ //nom del test
it("Comprobando si se recibe el nombre",function() { //descripció del test
var value=app.comprobarDatos("Maria"); //cridem a la funció i li passem les dades
expect(value).toBe(true); //que esperem que ens retorne la funció
});
});*/

var request = require("request");
var base_url = "http://localhost:3002/"


    describe("send /", function() { //nom de la funció
        it("returns status code 200", function() { //descripció
            request.get(base_url, function(error, response, body) { //enviem dades
                expect(response.statusCode).toBe(200); //resposta que esperem
            });
        });
    });



/*
//Vos dixe el meu test en la peticio get TE QUE SER UN COMENTARI DE HTML QUE ESTEM EN HTML!!!!!!

var request = require("request");
var server = require("../../app.js");
var base_url = "http://localhost:3002";

describe("Test",() => {
    it("first test", () => {
        let number = 20;
        expect(number).toEqual(20);
    });

    it("second test", () => {
        let number = 20;
        expect(number == 200).toBeFalsy();
    });
    describe("GET",() => {
        it("returns status code 200", (done) => {
            request.get(base_url + "/api/articles", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });
});

*/
