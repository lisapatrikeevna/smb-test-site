import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import './SuperDubleRange.scss';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    min:number
    max:number
    // min, max, step, disable, ...
} & DefaultInputPropsType

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type, onChange,
        onChangeRange, value,
        min,max,
        // min, max, step, disable, ...
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки
    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(e); // сохраняем старую функциональность
    //
    //    onChangeRange && onChangeRange([]);
    //
    // }
    const onChangeLeftR=(e: ChangeEvent<HTMLInputElement>)=>{
        onChangeRange && onChangeRange([+e.currentTarget.value,value[1]]);
        // if((+e.currentTarget.value) === max) {
        //     return disabled = true
        // }
    }
    const onChangeRightR=(e: ChangeEvent<HTMLInputElement>)=>{
        debugger
        onChangeRange && onChangeRange([value[0],+e.currentTarget.value]);
    }

    return (
        <div className="range-slider">
            {/*<span className="rangeValues"></span>*/}
            <input
                type={"range"}
               onChange={onChangeLeftR}
                value={value[0]}
                // min={value[0]}
                max={max}
                //disabled={!((+e.currentTarget.value) === max) }
                disabled={!!(value[0] === value[1] ? true : false)}
                // onChange={(e)=>{}}
                //step={}
                className="left"
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />

            <input
                type={"range"}
                onChange={onChangeRightR}
                min={min}
               // max={value[1]}
                className="right"
                value={value[1]}
                disabled={!!(value[1] === value[0]+10 ? true : false)}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    );
}

export default SuperDoubleRange;
