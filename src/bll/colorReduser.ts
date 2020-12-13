export type  initialStateType = {

}
// type changeThemeType=ReturnType<typeof changeThemeAC>
type actionType = any
let initialState: initialStateType = {

}
const colorReduser = (state = initialState, action: actionType):initialStateType => {
    switch (action.type) {
        case 'CHANGE-THEME':
            debugger
            return {...state,

            }
        default:
            return state
    }
}
// export const changeThemeAC = (theme:themeType) => ({type:'CHANGE-THEME',theme}as const)

export default colorReduser;