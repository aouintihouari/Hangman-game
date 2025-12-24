const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Keyboard = ({ isLetterTyped, onTypeLetter, disabled }) => {
  return (
    <div className="relative flex w-full justify-center p-4">
      <div className="grid grid-cols-9 gap-2 md:gap-4 lg:gap-6">
        {alphabet.map((letter) => {
          const isTyped = isLetterTyped(letter);
          const isDisabled = disabled || isTyped;

          return (
            <button
              key={letter}
              className={`hover:text-neutral-0 flex h-[56px] w-7.25 items-center justify-center rounded-lg bg-white font-sans text-lg font-bold text-indigo-600 shadow-md transition-all duration-200 hover:bg-blue-600 enabled:cursor-pointer enabled:hover:-translate-y-1 enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 md:h-21 md:w-[64px] md:rounded-2xl md:text-2xl lg:h-21 lg:w-18 lg:text-3xl`}
              disabled={isDisabled}
              onClick={() => onTypeLetter(letter)}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
