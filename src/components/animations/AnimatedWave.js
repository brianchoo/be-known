import { renderToStaticMarkup } from "react-dom/server";
import { detectScreenSize } from "@/helpers/screen";

const AnimatedWave = ({
  color,
  animationDuration,
  animationDirection,
  opacity,
}) => {
  const wave = (
    <svg viewBox="0 0 1000 126" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 42.9533C178.148 -12.5894 287.4 -13.7474 500 42.9533C682.727 88.1203 798.763 97.7368 1000 42.9533V125.861H0V42.9533Z"
        fill={color}
      />
    </svg>
  );

  // render svg to string
  const svgAsString = renderToStaticMarkup(wave);
  // encode string to url so that we can use it in the background property
  const encodedWaveSvg = encodeURIComponent(svgAsString);

  return (
    <div
      style={{
        // use encodedsvg as background
        background: `url('data:image/svg+xml,${encodedWaveSvg}')`,
        position: "absolute",
        bottom: "-5px",
        width: "100%",
        // height and background size should match the svg viewBox for a smooth animation
        height: 126,
        backgroundSize: "950px 126px",
        // animation-name is wave
        animation: `wave ${animationDuration} linear infinite`,
        animationDirection: animationDirection,
        opacity: opacity,
      }}
    ></div>
  );
};
export default AnimatedWave;

// 950px -5px
