const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,

            auth: {
                user: "krishnarajbhar767@gmail.com",
                pass: "ziqymaxkafusntte",
            },
        });

        let info = await transporter.sendMail({
            from: "studynotion | Krishna",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });
        console.log(info);
        return info;
    } catch (error) {
        console.log("Error From Mail Sender - >", error.message);
    }
};

module.exports = mailSender;
