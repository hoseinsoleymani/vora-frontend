import { Button } from "@/components/ui/button";
import { ArrowUpRight16Filled } from "@fluentui/react-icons";
function HeaderSection() {
  return (
    <div className="grid grid-cols-3 items-center">
      <div className="col-span-1">
        <h2 className="text-2xl font-bold">Travel Blogs</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna 
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
