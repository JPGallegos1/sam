import type { Student } from "@/types";

import { useLocalStorage } from "usehooks-ts";

import Layout from "../layout";
import StudentsPageError from "../errors/students-error";
import StudentTable from "../organisms/student-table";

export default function StudentsTemplate() {
  const [students, setStudents] = useLocalStorage<Student[]>("students", []);

  // return <Layout>{students.length < 1 ? <StudentsPageError /> : <StudentTable />}</Layout>;

  return (
    <Layout>
      <StudentTable />
    </Layout>
  );
}
