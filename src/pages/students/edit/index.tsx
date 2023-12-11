import Layout from "@/components/layout";
import EditStudentForm from "@/components/molecules/forms/edit-student-form";

export default function EditStudent() {
  return (
    <Layout>
      <section className="py-24 my-24 px-4 mx-4 md:px-16 md:mx-16">
        <EditStudentForm />
      </section>
    </Layout>
  );
}
