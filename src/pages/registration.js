import { DashboardLayout } from "@/components";
import { RegistrationFormContainer } from "@/containers";

function page() {
  return <RegistrationFormContainer />;
}

page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default page;
