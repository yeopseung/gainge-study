/// Callback
// 1) 무언가를 입력하고 특정 작업 또는 이벤트가 끝났을 때 다시 불리는 함수

/// Promise(resolve, reject)
// 1) 콜백 지옥을 해결하기 위한 해결책 1번
// 2) resolve() - 제대로 된 응답을 받았을 때 넘겨줄 값
//    reject() - 제대로 된 응답을 받지 못했을 때 넘겨줄 값
// 3) .then() - resolve, rejecy 값은 then을 통해 전달받음 
// 4) .catch() - 응답 결과가 정상적이지 않을 경우 catch를 통해 에러 처러
// 5) .finally() - 응답 결과가 어떻든 마지막에 실행하는 것
// 6) Promise.all()을 통해서 병렬적인 처리도 가능!!


// 콜백 함수 
function waitAndRun() {
    // Callback - 2초 시간이 지난 뒤에 다시 불리는 함수
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}
// 실행
// waitAndRun();


// 중첩된 콜백 함수 - 콜백 지옥
function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(() => {
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}
// 실행
// waitAndRun2();


// Promise
const timoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// 실행
// timoutPromise.then((res) => {
//     // res - resolve 함수에서 넣어준 값
//     console.log(res);
// });

// Promise 응용
// 함수((seconds) => {})가 Promise를 반환하는 형태
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000);
});

// 실행 - 중첩된 Promise
// getPromise(1)
//     .then((res) => {
//         console.log('--first then---');
//         console.log(res);

//         return getPromise(1);
//     }).then((res) => {
//         console.log('--second then---');
//         console.log(res);

//         return getPromise(1);
//     }).then((res) => {
//         console.log('--third then---');
//         console.log(res);

//         return getPromise(1);
//     });

// 실행 - Promis 예외처리
// getPromise(1)
//     .then((res) => {
//         console.log('--first then---');
//         console.log(res);
//     })
//     .catch((res) => {
//         console.log('--first catch---');
//         console.log(res);
//     })
//     .finally(() => {
//         console.log('finally');
//     });


// Promise를 통해 병렬적인 처리도 가능
Promise.all(
    [
        getPromise(1),
        getPromise(2),
        getPromise(1),
    ]
).then((res) =>{
    console.log(res);
});