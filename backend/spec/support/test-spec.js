

/*var app=require("../../routes/api/contact.js"); //añadim el arxiu per a poder accedir a la funció
describe("NameTest",function(){ //nom del test
it("Comprobando si se recibe el nombre",function() { //descripció del test
var value=app.comprobarDatos("Maria"); //cridem a la funció i li passem les dades
expect(value).toBe(true); //que esperem que ens retorne la funció
});
});*/

var request = require("request");
var app = require("../../utils/email.js")
var base_url = "http://localhost:3001/"


    describe("send /", function() { //nom de la funció
        it("returns status code 200", function() { //descripció
            request.get(base_url, function(error, response, body) { //enviem dades
                expect(response.statusCode).toBe(200); //resposta que esperem
                    done();
            });
        });
    });


