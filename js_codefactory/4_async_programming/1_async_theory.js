/// Thread 
// 1) 가장 작은 단위의 Working Unit
// 2) 16개의 Thread -> 동시에 작업할 수 있는 개수가 16개
// 3) JavaScript Engine은 Single Threaded -> async programming을 통해 극복

/// JavaScript Engine
// 1) 구성 - Memory Heap, Call Stack
// 2) Call Stack 실행할 함수 등이 쌓여서 처리
// 3) 비동기 함수는 Event Loop을 통해 Task Queue(Event Queue)로 옮겨짐

/// Task Queue(Event Queue)
// 1) 비동기 함수 등이 대기하는 장소
// 2) Event Loop를 통해 종료된 함수가 Call Stack으로 돌아감

/// Event Loop
// 1) JavaScript 런타임 시 생성
// 2) Task Queue를 바라보며 실행이 종료된 함수를 감지
// 3) Call Stack이 비어있는지 확인
// 4) 2,3번을 하면서 Task들을 관리함


/// sync = 동기
// 1) 순서대로 진행

/// async = 비동기
// 1) 동시에 진행


// sync
function synclongWork() {
    const now = new Date();

    // 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간
    const milliseconds = now.getTime();

    // milliseconds의 2초 뒤
    const afterTwoSeconds = milliseconds + 2 * 1000;

    
    while(new Date().getTime() < afterTwoSeconds){
        // 2초 대기     
    }

    console.log('완료');
}

console.log('sync programming');
console.log('Hello');   // 1
synclongWork();         // 2
console.log('World');   // 3


// async
function asyncLongWork(){
    // 비동기 함수 - 2초 대기 후 완료 출력
    setTimeout(()=>{
        console.log('완료');
    }, 2000);
}

console.log('async programming');
console.log('Hello');   // 1
asyncLongWork();        // 3
console.log('World');   // 2