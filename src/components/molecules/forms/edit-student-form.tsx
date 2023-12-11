import type { Student } from "@/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalStorage } from "usehooks-ts";
import { NextRouter, useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { StudentSchema, studentSchema } from "@/schema";
import { capitalizeFirstLetter } from "@/utils";

export default function EditStudentForm() {
  const [students, setStudents] = useLocalStorage<Student[]>("students", []);
  const router: NextRouter = useRouter();
  const searchParams = useSearchParams();
  const studentId = searchParams.get("student");
  const findStudentById = studentId ? students.find((student) => student.id === +studentId) : null;

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<StudentSchema & { id: number }>({
    resolver: zodResolver(studentSchema),
    mode: "all",
    defaultValues: {
      age: 0,
      email: "",
      id: 0,
      name: "",
    },
  });

  useEffect(() => {
    if (findStudentById) {
      const { age, email, id, name } = findStudentById;

      reset({
        age,
        email,
        id,
        name,
      });
    } else {
      router.push("/");
    }
  }, [findStudentById, reset, router]);

  const onSubmit = (data: StudentSchema & { id: number }) => {
    if (findStudentById) {
      const updatedStudents = students.map((student) =>
        student.id === findStudentById.id ? { ...student, ...data } : student,
      );

      const studentIndex = updatedStudents.findIndex(
        (student) => student.id === findStudentById.id,
      );

      if (studentIndex !== -1) {
        updatedStudents[studentIndex] = { ...updatedStudents[studentIndex], ...data };
      } else {
        updatedStudents.push({ ...findStudentById, ...data });
      }

      setStudents(updatedStudents);
      router.push("/students");
    }
  };

  return (
    <form className="w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-gray-800 text-3xl font-semibold sm:text-5xl mb-16">
        {findStudentById
          ? `You are currently editing: ${capitalizeFirstLetter(findStudentById.name)}`
          : null}
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-300 rounded-md p-2 w-full"
          id="name"
          type="text"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-300 rounded-md p-2 w-full"
          id="email"
          {...register("email")}
          type="email"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
          Age
        </label>
        <input
          className="border border-gray-300 rounded-md p-2 w-full"
          id="age"
          {...register("age")}
          maxLength={2}
          type="text"
        />
        {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
      </div>
      <button
        className={`${
          !isValid ? "cursor-not-allowed" : "cursor-pointer"
        } disabled:bg-sky-900 bg-sky-800 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        disabled={!isValid}
        type="submit"
      >
        Add Student
      </button>
    </form>
  );
}
