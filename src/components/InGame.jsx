import { useMemo, useState, useEffect } from "react";
import { Header, KeyBoard, NameDisplay } from "./";

const MAX_LIVES = 8;

const InGame = ({ category, selectedName, onOpenMenu, onWin, onLose }) => {
  const normalizedName = useMemo(
    () => selectedName.toUpperCase(),
    [selectedName],
  );

  const [typedLetters, setTypedLetters] = useState([]);
  const [lives, setLives] = useState(MAX_LIVES);
  const [status, setStatus] = useState("playing");

  useEffect(() => {
    setTypedLetters([]);
    setLives(MAX_LIVES);
    setStatus("playing");
  }, [selectedName]);

  useEffect(() => {
    if (status === "won") {
      const timer = setTimeout(() => onWin(), 1000);
      return () => clearTimeout(timer);
    }
    if (status === "lost") {
      const timer = setTimeout(() => onLose(), 1000);
      return () => clearTimeout(timer);
    }
  }, [status, onWin, onLose]);

  const isLetterTyped = (letter) => typedLetters.includes(letter);

  const handleTypeLetter = (letter) => {
    if (status !== "playing" || typedLetters.includes(letter)) return;

    const updatedLetters = [...typedLetters, letter];
    const isCorrect = normalizedName.includes(letter);

    setTypedLetters(updatedLetters);

    if (!isCorrect) {
      setLives((prevLives) => {
        const newLives = prevLives - 1;
        if (newLives <= 0) {
          setStatus("lost");
        }
        return newLives;
      });
    }

    const allLettersGuessed = normalizedName
      .split("")
      .filter((ch) => ch !== " ")
      .every((ch) => updatedLetters.includes(ch));

    if (allLettersGuessed) {
      setStatus("won");
    }
  };

  const handleReset = () => {
    setTypedLetters([]);
    setLives(MAX_LIVES);
    setStatus("playing");
  };

  const progress = (lives / MAX_LIVES) * 100;

  return (
    <div className="flex w-full flex-col items-center gap-10 md:gap-14 lg:gap-20">
      <Header
        category={category}
        lives={lives}
        maxLives={MAX_LIVES}
        progress={progress}
        status={status}
        onReset={handleReset}
        onMenuClick={onOpenMenu}
      />

      <div className="w-full px-4">
        <NameDisplay
          selectedName={normalizedName}
          isLetterTyped={isLetterTyped}
        />
      </div>

      <div className="mt-auto w-full px-2 pb-8">
        <KeyBoard
          isLetterTyped={isLetterTyped}
          onTypeLetter={handleTypeLetter}
          disabled={status !== "playing"}
        />
      </div>
    </div>
  );
};

export default InGame;
