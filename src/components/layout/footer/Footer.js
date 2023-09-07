import Image from "next/image";

const FooterLinkList = ({ footerLinks }) => {
  return (
    <ul className="mb-5 footer-link">
      {footerLinks.map((item, index) => (
        <li
          key={index}
          className="text-xs font-regular leading-6 uppercase text-grey-100 mb-2 pl-5 flex items-center tracking-wider"
        >
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
            src="/logo-white.svg"
            priority={true}
            className="logo ml-[-5px] mb-4"
            alt="logo-white"
            width={100}
            height={80}
          />
          <div className="text-sm font-regular leading-6">
            Our dedication lies in delivering top-notch and expert-level web
            design and development services.
          </div>
        </div>
        <div className="lg:col-span-3 col-span-12 text-white tracking-wide">
          <div className="uppercase font-bold mb-4">Our office</div>
          <p className="text-xs font-regular leading-6 uppercase">No.62,</p>
          <p className="text-xs font-regular leading-6 uppercase">
            Jalan BU10/8,
          </p>
          <p className="text-xs font-regular leading-6 uppercase">
            Bandar Utama,
          </p>
          <p className="text-xs font-regular leading-6 uppercase">
            47800, Petaling Jaya
          </p>
        </div>
        <div className="lg:col-span-3 col-span-12 text-white tracking-wide">
          <div className="uppercase font-bold mb-4">Navigations</div>
          <FooterLinkList footerLinks={FOOTERLINKS} />
        </div>
        <div className="lg:col-span-3 col-span-12 text-white tracking-wide">
          <div className="uppercase font-bold mb-4">Socials</div>
          <div>Insta and fb here</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
