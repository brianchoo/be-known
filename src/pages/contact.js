import { useState, useEffect } from "react";
import Form from "@/components/form/Form";

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

const Contact = () => {
  const [data, setData] = useState(null);

  const fetchDataFromApi = () => {
    const apiUrl = "/api/hello";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error(error, "Error");
      });
  };

  return (
    <div className="py-16">
      <div className="h-[50vh] bg-grey-200 flex justify-center items-center">
        <div className="relative w-full text-center">
          <div
            id="dummy"
            className="lg:text-9xl font-semibold uppercase w-full invisible"
          >
            Dummy
          </div>
          <Typewriter
            id="first"
            className="lg:text-7xl font-semibold uppercase absolute top-0 w-full"
            text="Let's Talk"
            delay={150}
          />
        </div>
      </div>
      <Form />
      <button onClick={fetchDataFromApi}>Click me</button>
      {data ? <div>data name is: {data.name}</div> : <p>Loading...</p>}
    </div>
  );
};

export default Contact;
