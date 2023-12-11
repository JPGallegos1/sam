import Layout from "@/components/layout";
import StudentForm from "@/components/molecules/forms/student-form";

export default function NewStudent() {
  return (
    <Layout>
      <section className="py-24 my-24 px-4 mx-4 md:px-16 md:mx-16">
        <StudentForm />
      </section>
    </Layout>
  );
}
