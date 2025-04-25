import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui";

function AddPassport() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"link"} className="text-gray-500 underline">
            Select from passenger list
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Passport</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              Select the info you want as the passenger you are reserving for
              from the list below.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { AddPassport };
