export default function FAQ() {

    const faqsList = [
        {
            label: "Payment",
            qas: [
                {
                    q: "What are the accepted payment methods for accessing educational resources or services?",
                    a: "Our platform offers various convenient payment methods, including credit/debit cards, PayPal, bank transfers, and other secure online payment options. We aim to provide flexibility in payment to ensure easy access to our educational resources for students worldwide."
                },
                {
                    q: "Are there any flexible payment plans available to assist students with limited budgets?",
                    a: "To accommodate diverse financial situations, we offer flexible payment plans tailored to meet the needs of students with budget constraints. These plans may include installment options or customizable payment schedules, empowering students to access quality education without financial stress."
                },
                {
                    q: "Do you offer scholarships or financial aid options to support students' access to educational programs?",
                    a: "As part of our commitment to fostering accessible education, we provide scholarship opportunities or financial aid programs for eligible students. These initiatives aim to support deserving individuals in pursuing their academic goals and gaining access to our educational offerings."
                },
            ]
        },
        {
            label: "Account",
            qas: [
                {
                    q: "How can I create a student account to access educational materials or coursework?",
                    a: "Creating a student account with us is a simple and streamlined process. By visiting our platform's registration page, students can sign up easily by providing basic information. Once registered, students gain access to a wealth of educational materials and coursework available on our platform."
                },
                {
                    q: "Can students easily update their educational preferences or course selections within their account?",
                    a: "Our user-friendly interface allows students to conveniently manage their educational preferences and course selections within their account settings. Whether adjusting course enrollments, updating personal details, or modifying learning paths, students have the flexibility to tailor their educational journey to suit their evolving needs."
                },
            ]
        },
    ]

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto ">
                <div className="max-w-lg">
                    <h3 className='mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl'>
                        {`Frequently asked questions`}
                    </h3>
                </div>
                <div className='mt-12 divide-y sm:mt-20'>
                    {
                        faqsList.map((list, idx) => (
                            <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
                                <div className="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow">
                                    <h4 className="text-gray-500 font-semibold">
                                        {list.label}
                                    </h4>
                                </div>
                                <ul className='flex-1 space-y-6 sm:last:pb-6 sm:space-y-8'>
                                    {list.qas.map((item, idx) => (
                                        <li
                                            key={idx}>
                                            <summary
                                                className="flex items-center justify-between font-semibold text-gray-700">
                                                {item.q}
                                            </summary>
                                            <p
                                                dangerouslySetInnerHTML={{ __html: item.a }}
                                                className='mt-3 text-gray-600 leading-relaxed'>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};