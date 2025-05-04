import { cookies } from "next/headers";
import { LayoutPanel } from "../components/layoutpanel";

async function DashboardPage() {
  const token = (await cookies()).get("access")?.value;
  return (
    <div>
      <LayoutPanel token={token ?? ""} />
    </div>
  );
}

export default DashboardPage;
