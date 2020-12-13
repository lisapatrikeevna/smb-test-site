import {Route} from "react-router-dom";
import {Login} from "../a1-login/login";
import {Registration} from "../a2-register/registration";
import {RecoveryPassword} from "../a2-register/recoveryPassword";
import {Createpassword} from "../a2-register/createPassword";
import {TestPage} from "../test-page/testPage";
import React from "react";

export const RouteMainBlock = () => {
    return (
        <div className='sliderWrap'>
            <Route path={'/a1-login'} render={() => <Login/>}/>
            <Route path={'/registration'} render={() => <Registration/>}/>
            <Route path={'/recoveryPassword'} render={() => <RecoveryPassword/>}/>
            <Route path={'/createPassword'} render={() => <Createpassword/>}/>
            <Route path={'/testPage'} render={() => <TestPage/>}/>
        </div>
    )
}