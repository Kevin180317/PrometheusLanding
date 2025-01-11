const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json()); // Analiza las solicitudes entrantes con cargas útiles JSON


// Ruta para manejar solicitudes POST con JSON
app.post("/formulario", async (req, res) => {
    const { email } = req.body;

    // Configuración del transporte
    let transporter = nodemailer.createTransport({
        host: "prometheustij.com", // reemplaza esto con tu host
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "contact@prometheustij.com", // tu correo electrónico
          pass: "GoJo5628@!", // your email password
        },
      });

    // Configuración del correo electrónico
    const mailOptions = {
        from: "contact@prometheustij.com", // sender address
        to: email, // list of receivers
        // cc: "contact@prometheustij.com",
        subject: "Informacion de Contacto", // Subject line
        text: `Hola, Gracias por contactarnos. Hemos recibido la siguiente información de tu parte:
      
        Correo electrónico: ${email}
      
        Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo lo antes posible.
      
        Gracias, El equipo de Prometheus`,
      };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.status(500).send("Error al enviar el correo electrónico");
        } else {
            console.log(info);
            res.status(200).send("Correo electrónico enviado correctamente");
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});