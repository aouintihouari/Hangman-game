import logo from "/images/logo.svg";
import playIcon from "/images/icon-play.svg";

const StartGame = ({ onHowToPlayClick, onCategoryPick }) => {
  return (
    <div className="relative z-10 my-30 flex flex-col items-center">
      <img
        src={logo}
        alt="The Hangman Game"
        className="z-20 -mb-12 w-64 md:-mb-20 md:w-96"
      />
      <div className="bg-gradient-1 rounded-48 md:rounded-72 relative flex w-80 flex-col items-center gap-14 px-8 pt-20 pb-16 shadow-[inset_0_-8px_0_4px_#243041] md:w-148 md:px-14 md:pt-32">
        <button
          onClick={onCategoryPick}
          className="bg-gradient-3 group relative flex h-40 w-40 cursor-pointer items-center justify-center rounded-full shadow-[inset_0_-4px_0_5px_#243041] transition-all duration-300 hover:brightness-110 active:scale-95 md:h-52 md:w-52"
        >
          <img src={playIcon} alt="Play" className="w-16 md:w-20" />
        </button>
        <button
          onClick={onHowToPlayClick}
          className="font-house text-preset-10 md:text-preset-8 rounded-40 cursor-pointer bg-blue-600 px-16 py-3 tracking-widest text-white uppercase shadow-[0_6px_0_#243041] transition-colors duration-300 hover:bg-blue-500"
        >
          How to Play
        </button>
      </div>
    </div>
  );
};

export default StartGame;
