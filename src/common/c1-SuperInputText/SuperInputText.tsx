import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import s from "./SuperInputText.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputTextPropsType = DefaultInputPropsType & { 
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    setError:(error:string)=>void
    
};

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {   
        type, onChange, onChangeText, onKeyPress, onEnter, error, className, spanClassName,setError,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        onChange && onChange(e); // если есть пропс onChange// то передать ему е (поскольку onChange не обязателен)
        onChangeText && onChangeText(e.currentTarget.value);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter" // если нажата кнопка Enter
        && onEnter // и есть пропс onEnter
        && onEnter(); // то вызвать его
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`;
    // const finalInputClassName = `${s.errorInput} ${className}`; // need to fix with (?:) and s.superInput
    // const finalInputClassName = `${s.errorInput} ${className ? className : ""}`; // need to fix with (?:) and ${s.superInput}
    const finalInputClassName = !error? s.superInput +' '+ s.default : s.errorInput+' '+s.default;
    return (
        <>
            <input
                type={"text"}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
}

export default SuperInputText;
