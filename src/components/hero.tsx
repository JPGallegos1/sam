import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="md:py-28 py-14">
      <div className="max-w-screen-xl mx-auto md:px-0 px-4 text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex ">
        <div className="flex-none space-y-5 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm text-sky-600 font-medium">
            {`Facilitating over 1200 academic achievements.`}
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            {`We assist international students in advancing their education`}
          </h2>
          <p>
            {`Catering to the diverse needs of international students, our dedicated services are designed to provide comprehensive support and guidance throughout their educational journey. Whether navigating through admission processes, offering assistance in acclimatizing to new academic environments, or providing tailored resources for academic success, we are committed to ensuring that each student receives the necessary tools and support to excel in their educational pursuits. Our goal is to empower and enrich the educational experience of foreign students, fostering an environment where learning thrives and aspirations are realized.`}
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              href="/students"
            >
              {`Manage students`}
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <Image
            alt="students"
            className=" md:rounded-tl-[108px]"
            height={800}
            src="/students.avif"
            width={600}
          />
        </div>
      </div>
    </section>
  );
}
