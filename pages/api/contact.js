import nodemailer from "nodemailer";

const handler = async (request, response) => {
  if (request.method === "POST") {
    const { name, phone, email, subject, message } = request.body;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_AUTH_USER,
        pass: process.env.EMAIL_AUTH_PASSWORD,
      },
      secure: true,
    });

    try {
      const contactEmail = await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_OWNER,
        subject: `New Contact Details - ${subject}`,
        text: message,
        html: `<div><p>You have a new contact form submission from</p><br>
              <p><strong>Name: ${name}</strong></p><br>
              <p><strong>Email: ${email}</strong></p><br>
              <p><strong>Phone: ${phone}</strong></p><br>
              <p><strong>Message: ${message}</strong></p></div>`,
      });
      // await new Promise((resolve, _) => {
      //   setTimeout(() => {
      //     resolve();
      //   }, 2000);
      // });
      response.status(200).json({ status: "success", messageId: contactEmail?.messageId });
    } catch (err) {
      console.log("##Error Mail Sent Fail", err);
      response.status(500).json({ status: "failed to fetch data" });
    }
  }
};

export default handler;
