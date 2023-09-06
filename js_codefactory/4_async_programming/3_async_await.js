/// async, await
// 1) 가장 많이 사용하는 비동기 프로그래밍
// 2) Promise의 then 등 복잡하다는 단점을 극복하기 위한 방법
// 3) 사용 방법 : async 키워드를 붙이고 비동기 처리 함수 앞에 await 키워드를 붙여 사용
//              결과값은 일반적인 return 값 받듯이 받음 (리턴값 == Promise<any>)
// 4) 에러 처리 : reject를 통해 받은 에러는 try-catch 문을 통해 처리

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000);
});

// async
async function runner(){
    try {
        const result1 = await getPromise(1);
        console.log(`first - ${result1}`);

        const result2 = await getPromise(1);
        console.log(`second - ${result2}`);

        const result3 = await getPromise(1);
        console.log(`third - ${result3}`);   
    } catch (error) {
        console.log(error);
    } finally{
        console.log('finally');
    }
};
// 실행
runner();

