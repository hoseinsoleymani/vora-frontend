import { Button } from "@/components/ui/button";
import { ArrowUpRight16Filled } from "@fluentui/react-icons";
function HeaderSection() {
  return (
    <div className="flex items-center justify-center gap-120">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Essential Travel Blogs</h2>
        <p className="mt-4">
         We’ve prepared a series of essential and helpful topics<br/>
          to boost your knowledge and readiness for travel.
 
        </p>
      </div>

      <div className="flex justify-end col-span-2">
        <Button size="sm">
          All Blogs
          <ArrowUpRight16Filled className="ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default HeaderSection;
