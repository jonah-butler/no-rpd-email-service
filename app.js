const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)

})

// const { NODE_ENV, SENDGRID_API_KEY} = process.env;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
	res.render("landing");
})

app.post("/submit", (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	const msg = {
	  to: req.body.repEmail,
	  from: 'community-voice@norpdinrps.com',
	  subject: 'Terminate Relations with RPD',
    html: "<h3>" + req.body.messageHeader + "</h3> <br><br> <p>" + req.body.message + "</p> <br><br> <p style='font-size: 10px'>" + req.body.messageFooter + "</p>"
	};
		sgMail.send(msg)
			.then((result) => {
				res.send(result);
			})
			.catch((err) => {
				res.send(err);
			})

})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
