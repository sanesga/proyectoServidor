class contactFormCtrl {
  constructor(Contact, Toastr) {
    "ngInject";

    console.log("entra a contactFormCtrl");
    this._Contact = Contact;

    //clavar el submitForm dins del constructor
    this.submitForm = function() {
      var formData = {
        mail: inputMail.value,
        name: inputName.value,
        message: inputMessage.value
      };
      console.log("estamos en submit");

      console.log(formData);

      this._Contact.sendMail(formData).then(
        res => {
          console.log("enviado");
          Toastr.showToastr("success", "Correo enviado correctamente");
          
          //tiempo que tarda en desaparecer el toastr
          $timeout( function(){
         
        }, 4000 );

        },
        err => {
          console.log("no conecta");
          Toastr.showToastr("error", "Error al enviar el correo");
        }
      );
    }; //cierra el submitForm
  } //cierra el constructor
} //cierra la clase

let contactForm = {
  controller: contactFormCtrl,
  templateUrl: "contact/contactForm.html"
};

export default contactForm;
