

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  TriangleIcon,
  HexagonIcon,
  CircleIcon,
  HalfCircleIcon,
  PencileIcon,
  BulbIcon,
} from "../../assets/icons";

const footerData = {
  company: {
    name: "EduMon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit varius congue Morbi",
    socialLinks: [
      { icon: FaFacebookF, url: "https://facebook.com" },
      { icon: FaTwitter, url: "https://twitter.com" },
      { icon: FaLinkedinIn, url: "https://linkedin.com" },
      { icon: FaYoutube, url: "https://youtube.com" },
    ],
  },
  links: {
    title: "Useful Links",
    items: ["Home", "About Us", "Courses", "Categories", "Pricing", "Contact"],
  },
  resources: {
    title: "Resources",
    items: [
      "Community",
      "Support",
      "Video Guides",
      "Terms and Conditions",
      "Blog",
      "Security",
    ],
  },
  contact: {
    title: "Contact Us",
    address: "15 Rose Street, Harvey, IL 60426 USA",
    phone: "708-210-9101",
    email: "example@education.com",
  },
};

const NewsletterFooter: React.FC = () => {
  return (
    <footer className="relative pt-8 text-white bg-[#002935]">
      <div className="absolute left-3 top-10">
        <BulbIcon className="text-blue-500 stroke-1 size-12 -z-10" />
      </div>
      <div className="absolute left-3 top-10">
        <CircleIcon />
      </div>
      <div className="absolute left-3 top-60">
        <HexagonIcon className="text-blue-500 transition duration-500 stroke-1 size-12 animate-spin-slow" />
      </div>
      <div className="absolute right-5 top-60">
        <HalfCircleIcon className="text-blue-500 transition duration-500 stroke-1 size-12 animate-spin-slow" />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center py-10 space-y-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col items-center justify-between w-full md:flex-row">
            <div className="lg:w-2/3 lg:pr-96">
              <h2 className="text-2xl font-semibold md:text-4xl">
                Subscribe to Our Newsletter for Latest Update
              </h2>
            </div>
            <form className="relative flex space-x-2 md:w-[400px] w-[240px]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 text-black rounded-[30px] h-14 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute h-12 px-6 py-2 font-bold text-white bg-blue-500 rounded-3xl top-1 right-1 hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="relative pt-8 mt-8 border-t border-gray-700">
          <div className="absolute top-[-25px] right-8">
            <PencileIcon className="text-blue-500 stroke-1 size-12" />
          </div>
          <div className="absolute right-5 top-24">
            <TriangleIcon className="text-blue-500 transition duration-500 stroke-1 size-12 animate-spin-slow" />
          </div>

          <div className="grid grid-cols-1 gap-8 p-4 text-left md:grid-cols-3 lg:grid-cols-4">
            <div>
              <div className="flex flex-col items-center justify-center mb-2 max-md:block">
                <a href="/" className="mb-2 font-semibold text-md">
                  <img
                    src="/footer-logo-1.svg"
                    height="100%"
                    className="max-w-full mr-1"
                    alt="EduMon"
                  />
                </a>
              </div>
              <p>{footerData.company.description}</p>
              <div className="flex justify-start mt-4 space-x-4">
                {footerData.company.socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index} className="w-10 h-10 leading-[43px] block bg-[#1D2B45] hover:bg-blue-600 text-center text-[#B4C1D2] rounded-[10px] rotate-45">
                      <a
                        href={link.url}
                        className="flex items-center justify-center rotate-[1%]"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <IconComponent size={20} />
                      </a>
                    </li>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="mb-1">
                <h3 className="mb-2 text-xl font-semibold">
                  {footerData.links.title}
                </h3>
                <img
                  src="footer-title.svg"
                  className="mt-1"
                  width="50px"
                  height="3px"
                  alt=""
                />
              </div>
              <ul className="space-y-1">
                {footerData.links.items.map((item, index) => (
                  <li key={index}>
                    <a href="/" className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-1">
                <h3 className="mb-2 text-xl font-semibold">
                  {footerData.resources.title}
                </h3>
                <img
                  src="footer-title.svg"
                  className="mt-1"
                  width="50px"
                  height="3px"
                  alt=""
                />
              </div>
              <ul className="space-y-1">
                {footerData.resources.items.map((item, index) => (
                  <li key={index}>
                    <a href="/" className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-1">
                <h3 className="mb-2 text-xl font-semibold">
                  {footerData.contact.title}
                </h3>
                <img
                  src="footer-title.svg"
                  className="mt-1"
                  width="50px"
                  height="3px"
                  alt=""
                />
              </div>
              <p className="flex items-center mt-2 space-x-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{footerData.contact.address}</span>
              </p>
              <p className="flex items-center mt-2 space-x-2">
                <FaPhoneAlt className="text-blue-500" />
                <span>{footerData.contact.phone}</span>
              </p>
              <p className="flex items-center mt-2 space-x-2">
                <FaEnvelope className="text-blue-500" />
                <span>{footerData.contact.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 mt-8 bg-[#012C3F] text-center border-t border-gray-700">
        <div className="max-w-screen-xl mx-auto">
          <p>Copyright © 2024 Edumon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;
