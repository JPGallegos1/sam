import { useLocalStorage } from "usehooks-ts";
import Link from "next/link";

import { Student } from "@/types";

import StudentTableHeader from "../molecules/students/student-header";
import DeleteStudentModal from "../molecules/modals/delete-student";
import StudentsPageError from "../errors/students-error";

export default function StudentTable() {
  const [students, setStudents] = useLocalStorage<Student[]>("students", []);

  return (
    <div className="max-w-screen-xl mx-auto py-24 my-24 px-4 md:px-16 ">
      {students && students.length > 0 ? (
        <>
          <StudentTableHeader />
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Age</th>
                  <th className="py-3 px-6" />
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.age}</td>
                    <td className="text-right px-6 whitespace-nowrap">
                      <Link
                        className="py-2 px-3 font-medium text-sky-600 hover:text-sky-500 duration-150 hover:bg-gray-50 rounded-lg"
                        href="edit"
                      >
                        Edit
                      </Link>

                      <DeleteStudentModal student={student} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <StudentsPageError />
      )}
    </div>
  );
}
