import {Dispatch} from "redux";
import {hwApi} from "./Api";


export type  initialStateType = {
    success: boolean
    message:Array<string>
}
type changeRequestType = ReturnType<typeof changeRequestAC>
type answerRequestType = ReturnType<typeof answerRequestAC>
type actionType = changeRequestType|answerRequestType
let initialState: initialStateType = {
    success: false,
    message:[],
}
const requestReduser = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'CHANGE-REQUEST':
            // debugger
            return {
                ...state,
                success: action.success
            }
        case 'ANSWER-REQUEST':
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}
export const changeRequestAC = (success: boolean) => ({type: 'CHANGE-REQUEST', success} as const)
export const answerRequestAC = (message: Array<string>)=> ({type: 'ANSWER-REQUEST', message} as const)

export const changeRequestTC = (success: boolean) => {
    return (dispatch: Dispatch) => {
        //debugger
        hwApi.send(success)
            .then(response => {
               // debugger
                let message=[response.data.errorText,response.data.info]
                dispatch(answerRequestAC(message))
                console.log(response.data);
            })
            .catch((err) => {
                let message=err.response ? err.response.data.errorText : err.message
                console.log(err.response ? err.response.data.errorText : err.message);
                dispatch(answerRequestAC(message))
            })
    }
}

export default requestReduser;