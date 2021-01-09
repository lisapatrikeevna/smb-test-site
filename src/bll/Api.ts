import axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
})
export const RegistrationApi = {
    setUser(email: string, password: string){
        return instans.post('auth/register',{email,password})
            .then(res=>{
                debugger
               return  res.data
            })
    }
}