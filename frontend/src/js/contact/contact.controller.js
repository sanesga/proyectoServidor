class ContactCtrl {
  constructor(Contact,Toastr,$timeout) {
    'ngInject';

    //this._Contact = Contact;

  }
 /* submitForm() {

    var formData = {
      mail: inputMail.value,
      name: inputName.value,
      message: inputMessage.value,
    }
    console.log("estamos en submit")

    console.log(formData);

    this._Contact.sendMail(formData).then(
      (res) => {
        console.log("enviado");
      },
      (err) => {
        console.log("no conecta");
      }
    )

   
  }*/
}

export default ContactCtrl;

