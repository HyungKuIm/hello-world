function Food() {
    const foods = ["라면", "김치", "김밥", "삼다수", "갈비탕"];
    const cafe = {
        '아아': 2,
        '카모': 1,
        '카라': 2,
        '모과': 1
    }
    return (
        <div>
            <p>내가 좋아하는 음식은?</p>
            <ul>
                {foods.map((value, idx) =>(
                    <li key={idx}>{idx}:{value}</li>
                ))}
            </ul>
            <p>커피 한잔 하셔야죠</p>
            <ul>
                {Object.keys(cafe).map((value)=>(
                    <li key={value}>{value} : {cafe[value]}잔</li>
                ))}
            </ul>
        </div>
    );
}

export default Food;