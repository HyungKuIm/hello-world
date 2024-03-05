// 덧셈과 곱셈을 하는 컴포넌트


import { useState } from "react";
import { useForm } from "react-hook-form";
import "./PlusMul.css";


function PlusMul() {

    const {
        register,
        handleSubmit ,
        // setValue,
        // getValues,
        // watch,
        formState: { isSubmitting, isSubmitted, errors}
    } = useForm();

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [result, setResult] = useState(0);

    // const handleFirstNum = (e) => {
    //     const num = e.target.value;
    //     setFirst(num);
    // }

    // const handleSecondNum = (e) => {
    //     const num = e.target.value;
    //     setSecond(num);
    // }

    // const add = () => {
    //     const result = parseInt(first) + parseInt(second);
    //     setResult(result);
    // }

    // const mul = () => {
    //     const result = parseInt(first) * parseInt(second);
    //     setResult(result);
    // }

    const submitForm = (data) => {
        console.log(data);
        const buttonType=window.event.submitter.name;
        console.log(buttonType);
        if (buttonType === "plus") {
            const result = parseInt(first) + parseInt(second);
            setResult(result);
        } else {
            const result = parseInt(first) * parseInt(second);
            setResult(result);
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)}>
                <input type="text" name="firstNum" id="firstNum"
                    aria-invalid={isSubmitted ? (errors.first ? "true" : "false") : undefined}
                    {...register("first", {
                        required: "첫번째 숫자는 필수입력입니다.",
                        onChange: (e) => setFirst(e.target.value)
                    })} />
                {errors.first && <small role="alert">{errors.first.message}</small>} <br/>
                <input type="text" name="secondNum" id="secondNum"
                    aria-invalid={isSubmitted ? (errors.second ? "true" : "false") : undefined}
                    {...register("second", {
                        required: "두번째 숫자는 필수입력입니다.",
                        onChange: (e) => setSecond(e.target.value)
                    })} />
                {errors.second && <small role="alert">{errors.second.message}</small>}  <br/>

                <button type="submit" name="plus" disabled={isSubmitting}>plus계산</button>   
                <button type="submit" name="mul" disabled={isSubmitting}>mul계산</button>   

            </form>
            <br/>            
            <span>결과:{result}</span>
            {/* <input type="text" placeholder="첫번째 숫자 입력"
                onChange={(e) => handleFirstNum(e)} />
            <br />
            <input type="text" placeholder="두번째 숫자 입력"
                onChange={(e) => handleSecondNum(e)} />
            <br />
            <br />
            <button onClick={() => add()}>+</button>
            <button onClick={() => mul()}>*</button>
            <br /><br/><br/>
            <span>결과:{result}</span> */}

        </div>
    );
}

export default PlusMul;