import Image from "next/image";
import Hero from "@/components/Hero";

function ServiceItem({ serviceItems }) {
  return (
    <>
      {serviceItems.map((item, index) => (
        <div key={index} className="flex gap-6 mb-10">
          <div className="shrink-0">
            <Image src={item.src} alt={item.alt} width={50} height={80} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

const serviceItemss = [
  {
    src: "/design.svg",
    alt: "design and branding",
    title: "Branding & Design",
    description:
      "Whether it's logo design, or web development, we bring your brand's story to life through design solutions. Elevate your brand with our expertise and redefine your visual identity today.",
  },
  {
    src: "/development.svg",
    alt: "web design and development",
    title: "Web Design and Development",
    description:
      "Our skilled team creates responsive, user-friendly websites that not only look stunning but also function seamlessly. With a focus on user experience, we ensure your website leaves a lasting impression and drives business growth.",
  },
  {
    src: "/graph.svg",
    alt: "online-marketing",
    title: "Online Marketing",
    description:
      "We analyze data, optimize campaigns, and stay ahead of industry trends to ensure your brand thrives in the digital landscape. Maximize your online potential with our results-driven approach.",
  },
  {
    src: "/maintenance.svg",
    alt: "maintenance and support",
    title: "Maintenance and Support",
    description:
      "As your trusted maintenance and support agency, we're dedicated to keeping your systems running smoothly. Rely on us for worry-free maintenance and unwavering support.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-16">
        <div className="mb-20">
          <h2 className="text-5xl text-center mb-10">What do we do exactly?</h2>
          <p className="max-w-screen-lg mx-auto text-center text-xl">
            We help businesses grow their online presence through a variety of
            services, including website design and development, and search
            engine optimization. We do this by providing businesses with the
            tools and resources they need to succeed online.
          </p>
        </div>
        <div className="grid grid-cols-12 max-w-screen-lg mx-auto lg:gap-12">
          <div className="lg:col-span-6 col-span-12">
            <img
              className="rounded w-full h-auto"
              src="/images/service-picture.jpg"
              alt="service image"
            />
          </div>
          <div className="lg:col-span-6 col-span-12">
            <ServiceItem serviceItems={serviceItemss} />
          </div>
        </div>
      </div>
    </>
  );
}
