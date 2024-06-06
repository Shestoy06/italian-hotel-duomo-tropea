
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');
const Email = require('./src/emails/email.jsx'); // Adjust the path as necessary

const app = express();
const port = 3001; // Or any port of your choice

app.use(cors());
app.use(bodyParser.json());

const resend = new Resend('re_6mdu9aLA_8z3cWnoQSAPvRKT3qHLuf3AT');

app.post('/api/emails', async (req, res) => {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'andrei.silin1@gmail.com',
            subject: 'Hello World',
            html: Email()
        });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});