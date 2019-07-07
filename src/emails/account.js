const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'eriglesias@ufl.edu',
    subject: 'Thanks for joining!',
    text: `Welcome to the app, ${name}! Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'eriglesias@ufl.edu',
    subject: `Sorry to see you go, ${name}`,
    text: `Goodbye, ${name}! Please let us know if there is anything we could have done ot keep you`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
