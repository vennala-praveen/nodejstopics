var nm = require('nodemailer');

var transporter = nm.createTransport(
    {
        host:"smtp.gmail.com",
        port:587,
        secure: false,
        auth:{
            user:'praveen98vennala@gmail.com',
            pass:'mtekqqxzjkhfarqy'
        }
    }
);

var options = {
    from: 'praveen98vennala@gmail.com',
    to:'praveen98vennala@gmail.com',
    subject:"Testing node emails",
    html:`<h1>Hello welcome to our application</h1>
        <img src='cid:food' width='200px'>
        <button>Click Here </button>
    `,
    attachments:[
        {
            filename:'food.jpeg',
            path:"https://images.pexels.com/photos/421809/pexels-photo-421809.jpeg",
            cid:'food'
        }
    ]
}

transporter.sendMail(
    options, function(error,info){
        if(error){
            console.log("Error:", error)
        }else{
            console.log("Email sent:", info.response)
        }
    }
)