import nodemailer from 'nodemailer';

export const mailSender = {
  // 메일발송 함수
  sendGmail: function (param) {
    let transporter = nodemailer.createTransport({
      host: 'mail.knccapital.co.nz',
      port: 465,
      auth: {
        user: 'test@knccapital.co.nz', // 보내는 메일의 주소
        pass: 'rkskek123!!', // 보내는 메일의 비밀번호
      },
    });
    // 메일 옵션
    let mailOptions = {
      // 보내는 메일의 주소
      to: param.toEmail, // 수신할 이메일
      subject: param.subject, // 메일 제목
      html: param.text, // 메일 내용
      // attachments: param.attachments, //첨부파일
    };

    return transporter.sendMail(mailOptions);
  },
};
