// useState라는 리엑트 훅 기능을 사용하겠다는 뜻
import { useState } from "react";

function Counter() {
    const [num, setNum] = useState(0);  // 기본값을 0으로 설정
                                        // 초기상태가 0이라는 뜻...
    //let num = 100;  //  휘발성!(상태변수가 절대 아님!!!)
    //증가...
    const increase = () => {
        console.log("증가합니다...");
        setNum(num + 1);
        console.log("num=", num);
        //num++;
    }

    //감소... decrease
    const decrease = () => {
        console.log("감소합니다...");
        setNum(num - 1);
        //num--;
    }

    

    return (
        <div>
            <p>num = {num}</p>
            <button onClick={increase}>증가</button>
            <button onClick={() => decrease()}>감소</button>
        </div>
    )

}

export default Counter;