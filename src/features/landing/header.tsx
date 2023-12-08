import Image from "next/image"
import { useState } from "react"

export default function Header() {

    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Students", path: "/students" },
    ]

    return (
        <>
            <nav className="relative items-center py-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 bg-sky-800">
                <div className="flex justify-between">
                    <a href="javascript:void(0)">
                        <Image
                            src="/logo.webp"
                            width={120}
                            height={50}
                            alt="SAM Sistemas logo"
                        />
                    </a>
                    <button className="text-gray-500 outline-none md:hidden"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
                    <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-white hover:text-gray-400" key={idx}>
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            ))
                        }
                    </div>
                </ul>
            </nav>
            <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex ">
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
                         
                            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                {`Manage students`}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <Image
                            src="/students.avif"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                            height={800}
                            width={600}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}