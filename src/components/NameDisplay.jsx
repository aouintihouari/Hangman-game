import { useMemo } from "react";

const NameDisplay = ({ selectedName, isLetterTyped }) => {
  const characters = useMemo(() => {
    return selectedName.split("").map((char, idx) => ({
      char,
      id: `${char}-${idx}`,
      isSpace: char === " ",
    }));
  }, [selectedName]);

  return (
    <div className="mx-auto mb-10 flex flex-wrap items-end justify-center gap-2 md:gap-4 lg:w-10/12">
      {characters.map(({ char, id, isSpace }) => {
        if (isSpace) {
          return <div key={id} className="w-4 md:w-8 lg:w-12"></div>;
        }

        const isTyped = isLetterTyped(char);

        return (
          <div
            key={id}
            className="font-house rounded-12 md:rounded-32 flex h-16.5 w-[40px] items-center justify-center bg-[#2463FF] text-[32px] font-bold uppercase md:h-28 md:w-22 md:text-[64px] lg:h-32 lg:w-28 lg:text-[88px]"
            style={{
              color: isTyped ? "#FFFFFF" : "transparent",
              opacity: isTyped ? 1 : 0.25,
              boxShadow: isTyped ? "inset 0 -4px 0 3px #140e66" : "none",
              transition:
                "color 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease",
              willChange: "opacity",
            }}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
};

export default NameDisplay;
