

import nodemailer from 'nodemailer';

export const subscribeNewsletter = async (req, res) => {
  const { email } = req.body;

  try {
    // Send confirmation email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      secure: true, 
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: 'Subscription Confirmation',
      html: `
      <div style="font-family: Arial, sans-serif; text-align: center;">
        <img src="https://i.ibb.co/88mhsjm/buzzchapter-logo.png" alt="BuzzChapter Logo" style="margin-bottom: 20px;">
        <hr style="border: none; border-top: 1px solid #ccc;">
        <p>Thank you for subscribing to the BuzzChapter Blog newsletter!</p>
        <p>You have successfully subscribed to receive updates and news from BuzzChapter.</p>
        <p>Stay tuned for exciting content!</p>
        <hr style="border: none; border-top: 1px solid #ccc;">
        <p style="font-style: italic;">Thank you,</p>
        <p style="font-style: italic;">The BuzzChapter Team</p>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent successfully');
    res.status(200).send('Subscribed successfully!');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    res.status(500).send('Failed to subscribe');
  }
};
