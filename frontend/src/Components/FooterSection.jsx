import * as React from "react";

export function Footer() {
  const contactInfo = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/007c454aba674938b9f92edb2b9e9767c5e7196793cde398ee51fa32d82fdfd0?placeholderIfAbsent=true&apiKey=ae33dffc165f400db26c462d40abbf66",
      text: "Mobile - +91 9876878875",
      alt: "Phone icon",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4ead116e5d4beae7627c277953e526c5d676b2154c0141769969416ceef5af0?placeholderIfAbsent=true&apiKey=ae33dffc165f400db26c462d40abbf66",
      text: "E-mail - efat1234@gmail.com",
      alt: "Email icon",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e7901655abe5d52ffbca2a014786bbb9bdd957c6cf2915e1aaf97ef1f4fbe0?placeholderIfAbsent=true&apiKey=ae33dffc165f400db26c462d40abbf66",
      text: "Twitter - efact_123",
      alt: "Twitter icon",
    },
  ];

  return (
    <footer className="px-8 py-12 bg-sky-900 text-white " id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Subscribe Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-semibold text-lime-400 mb-4">
            Get more Updates
          </h2>
          <p className="text-xl mb-4">Subscribe to efat gogood</p>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 rounded-l-lg text-black"
            />
            <button
              type="submit"
              className="bg-lime-400 px-4 py-2 rounded-r-lg text-black font-bold hover:bg-lime-500"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Measures</h3>
          <a
            href="/carbon"
            className="text-lg mb-2 hover:text-lime-400 transition-colors"
          >
            Carbon Footprint
          </a>
          <a
            href="/analysis"
            className="text-lg hover:text-lime-400 transition-colors"
          >
            Text Analysis
          </a>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-lime-400 mb-4">
            Contact Us
          </h3>
          <p className="text-lg mb-2">East Mira Road</p>
          <p className="text-lg mb-2">Suite 300</p>
          <p className="text-lg">Mumbai, 40001</p>
        </div>

        {/* Social/Contact Info */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-3 mb-3">
              <img
                loading="lazy"
                src={item.icon}
                alt={item.alt}
                className="w-8 h-8"
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © 2024 efat gogood. All rights reserved.
      </div>
    </footer>
  );
}
