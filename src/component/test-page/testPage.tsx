import React, {ChangeEvent, useState} from 'react';
import cl from './testPage.module.css';
import SuperInputText from '../../common/c1-SuperInputText/SuperInputText';
import {Redirect, Route} from 'react-router-dom';
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";


export const TestPage = () => {
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<string>("");
    const showAlert = () => {
        text ? setError('') : setError("error")
        if (error) {
            alert("введите текст...");

        } else {
            alert(text);
            setText('')
        }
    }
    //как не создавая setError с useState cделать error-false
    // const error = text ? "" : "error";
    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);
    let red = false;
    if (error) {
        red = true
    }
    const [value, setValue] = useState<string>("");
    const [errorSpan, setErrorSpan] = useState<string | null>(null)

    return (
        <div className={cl.testPage}>
            <SuperInputText value={text} onChangeText={setText} onEnter={showAlert} error={error} setError={setError}/>
            <SuperButton red={red} onClick={showAlert}>delete</SuperButton>
            <SuperCheckbox checked={checked} onChangeChecked={setChecked}>some text </SuperCheckbox>
            <SuperCheckbox checked={checked} onChange={testOnChange}/>
            <SuperEditableSpan value={value} onChangeText={setValue}
                               spanProps={{children: value ? undefined : "enter text..."}} setError={setErrorSpan}/>
        </div>
    )
}