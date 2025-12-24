import menuIcon from "/images/icon-menu.svg";
import heartIcon from "/images/icon-heart.svg";

const Header = ({ category, progress, onMenuClick }) => {
  return (
    <header className="relative mx-auto flex w-full max-w-350 items-center justify-between px-300 py-300 md:px-600 md:py-600">
      <div className="flex items-center gap-150 md:gap-400">
        <button
          onClick={onMenuClick}
          className="bg-gradient-3 flex h-[40px] w-[40px] items-center justify-center rounded-full shadow-md transition-all hover:brightness-110 md:size-800 md:h-[64px] md:w-[64px] lg:h-23.5 lg:w-23.5"
        >
          <img
            src={menuIcon}
            alt="Menu"
            className="h-[13.62px] w-[16.17px] object-contain md:h-[21.79px] md:w-[25.87px] lg:h-[32px] lg:w-9.5"
          />
        </button>
        <h1 className="font-house text-neutral-0 text-preset-7 lg:text-preset-4 md:text-preset-6 mt-1 uppercase">
          {category}
        </h1>
      </div>
      <div className="flex items-center gap-150 md:gap-400">
        <div className="bg-neutral-0 flex h-200 w-24 items-center rounded-full p-0.75 md:h-400 md:w-64 md:p-100 lg:w-60">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex items-center gap-150">
          <button className="flex items-center justify-center transition-all">
            <img
              src={heartIcon}
              alt="Lives"
              className="h-[26.18px] w-[24px] object-contain md:h-[48.93px] md:w-[53.33px]"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
