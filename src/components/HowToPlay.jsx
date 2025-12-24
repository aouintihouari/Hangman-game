import iconBack from "/images/icon-back.svg";

const steps = [
  {
    number: "01",
    title: "Choose a Category",
    description:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    number: "02",
    title: "Guess Letters",
    description:
      "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    number: "03",
    title: "Win or Lose",
    description:
      "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];

const HowToPlay = ({ onBackClick }) => {
  return (
    <div className="relative z-10 flex h-full w-full flex-col px-6 py-8 md:px-10 md:py-16 lg:px-0">
      <div className="relative mb-16 flex items-center justify-between lg:mb-20 lg:justify-center">
        <button
          onClick={onBackClick}
          className="bg-gradient-3 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-[inset_0_-4px_0_4px_#243041] transition-transform hover:brightness-110 active:scale-95 md:h-24 md:w-24 lg:absolute lg:left-0"
        >
          <img src={iconBack} alt="Go Back" className="w-8 md:w-10" />
        </button>
        <h1 className="font-house text-preset-7 md:text-preset-2 lg:text-preset-1 text-stroke-style text-center uppercase">
          How to Play
        </h1>
        <div className="w-16 md:w-24 lg:hidden" />
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-48 bg-neutral-0 flex flex-row items-center gap-10 px-8 py-10 text-center md:items-start md:px-12 md:py-12 md:text-left lg:flex-col lg:items-center lg:px-8 lg:py-12 lg:text-center"
          >
            <span className="font-house text-preset-10 md:text-preset-4 mb-4 hidden text-blue-600 md:mb-6 md:block lg:mb-3">
              {step.number}
            </span>
            <div className="flex flex-col text-left lg:text-center">
              <div className="ml-10 flex flex-row items-start gap-5 md:ml-0 md:block md:gap-0">
                <span className="font-house text-preset-10 md:text-preset-4 mb-4 text-blue-600 md:mb-6 md:hidden lg:mb-10">
                  {step.number}
                </span>
                <h2 className="font-house text-preset-10 md:text-preset-7 lg:text-preset-6 mb-6 tracking-widest text-indigo-600 uppercase md:mb-8 lg:mb-10 lg:text-center">
                  {step.title}
                </h2>
              </div>
              <p className="text-preset-12 md:text-preset-11 lg:text-preset-9 ml-10 font-sans leading-relaxed font-medium tracking-wide text-indigo-400 md:ml-0">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToPlay;
