import Link from "next/link";

export default function StudentTableHeader() {
  return (
    <div className="items-start justify-between md:flex">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Students</h3>
      </div>
      <div className="mt-3 md:mt-0">
        <Link
          className="inline-block px-4 py-2 text-white duration-150 font-medium bg-sky-600 rounded-lg hover:bg-sky-500 active:bg-sky-700 md:text-sm"
          href="/students/add"
        >
          Add new student
        </Link>
      </div>
    </div>
  );
}
