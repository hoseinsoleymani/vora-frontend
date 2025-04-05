import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  Button,
  DropdownMenuItem,
} from "@/components/ui";
import { DoorRegular, ArrowUndo16Regular } from "@fluentui/react-icons";
import Counter from "../share/travelers/counter";


interface RoomsProps {
  rooms: number;
  setRooms: (rooms: number) => void;
}

function Rooms({ rooms, setRooms }: RoomsProps) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-start gap-2 W-[200px]">
            <DoorRegular className="text-gray-500" fontSize={24} />
            <div>
              <p className="font-bold">Rooms</p>
              <p className="text-sm mt-1 text-gray-500">
                {rooms < 2 ? "How many rooms" : `${rooms} rooms`}
              </p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-8 px-4  rounded-xl w-[302px]">
          <DropdownMenuItem>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-2">
                  <DoorRegular className="text-gray-500" fontSize={24} />
                  <p className="font-bold">Rooms</p>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    rooms > 1
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 max-h-0"
                  }`}
                >
                  {rooms > 1 && (
                    <Button
                      size={"sm"}
                      variant={"outline"}
                      className="text-sx rounded-full"
                      onClick={() => {
                        setRooms(1);
                      }}
                    >
                      <ArrowUndo16Regular /> Reset
                    </Button>
                  )}
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  rooms > 1
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 max-h-0"
                }`}
              >
                {rooms > 1 && (
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold">Requested :</p>
                    <p className="text-sm">{rooms} rooms</p>
                  </div>
                )}
              </div>
            </div>
          </DropdownMenuItem>
          <hr className="w-full border-gray-300" />
          <div className="my-4">
            <Counter
              lable="Rooms"
              subLable="How many rooms"
              icon={<DoorRegular className="text-gray-500" fontSize={24} />}
              count={rooms}
              onIncrement={() => setRooms(rooms + 1)}
              onDecrement={() => setRooms(rooms - 1)}
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Rooms;
