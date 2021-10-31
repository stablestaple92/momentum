// 스스로 동기부여 할 수 있는 명언이나 어구를 넣어갑시다.
// 언제나 업데이트 하기.

const quotes = [
    {
        quote : "세상에 끈기를 대신할 수 있는 것은 아무 것도 없다. 재능은 끈기를 대신할 수 없다. 뛰어난 재능을 갖고도 실패하는 사람은 얼마든지 볼 수 있다. 천재도 끈기를 대신할 순 없다.",
        author : "Jay Van Andel",
    },
    {
        quote : "항상 하던 일을 계속하면 항상 가진 것만 갖게 된다.",
        author : "Jim Rohn",
    },
    {
        quote : "전문가란 자기 주제에 관해서 저지를 수 있는 모든 잘못을 이미 저지른 사람이다.",
        author : "Niels Henrik David Bohr",
    },
    {
        quote : "실패는 언제나 찾아오는 친구이며 성공은 어쩌다 찾아오는 손님이다.",
        author : "Mir A. Imran",
    },
    {
        quote : "처음에는 우리가 습관을 만들지만, 그다음에는 습관이 우리를 만든다.",
        author : "John Dryden",
    },
    {
        quote : "살아가면서 저지를 수 있는 가장 큰 실수는, 실수할까봐 계속 걱정하며 사는 것이다.",
        author : "Elbert Hubbard",
    },
    {
        quote : "인간은 꾸물거릴 수도 있지만, 시간은 그러지 않는다.",
        author : "Benjamin Franklin",
    },
    {
        quote : "실수해본 적이 없는 사람이란, 아무것도 시도해본 적이 없는 사람일 뿐이다.",
        author : "Franklin Delano Roosevelt",
    },
    {
        quote : "젊은이의 아름다움은 자연의 작품이지만, 노인의 아름다움은 노력의 결과이다.",
        author : "Anna Eleanor Roosevelt",
    },
    {
        quote : "계획이 없는 목표는 희망일 뿐이다.",
        author : "Antoine Jean-Baptiste Marie Roger de Saint-Exupéry",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;