import type { Student } from "@/types";

import * as Dialog from "@radix-ui/react-dialog";
import { useLocalStorage } from "usehooks-ts";

type Props = {
  student: Student;
};

export default function DeleteStudentModal({ student }: Props) {
  const [students, setStudents] = useLocalStorage<Student[]>("students", []);

  const handleDeleteStudent = () => {
    const studentToDelete = students.filter((s) => s.id !== student.id);

    setStudents(studentToDelete);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
        Delete
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 w-full max-w-lg">
          <div className="bg-white rounded-md shadow-lg px-4 py-6 sm:flex">
            <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
              <svg
                className="w-5 h-5 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              <Dialog.Title className="text-lg font-medium text-gray-800">
                {" "}
                Pay attention!
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm leading-relaxed text-gray-500">
                {`You are about to delete a student, and this action will result in permanent data loss.`}
              </Dialog.Description>
              <div className="items-center gap-2 mt-3 text-sm sm:flex">
                <Dialog.Close asChild>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md ring-offset-2 ring-red-600 focus:ring-2"
                    type="button"
                    onClick={handleDeleteStudent}
                  >
                    Delete
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                    aria-label="Close"
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md border ring-offset-2 ring-sky-600 focus:ring-2"
                    type="button"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
