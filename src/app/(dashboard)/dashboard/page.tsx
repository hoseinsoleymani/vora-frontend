import { cookies } from "next/headers";
import { LayoutPanel } from "../components/layoutpanel";
import { Footer } from "@/components/ui";

async function DashboardPage() {
  const token = (await cookies()).get("access")?.value;
  return (
    <div>
      <LayoutPanel token={token ?? ""} />
      <Footer />
    </div>
  );
}

export default DashboardPage;
