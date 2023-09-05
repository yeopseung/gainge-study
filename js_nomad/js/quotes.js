// 명언 리스트
const quotes = [
    {
        quote: "명언 1",
        author: "저자 1",
    },
    {
        quote: "명언 2",
        author: "저자 2",
    },
    {
        quote: "명언 3",
        author: "저자 3",
    },
    {
        quote: "명언 4",
        author: "저자 4",
    },
    {
        quote: "명언 5",
        author: "저자 5",
    },
    {
        quote: "명언 6",
        author: "저자 6",
    },
    {
        quote: "명언 7",
        author: "저자 7",
    },
    {
        quote: "명언 8",
        author: "저자 8",
    },
    {
        quote: "명언 9",
        author: "저자 9",
    },
    {
        quote: "명언 10",
        author: "저자 10",
    },
]

// QuerySelector
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 명언 리스트에서 랜덤으로 오늘의 명언 선택
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 오늘의 명언 출력
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;