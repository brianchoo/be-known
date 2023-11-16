const Button = ({ isLink, href, margin = "", padding = "", width = "" }) => {
  if (isLink) {
    return (
      <div
        className={`button flex items-center justify-center grow-0 ${margin} ${width}`}
      >
        <a
          href={href}
          className={`${padding} bg-primary rounded-4xl text-white font-semibold text-lg cursor-pointer`}
        >
          Let's Get Started
        </a>
      </div>
    );
  } else {
    return (
      <div
        className={`button flex items-center justify-center grow-0 ${margin} ${width}`}
      >
        <div
          className={`${padding} bg-primary rounded-4xl text-white font-semibold text-lg`}
        >
          Let's Get Started
        </div>
      </div>
    );
  }
};

export default Button;
