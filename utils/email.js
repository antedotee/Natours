const { Resend } = require("resend");
const pug = require("pug");
const { htmlToText } = require("html-to-text");

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// new Email(user , url).sendWelcome();
module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `Kartik Yadav <${process.env.EMAIL_FROM}>`;
  }

  async send(template, subject) {
    // 1) Render HTML based on the template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    // 2) Define the email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    };

    // 3) Send email using Resend
    await resend.emails.send({
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      html: mailOptions.html,
      text: mailOptions.text,
    });
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to the Natours Family");
  }

  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      "Your password reset token (valid for only 10 minutes)"
    );
  }
};
