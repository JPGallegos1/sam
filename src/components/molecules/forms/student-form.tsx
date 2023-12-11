import type { Student } from "@/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalStorage } from "usehooks-ts";
import router from "next/router";

import { StudentSchema, studentSchema } from "@/schema";

export default function StudentForm() {
  const [students, setStudents] = useLocalStorage<Student[]>("students", []);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<StudentSchema & { id: number }>({
    resolver: zodResolver(studentSchema),
    mode: "all",
  });

  const onSubmit = (data: StudentSchema & { id: number }) => {
    const id = Math.max(...students.map((student) => student.id), 0);

    const newStudent: StudentSchema & { id: number } = {
      id: id + 1,
      age: data.age,
      email: data.email,
      name: data.name,
    };

    setStudents([...students, newStudent]);
    router.push("/students");
  };

  return (
    <form className="w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-gray-800 text-4xl font-semibold sm:text-5xl mb-16">
        {students.length < 1 ? `Add your first student!` : "Add student!"}
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
