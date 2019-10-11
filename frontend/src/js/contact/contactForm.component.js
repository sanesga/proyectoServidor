class contactFormCtrl {
  constructor(Contact, Toastr, $timeout) {
    "ngInject";

    this._Contact = Contact;

    //clavar el submitForm dins del constructor
    this.submitForm = function() {
      var formData = {
        mail: inputMail.value,
        name: inputName.value,
        message: inputMessage.value
      };

      this._Contact.sendMail(formData).then(
        res => {
          Toastr.showToastr("success", "Correo enviado correctamente");

          //tiempo que tarda en desaparecer el toastr
          $timeout(function() {
            //  $state.go('app.home');
          }, 4000);
        },
        err => {
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
