
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');

const app = express();
const port = 3001; // Or any port of your choice

app.use(cors());
app.use(bodyParser.json());

const resend = new Resend('re_6mdu9aLA_8z3cWnoQSAPvRKT3qHLuf3AT');

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.post('/api/emails', async (req, res) => {
    try {
        console.log(req.body)
        await resend.emails.send({
            from: 'dumo-tropea@resend.dev',
            to: 'info@villaanticatropea.it',
            subject: 'Hello World',
            html: `<div><p>Name: ${req.body.name}</p><p>Surname: ${req.body.surname}</p><p>Email: ${req.body.email}</p></div>`
        });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});