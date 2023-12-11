import Image from "next/image";
import Link from "next/link";

import LandingTemplate from "@/components/templates/landing-template";

export const faqsList = [
  {
    label: "Payment",
    qas: [
      {
        q: "What are the accepted payment methods for accessing educational resources or services?",
        a: "Our platform offers various convenient payment methods, including credit/debit cards, PayPal, bank transfers, and other secure online payment options. We aim to provide flexibility in payment to ensure easy access to our educational resources for students worldwide.",
      },
      {
        q: "Are there any flexible payment plans available to assist students with limited budgets?",
        a: "To accommodate diverse financial situations, we offer flexible payment plans tailored to meet the needs of students with budget constraints. These plans may include installment options or customizable payment schedules, empowering students to access quality education without financial stress.",
      },
      {
        q: "Do you offer scholarships or financial aid options to support students' access to educational programs?",
        a: "As part of our commitment to fostering accessible education, we provide scholarship opportunities or financial aid programs for eligible students. These initiatives aim to support deserving individuals in pursuing their academic goals and gaining access to our educational offerings.",
      },
    ],
  },
  {
    label: "Account",
    qas: [
      {
        q: "How can I create a student account to access educational materials or coursework?",
        a: "Creating a student account with us is a simple and streamlined process. By visiting our platform's registration page, students can sign up easily by providing basic information. Once registered, students gain access to a wealth of educational materials and coursework available on our platform.",
      },
      {
        q: "Can students easily update their educational preferences or course selections within their account?",
        a: "Our user-friendly interface allows students to conveniently manage their educational preferences and course selections within their account settings. Whether adjusting course enrollments, updating personal details, or modifying learning paths, students have the flexibility to tailor their educational journey to suit their evolving needs.",
      },
    ],
  },
];

export default function Home() {
  return (
    <LandingTemplate>
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
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-0 px-4">
          <div className="max-w-lg">
            <h3 className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
              {`Frequently asked questions`}
            </h3>
          </div>
          <div className="mt-12 divide-y sm:mt-20">
            {faqsList.map((list, idx) => (
              <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
                <div className="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow">
                  <h4 className="text-gray-500 font-semibold">{list.label}</h4>
                </div>
                <ul className="flex-1 space-y-6 sm:last:pb-6 sm:space-y-8">
                  {list.qas.map((item, idx) => (
                    <li key={idx}>
                      <summary className="flex items-center justify-between font-semibold text-gray-700">
                        {item.q}
                      </summary>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.a }}
                        className="mt-3 text-gray-600 leading-relaxed"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LandingTemplate>
  );
}
