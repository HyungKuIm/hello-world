// image, label은 프로퍼티
// PhotoText(image, label)과는 다름
function PhotoText({image, label}) {
    // 지역변수
    const photo = require(`./assets/${image}.jpg`);
    return (
        <div>
            <img src={photo} alt={label} width="200" />
            <span>{label}</span>
        </div>
    );
}

// 여기를 생략하면 외부에서 접근이 안됨...
export default PhotoText;