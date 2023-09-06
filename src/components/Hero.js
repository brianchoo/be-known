import anime from "animejs";
import { useState, useEffect } from "react";
import AnimatedWave from "./animations/AnimatedWave";
import Button from "@/components/button/Button";

const Typewriter = ({ text, delay, ...props }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <div {...props}>{currentText}</div>;
};

const Hero = () => {
  useEffect(() => {
    anime({
      loop: false,
      targets: "#first",
      opacity: [1, 0],
      duration: 600,
      delay: 2200,
      easing: "linear",
    });

    anime({
      loop: false,
      targets: ["#second", ".headline"],
      opacity: [0, 1],
      easing: "linear",
      delay: 3000,
      duration: 1200,
    });

    anime({
      loop: false,
      targets: [".button"],
      opacity: [0, 1],
      easing: "linear",
      delay: 3000,
      duration: 1200,
    });
  }, []);

  return (
    <div className="h-screen bg-grey-200 flex justify-center items-center">
      <AnimatedWave color={"#4F46E5"} animationDuration="4s" opacity={"0.6"} />
      <AnimatedWave color={"#4F46E5"} animationDuration="12s" opacity={"0.3"} />

      <div className="relative w-full text-center">
        <div
          id="dummy"
          className="lg:text-9xl font-semibold uppercase w-full invisible"
        >
          Dummy
        </div>
        <Typewriter
          id="first"
          className="lg:text-9xl font-semibold uppercase absolute top-0 w-full"
          text="Be Visible."
          delay={150}
        />
        <h1
          id="second"
          className="lg:text-9xl font-semibold uppercase absolute top-0 w-full"
        >
          Be Known.
        </h1>
        <div className="lg:text-3xl pt-5 headline max-w-screen-lg mx-auto">
          Our dedication lies in delivering top-notch and expert-level web
          design and development services.
        </div>
        <Button
          isLink={true}
          href="/contact"
          margin="mt-7"
          padding="px-7 py-3"
        />
      </div>
    </div>
  );
};

export default Hero;
