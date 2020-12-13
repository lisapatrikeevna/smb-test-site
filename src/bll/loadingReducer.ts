export type  initialStateType = {
    login: boolean
}
type loadProcessType=ReturnType<typeof loadProcessAC>
type actionType = loadProcessType
let initialState: initialStateType = {
    login: false
}
const loginReducer = (state = initialState, action: actionType):initialStateType => {
    switch (action.type) {
        case "LOADING":
            return {...state,
                // a1-login: action.load
            }
        default:
            return state
    }
}
export const loadProcessAC = (load:boolean) => ({type:'LOADING',load}as const)

export default loginReducer;