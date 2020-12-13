import axios from 'axios';

const instanse = axios.create({
    baseURL:'https://neko-cafe-back.herokuapp.com/auth/test',
})

//https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true},

export const hwApi={
    send(success= true){
        return instanse.post("",{success})
    }
}