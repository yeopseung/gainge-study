const images = [
    "0.png",
    "1.png",
    "2.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/// document.createElement
// 이를 통해 <img> 태그와 같은 요소를 JavaScript 코드에서 생성하여 HTML에 추가할 수 있음

// <img> 생성
const bgImage = document.createElement("img");

// <img src="img/x.png"> - 이미지 src 추가
bgImage.src = `img/${chosenImage}`;

// 스타일 설정
bgImage.classList.add("background");

// <body> 태그의 자식으로 추가
document.body.appendChild(bgImage);