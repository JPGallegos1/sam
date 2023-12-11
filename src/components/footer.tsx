import Image from "next/image";

export default function Footer() {
  const footerNavs = [
    {
      href: "https://www.samsistemas.com.ar/contacto/",
      name: "Contact",
    },
    {
      href: "https://www.samsistemas.com.ar/contacto/trabaje-con-nosotros/",
      name: "Work with us",
    },
    {
      href: "https://www.samsistemas.com.ar/politica-privacidad/",
      name: "Privacy",
    },
  ];

  return (
    <footer className="pt-10 bg-sky-800">
      <div className="max-w-screen-xl mx-auto text-gray-600 md:px-0 px-4">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <Image
              alt="SAM Sistemas logo"
              className="w-32"
              height={50}
              src="/logo.webp"
              width={120}
            />
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li key={idx} className="text-white hover:text-gray-300 duration-150">
                  <a key={idx} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 py-10 border-t md:text-center text-white">
          <p>© 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
