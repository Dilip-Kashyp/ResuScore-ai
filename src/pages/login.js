import { DashboardLayout } from "@/components";
import { LoginFormContainer } from "@/containers";

function page() {
  return <LoginFormContainer />;
}

page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default page;
