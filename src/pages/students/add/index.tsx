import Layout from "@/components/layout";
import NewStudentForm from "@/components/molecules/forms/new-student-form";

export default function NewStudent() {
  return (
    <Layout>
      <section className="py-24 my-24 px-4 mx-4 md:px-16 md:mx-16">
        <NewStudentForm />
      </section>
    </Layout>
  );
}
