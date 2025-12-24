import iconBack from "/images/icon-back.svg";

const CategoryPick = ({ categories, onBackClick, onCategoryPick }) => {
  return (
    <div className="relative z-10 flex h-full w-full max-w-304 flex-col px-6 py-8 md:px-10 md:py-16">
      <div className="relative mb-16 flex items-center justify-between lg:mb-24 lg:justify-center">
        <button
          onClick={onBackClick}
          className="bg-gradient-3 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-[inset_0_-4px_0_4px_#243041] transition-transform hover:brightness-110 active:scale-95 md:h-24 md:w-24 lg:absolute lg:left-0"
        >
          <img src={iconBack} alt="Go Back" className="w-8 md:w-10" />
        </button>
        <h1 className="text-stroke-style font-house text-preset-6 md:text-preset-2 lg:text-preset-1 text-center uppercase lg:ml-20">
          Pick a Category
        </h1>
        <div className="w-16 md:w-24 lg:hidden" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryPick(category)}
            className="font-house text-preset-10 md:text-preset-6 group rounded-24 md:rounded-48 relative flex h-20 w-full cursor-pointer items-center justify-center bg-blue-600 tracking-wider text-white uppercase shadow-[0_6px_0_#243041] transition-all hover:bg-blue-500 active:translate-y-1 active:shadow-none md:h-48 lg:h-52"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPick;
