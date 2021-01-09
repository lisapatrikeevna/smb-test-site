import React, {useState} from "react";
import cl from './registration.module.css';
import {useDispatch} from "react-redux";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import {registrationAC, registrationTC} from "../../bll/registration-reduser";

export const Registration = () => {
    const dispatch = useDispatch()
    let [password, setPassword] = useState<string>('')
    let [email, setEmail] = useState<string>('')

    // const onSendHandler=(text:string,type:string)=>{
    //     if(text.trim()){
    //         if(type==='email'){
    //             setEmail(text)
    //         }else {
    //             setPassword(text)
    //         }
    //     }
    // }
    const onSendHandlerEmail = (text: string) => {
        // debugger
        if (text.trim()) {
            setEmail(text)
        }
    }
    const onSendHandlerPassw = (text: string) => {
        if (text.trim()) {
            setPassword(text)
        }
    }
    const onClick = () => {
        debugger
        dispatch(registrationTC(email, password))
    }
    return (
        <div className={cl.registration}>
            <h3>Registration</h3>
            <Input placeholder={'email'} type={'email'} onChangeText={onSendHandlerEmail} className={'default'} value={email}/>
            <Input placeholder={'password'} type={'password'} onChangeText={onSendHandlerPassw} className={'default'} value={password}/>
            <Button value={'send'} onClick={onClick}/>
        </div>
    )
}

// Wat is Lorem Ipsum?
//     Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.













