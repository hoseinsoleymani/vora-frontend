import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui";
import { Person24Regular } from "@fluentui/react-icons";

function Travelers() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-start gap-2 w-[200px] cursor-pointer">
            <Person24Regular className="text-gray-500" />
            <div>
              <p className="font-bold">Travelers</p>
              <p className="text-sm mt-1 text-gray-500">1 Adult</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-10 px-4 py-3 rounded-xl w-[302px]">
          <div className="flex items-center gap-2">
            <Person24Regular className="text-gray-500" />
            <p className="font-bold">Travelers</p>  
          </div>
          <hr  className="my-4 w-full"/>
          
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Travelers;
