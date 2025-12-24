import { useState } from "react";

import data from "./data/data.json";

import {
  Background,
  CategoryPick,
  HowToPlay,
  StartGame,
  InGame,
} from "./components";
import MenuModal from "./components/MenuModal";

/**
 * App component - Main component that manages the application state and navigation
 * @returns {JSX.Element} - The main application structure
 */
const App = () => {
  const [screen, setScreen] = useState("start");
  const [category, setCategory] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("pause");

  const { categories } = data;
  const categoriesList = Object.keys(categories);

  /**
   * Handles the selection of a random name from the chosen category
   * @param {string} selectedCategory - The category from which to select a name
   */
  const handleSelectName = (selectedCategory) => {
    const namesLength = categories[selectedCategory].length;
    const randomIndex = Math.floor(Math.random() * namesLength);
    setSelectedName(categories[selectedCategory][randomIndex].name);
  };

  /**
   * Handles the category selection and transitions to the game screen
   * @param {string} selectedCategory - The category that was selected by the user
   */
  const handleCategoryPick = (selectedCategory) => {
    setCategory(selectedCategory);
    handleSelectName(selectedCategory);
    setScreen("inGame");
  };

  const handleOpenPauseMenu = () => {
    setModalType("pause");
    setIsModalOpen(true);
  };

  const handleGameWin = () => {
    setModalType("win");
    setIsModalOpen(true);
  };

  const handleGameLose = () => {
    setModalType("lose");
    setIsModalOpen(true);
  };

  const handlePlayAgain = () => {
    setIsModalOpen(false);
    if (category) handleSelectName(category);
  };

  const handleNewCategory = () => {
    setIsModalOpen(false);
    setScreen("pickCategory");
  };

  const handleQuitGame = () => {
    setIsModalOpen(false);
    setScreen("start");
  };

  return (
    <main className="font-house relative flex min-h-screen w-full flex-col items-center overflow-hidden">
      <Background />
      {screen === "start" && (
        <div className="z-10 flex h-screen items-center justify-center">
          <StartGame
            onHowToPlayClick={() => setScreen("howToPlay")}
            onCategoryPick={() => setScreen("pickCategory")}
          />
        </div>
      )}
      {screen === "howToPlay" && (
        <div className="z-10 w-full py-8 lg:max-w-10/12">
          <HowToPlay onBackClick={() => setScreen("start")} />
        </div>
      )}
      {screen === "pickCategory" && (
        <div className="z-10 flex h-screen items-center justify-center">
          <CategoryPick
            categories={categoriesList}
            onBackClick={() => setScreen("start")}
            onCategoryPick={handleCategoryPick}
          />
        </div>
      )}
      {screen === "inGame" && (
        <InGame
          category={category}
          selectedName={selectedName}
          onOpenMenu={handleOpenPauseMenu}
          onWin={handleGameWin}
          onLose={handleGameLose}
        />
      )}
      <MenuModal
        isOpen={isModalOpen}
        type={modalType}
        onClose={() => setIsModalOpen(false)}
        onPlayAgain={handlePlayAgain}
        onNewCategory={handleNewCategory}
        onQuitGame={handleQuitGame}
      />
    </main>
  );
};

export default App;
