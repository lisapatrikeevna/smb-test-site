import {Dispatch} from "redux";
import {RegistrationApi} from "./Api";


export type  initialStateType = {
    email: string
    password:string
}
type registrationType = ReturnType<typeof registrationAC>
type actionType = registrationType
let initialState: initialStateType = {
   email: '',
   password: '',
}
const registerReduser = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'REGISTRATION':
            debugger
            return {
                ...state,
                email: action.email,
                password: action.password
            }
        default:
            return state
    }
}
export const registrationAC = (email:string,password:string)=> ({type: 'REGISTRATION',email,password} as const)
export const registrationTC = (email:string,password:string) =>{
    return(dispatch: Dispatch)=>{
        // debugger
        registrationAC(email,password)
        RegistrationApi.setUser(email,password).then(res=>{
            debugger
            console.log(res.data);
        } ) .catch((err) => {
            let message=err.response ? err.response.data.errorText : err.message
            console.log(err.response ? err.response.data.errorText : err.message);
            // dispatch(answerRequestAC(message))
        })


    }}



export default registerReduser;