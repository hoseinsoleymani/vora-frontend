import { Button } from "@/components/ui/button";

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
          <span className="i-fluent:arrow-up-right-16-filled text-xl ml-2"></span>
        </Button>
      </div>
    </div>
  );
}

export default HeaderSection;
