"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@/components/ui";
import { API_BASE_URL } from "@/lib";
import { useState } from "react";
interface DeletePassportInfoProps {
  id: number;
  token: string;
  getData: () => void;
}

function DeletePassportInfo({
  id,
  token,
  getData,
}: DeletePassportInfoProps) {
  const [open, setOpen] = useState(false);
  const DeletePassportInfo = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/panel/passport-info/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      
      if (response.ok) {
        setOpen(false);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size={"icon"} className="w-8 h-8 p-2">
            <span className="i-fluent:delete-20-regular"></span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deleting Passport Info</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to Delete information of this passenger?
          </DialogDescription>
          <DialogFooter>
            <div className="flex gap-2 w-full">
              <Button
                variant={"outline"}
                size={"sm"}
                className="w-1/5"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant={"destructive"}
                size={"sm"}
                className="w-4/5"
                onClick={DeletePassportInfo}
              >
                Yes, Delete Info!
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { DeletePassportInfo };
