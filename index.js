const express = require('express')
const app = express()
const port = 5000
// const bodyParser = require('body-parser');
const config = require('./config/key');
const {
    User
} = require('./models/User');

// application/x-www-form-urlencoded 를 분석해서 가져올 수 있게 해줌
app.use(express.urlencoded({
    extended: true
}));
// application/json 타입을 분석해서 가져올 수 있게 해줌
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


    app.get('/', (req, res) => res.send('<h1>Hello World!</h1><p>I am GGricco!</p><p>외않되?</p><p>오 됐음!</p><p>노드몬을 설치해버림! npm run nodemon nonob</p><p>실행명령어는 nodemon -L</p><p>난 왜 안되냐.............?????</p><p>된다...드뎌 된다 ㅠㅠㅠ</p><p>야호!!!!!!!!</p>'));

app.post('/register', (req, res) => {
    // 회원 가입할떄 필요한 정보들을 client에서 가져오면 
    // 그것을을 데이터 베이스에 넣어준다.

    const user = new User(req.body);

    // 몽고DB에서 오는 메서드. 
    user.save((err) => {
        if (err) return res.json({
            success: false,
            err
        });
        return res.status(200).json({
            success: true
        });
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})