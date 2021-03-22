const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true  //스트링의 스페이스바를 없애주는 역할 === ex) ggi cco@gmail.com
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExt: { //토큰을 사용 할 수 있는 기간
        type: Number
    }

})

// 위의 스키마 를 감싸주는게 모델
const User = mongoose.model('User', userSchema)

// 이 모델을 다른 파일에서도 쓸 수 있게 export
module.exports = { User }