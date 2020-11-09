const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://167.172.174.85:27017/create-groups-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const User = mongoose.model('User',{
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        validate (value) {
            if (validator.isEmail(value)){
                throw new Error('Email address must be a valid email')
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate (value) {
            if (value.toLowerCase().includes('password')){
                throw new Error('Password can not contain password')
            }
        }

    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0){
                throw new Error('age must be greater than 0')
            }
        }
    }
});


const Player = mongoose.model('Player',{
    name: {
        type: String,
        required: true,

    },
    rank: {
        type: Number,
        required: true,
    }
});


// const player = new Player({name: 'איליה ניסיון לבסיס נתונים', rank: 2});

// player.save().then((res) => console.log(res)).catch((err) => console.log(err));

const me = new User({
    name: 'Ilya with password   ',
    password: 'ilyakolker'
});

me.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });