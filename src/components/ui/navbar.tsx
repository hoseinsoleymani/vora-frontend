"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="py-4 px-8 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={"logo.svg"} alt="Vora Logo" className="h-8" />

        <div className="flex space-x-8 pl-10">
          <Link
            href="/"
            className=" hover:border-b hover:border-b-black focus:border-b"
          >
            Home
          </Link>

          <Link
            href="/hotels"
            className=" hover:border-b hover:border-b-black focus:border-b"
          >
            Stay
          </Link>

          <Link
            href="/tickets"
            className=" hover:border-b hover:border-b-black focus:border-b"
          >
          Ticket
          </Link>




          <DropdownMenu>
            <DropdownMenuTrigger className="hover:border-b hover:border-b-black">
              Smart Trip
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Smart Trip</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="hover:border-b hover:border-b-black">
              About Us
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>About Us</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Button variant="outline" size={"sm"} onClick={() => router.push("/login")}>
        Sign in/sign up
      </Button>
    </div>
  );
};

export { Navbar };
