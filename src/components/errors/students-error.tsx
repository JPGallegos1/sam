import Link from "next/link";

export default function StudentsPageError() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
      <div className="max-w-lg mx-auto space-y-3 text-center">
        <h3 className="text-sky-800 font-semibold">{`Oops!`}</h3>
        <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
          {`Students weren't found`}
        </p>
        <p className="text-gray-600">
          {`Seems like there are no students to manage. Do you want to add your first student?`}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            className="block py-2 px-4 text-white font-medium bg-sky-800 duration-150 hover:bg-sky-500 active:bg-sky-700 rounded-lg"
            href="/students/add"
          >
            Add student
          </Link>
          <Link
            className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            href="/"
          >
            Go back
          </Link>
        </div>
      </div>
    </section>
  );
}
