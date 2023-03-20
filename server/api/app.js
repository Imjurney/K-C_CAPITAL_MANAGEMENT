import cors from 'cors';
import express from 'express';
import { mailSender } from './index.js';

const app = express();
app.use(
  cors()
  // cors({
  //   origin: ['http://127.0.0.1:5173'],
  //   credentials: true,
  // })
);

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

app.get('/back/', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
  res.send('hello');
});

app.get('/back/mail', (req, res) => {
  res.send('hi');
});

app.post('/back/mail', async (req, res, next) => {
  try {
    const { firstName, lastName, email, Phone, message } = req.body;
    console.log(req.body);
    const emailParam = {
      toEmail: 'test@knccapital.co.nz', // 수신할 이메일
      subject: 'Message from an investor!', // 메일 제목
      text: `
            <div>
                <h2>Message Details</h2>
                <div>This email is for outgoing only</div>
                <div class="firstname" style="font-size: 1.1em;">First Name : ${firstName}</div>
                <div class="lastname" style="font-size: 1.1em;">Last Name : ${lastName}</div>
                <div class="email" style="font-size: 1.1em;">Email : ${email}</div>
                <div class="phone" style="font-size: 1.1em;">Phone : ${Phone}</div>
                <div class="message" style="font-size: 1.1em;">extra message : </div>
                <pre class="message" style="font-size: 1.2em;">${message}</pre>
            </div>
            `,
    };
    await mailSender
      .sendGmail(emailParam)
      .then(() => res.status(200).send('저장 및 발송 성공'));
    // .catch(() => res.status(500).send('에러'));
  } catch (err) {
    console.error(err);
    next(err);
  }
});
app.listen(3005, () => {
  console.log('서버 실행 중!');
});
