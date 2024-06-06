import {Resend} from "resend";
import Email from "../../emails/email";

const resend = new Resend('re_6mdu9aLA_8z3cWnoQSAPvRKT3qHLuf3AT');


export async function POST() {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'andrei.silin1@gmail.com',
        subject: 'Hello World',
        html: Email()
    });

}