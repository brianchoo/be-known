import { useState, useEffect } from "react";
import Image from "next/image";
import Form from "@/components/form/Form";

const ContactList = ({ contactListItems }) => {
  return (
    <>
      {contactListItems.map((item, index) => (
        <div key={index} className="flex gap-6 mb-6">
          <div className="shrink-0 pt-0.5">
            <Image src={item.src} alt={item.alt} width={23} height={50} />
          </div>
          <div>
            <p className="leading-7 lg:pr-8">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const contactListItems = [
  {
    src: "/phone.svg",
    alt: "phone",
    description: "016-8857937",
  },
  {
    src: "/email.svg",
    alt: "email",
    description: "brianchoo2012@gmail.com",
  },
];

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
  return (
    <>
      <div className="py-16">
        <div className="h-[25vh] lg:h-[50vh] bg-grey-200 flex justify-center items-center">
          <div className="relative w-full text-center">
            <div
              id="dummy"
              className="lg:text-9xl font-semibold uppercase w-full invisible"
            >
              Dummy
            </div>
            <Typewriter
              id="first"
              className="text-4xl lg:text-7xl font-semibold uppercase absolute top-0 w-full"
              text="Let's Talk"
              delay={150}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-6 max-w-screen-xl mx-auto pt-16 px-8 lg:px-0">
          <div>
            <h3 className="text-3xl font-semibold leading-9 text-gray-900 lg:pr-12 pb-8">
              Meet up for coffee and let's talk about your next project.
            </h3>
            <div className="flex gap-6 mb-0 lg:mb-6">
              <div className="shrink-0 pt-1">
                <Image
                  src="/location.svg"
                  alt="location"
                  width={23}
                  height={50}
                />
              </div>
              <div className="lg:col-span-3 col-span-12 text-gray-900 tracking-wide mb-8 lg:mb-0">
                <p>No.62,</p>
                <p>Jalan BU10/8,</p>
                <p>Bandar Utama,</p>
                <p>47800, Petaling Jaya</p>
              </div>
            </div>
            <ContactList contactListItems={contactListItems} />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

// export async function getServerSideProps(context) {
//   const { req } = context;
//   let url = req.headers.referer;
//   let splitUrl = url.split("/");
//   // const host = `http://www.${req.headers.host}`;
//   url = `${splitUrl[0]}//${splitUrl[2]}`;
//   return { props: { url } };
// }
