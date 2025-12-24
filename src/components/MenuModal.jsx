const MenuModal = ({
  isOpen,
  onClose,
  onPlayAgain,
  onNewCategory,
  onQuitGame,
  type = "pause",
}) => {
  if (!isOpen) return null;

  const content = {
    pause: {
      title: "Paused",
      primaryBtnText: "Continue",
      primaryAction: onClose,
    },
    win: {
      title: "You Win",
      primaryBtnText: "Play Again",
      primaryAction: onPlayAgain,
    },
    lose: {
      title: "You Lose",
      primaryBtnText: "Play Again",
      primaryAction: onPlayAgain,
    },
  };

  const currentContent = content[type] || content.pause;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="rounded-48 relative flex w-full max-w-81 flex-col items-center bg-linear-to-b from-[#344898] to-[#161f48] px-6 py-12 text-center shadow-[0_10px_0_0_#141a3d] md:max-w-148 md:px-16 md:py-16">
        <h2
          className="font-house absolute -top-10 left-1/2 w-full -translate-x-1/2 text-[80px] leading-none tracking-wide text-transparent md:-top-20 md:text-[130px]"
          style={{
            WebkitTextStroke: "6px #243041",
            backgroundImage:
              "linear-gradient(180deg, #67B6FF 16%, #FFFFFF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          {currentContent.title}
        </h2>

        <div className="mt-8 flex w-full flex-col gap-4 md:mt-12 md:gap-8">
          <button
            onClick={currentContent.primaryAction}
            className="group rounded-40 relative w-full border-[3px] border-black bg-[#2463FF] py-3 text-2xl tracking-[0.05em] text-white uppercase shadow-[inset_0_-4px_0_4px_#140E66,inset_0_4px_0_0_#3C74FF] transition-all hover:brightness-110 active:translate-y-1 md:py-5 md:text-[32px]"
          >
            {currentContent.primaryBtnText}
          </button>
          <button
            onClick={onNewCategory}
            className="group rounded-40 relative w-full border-[3px] border-black bg-[#2463FF] py-3 text-2xl tracking-[0.05em] text-white uppercase shadow-[inset_0_-4px_0_4px_#140E66,inset_0_4px_0_0_#3C74FF] transition-all hover:brightness-110 active:translate-y-1 md:py-5 md:text-[32px]"
          >
            New Category
          </button>

          <button
            onClick={onQuitGame}
            className="group rounded-40 relative w-full border-[3px] border-black bg-linear-to-b from-[#FE71FE] to-[#7199FF] py-3 text-2xl tracking-[0.05em] text-white uppercase shadow-[inset_0_-4px_0_4px_#C22E9B,inset_0_4px_0_0_#FF95FF] transition-all hover:brightness-110 active:translate-y-1 md:py-5 md:text-[32px]"
          >
            Quit Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
