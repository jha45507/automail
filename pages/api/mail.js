import nodemailer from 'nodemailer'
require('dotenv').config()
export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log("body", req.body)
        const { Name, Email, Description, Contact } = req.body
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "casual1432@gmail.com",
                pass: "liwptsociajvoczt",
            },
        });
        try {
            await transporter.sendMail({
                from: 'jha45507@gmail.com',
                to: Email,
                html:
                    `<div style='width:100%;'>
                        <div style='margin:auto; width:80%; text-align:center;  '>
                            <h1>New Message By Rahul Jha</h1>
                            <div style="border:2px solid ; text-align:start; padding:20px ">
                                <p><strong>Name: </strong> ${Name}</p>
                                <p><strong>Email: </strong> ${Email}</p>
                                <p><strong>Description: </strong> ${Description}</p>
                                <p><strong>Contact: </strong> ${Contact}</p>
                            </div>
                        </div>
                    </div>`
            });
        } catch (error) {
            return res.status(500).json({ error: error.message || error.toString() });
        }
        res.status(200).send({msg: 'Message Send Successful'})
    }
    else {
        res.send('method not allow')
    }
};