var sendgridMail = require('@sendgrid/mail');
var sendgridKey = require('../key/apiKey.json');
sendgridMail.setApiKey(sendgridKey.SENDGRID_API_KEY);



exports.sendMail = function(req, res) {
    console.log("entra a sendEmail");
  console.log(req.body);

    var email = {
        from: req.body.mail,
        to: "info.code.2019@gmail.com",
        subject: "mensaje de sendgrid",
        text: req.body.name,
        html: req.body.message
    };

    sendgridMail.send(email, function(error, info) {
        console.log("entra a send")
        if (error) {
            res.status('401').json({
                err: "No se ha podido enviar el correo"
            });
        } else {
            res.status('200').json({
                success: true
            });
        }
    });
};