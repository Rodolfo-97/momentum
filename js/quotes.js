const quotes = [
  {
    quote:
      "Courage is very important. Like a muscle, it is strengthened by use.",
    translation: "용기는 대단히 중요하다. 근육과 같이 사용함으로써 강해진다.",
  },
  {
    quote: "Waste not fresh tears over old griefs.",
    translation: "지나간 슬픔에 새 눈물을 낭비하지 말라.",
  },
  {
    quote: "Envy and wrath shorten the life.",
    translation: "시기와 분노는 수명을 단축시킨다.",
  },
  {
    quote: "To be trusted is a greater compliment than to be loved.",
    translation: "신뢰받는 것은 사랑 받는 것 보다 더 큰 영광이다.",
  },
  {
    quote: "Opportunity seldom knocks twice.",
    translation: "기회는 좀처럼 두 번 오지 않는다.",
  },
  {
    quote: "Do today what you could do tomorrow.",
    translation: "내일 할 수 있는 것을 오늘 하라.",
  },
  {
    quote: "Slow and steady win the race.",
    translation: "천천히 그리고 꾸준히 하면 이긴다.",
  },
  {
    quote: "Early birds catch the worms.",
    translation: "일찍 일어나는 새가 벌레를 잡는다.",
  },
  {
    quote: "Every path has its puddle.",
    translation: "모든 길에는 웅덩이가 있는 법.",
  },
  {
    quote: "Better late than never.",
    translation: "아예 안 하는 것보다는 늦게라도 하는 게 낫다.",
  },
];

const quote = document.querySelector("#quote span:first-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

function quoteToEnglish() {
  quote.innerText = todayQuote.translation;
}

function quoteToKorean() {
  quote.innerText = todayQuote.quote;
}

quote.innerText = todayQuote.quote;

quote.addEventListener("mouseover", quoteToEnglish);
quote.addEventListener("mouseout", quoteToKorean);
