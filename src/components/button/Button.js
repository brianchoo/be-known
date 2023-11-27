const Button = ({
  isLink,
  href,
  margin = "",
  padding = "",
  width = "",
  text,
}) => {
  if (isLink) {
    return (
      <div
        className={`button flex items-center justify-center grow-0 ${margin} ${width}`}
      >
        <a
          href={href}
          className={`${padding} bg-primary border rounded-4xl text-white font-semibold text-lg cursor-pointer transition-all duration-300 ease-in-out hover:border-black hover:text-black hover:bg-white `}
        >
          {text}
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
          {text}
        </div>
      </div>
    );
  }
};

export default Button;
