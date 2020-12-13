import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        debugger
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    // let [checkeds, setChecked] = useState(false)
    // const checkedHandler = (checkeds:boolean) => {
    //     setChecked(!checkeds)
    // }
    // const checking=(value:string)=>{ value? true : false}
    const mappedOptions: any[] = options ? options.map((o, i) => (
        // map options with key
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                // name, checked, value, onChange
                value={o}
                name={name}
                checked={value === o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
