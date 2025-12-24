import desktopBackground from "/images/background-desktop.svg";
import tabletBackground from "/images/background-tablet.svg";
import mobileBackground from "/images/background-mobile.svg";

const Background = () => {
  return (
    <picture className="bg-image-gradient-1 absolute top-0 left-0 h-full min-w-screen">
      <source srcSet={desktopBackground} media="(min-width: 1024px)" />
      <source srcSet={tabletBackground} media="(min-width: 768px)" />
      <source srcSet={mobileBackground} media="(max-width: 767px)" />
      <img
        src={desktopBackground}
        alt="background"
        className="h-full w-full object-cover"
      />
    </picture>
  );
};

export default Background;
