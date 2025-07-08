import { DashboardLayout } from "@/components";
import { ForgotPasswordContainer } from "@/containers";

function page() {
  return <ForgotPasswordContainer />;
}

page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default page;
