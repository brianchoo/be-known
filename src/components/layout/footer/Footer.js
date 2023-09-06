import Image from "next/image";

const FooterLinkList = ({ footerLinks }) => {
  return (
    <ul className="mb-5 footer-link">
      {footerLinks.map((item, index) => (
        <li className="text-sm font-regular leading-6 uppercase text-grey-100 mb-2 pl-5 flex items-center">
          <a key={index} href={item.link}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

const FOOTERLINKS = [
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

const Footer = () => {
  return (
    <div className="footer bg-black py-16">
      <div className="grid grid-cols-12 lg:gap-16 max-w-screen-xl mx-auto">
        <div className="lg:col-span-3 col-span-12 text-white">
          <Image
            className="logo ml-[-5px]"
            src="/logo-white.svg"
            alt="logo-white"
            width={100}
            height={80}
          />
          <div>An agency that cares.</div>
        </div>
        <div className="lg:col-span-3 col-span-12 text-white">
          <div className="uppercase font-bold mb-3">Our office</div>
        </div>
        <div className="lg:col-span-3 col-span-12 text-white">
          <div className="uppercase font-bold mb-3">Navigations</div>
          <FooterLinkList footerLinks={FOOTERLINKS} />
        </div>
        <div className="lg:col-span-3 col-span-12 text-white">
          <div className="uppercase font-bold">Socials</div>
          <div>Insta and fb here</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
