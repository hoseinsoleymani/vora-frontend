"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Logo from "../../../public/img/Vora Logo.png"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CaretDownFilled, CalendarClock24Regular, Money24Regular, Calculator24Regular, Airplane24Regular, VehicleSubway24Regular, VehicleBus24Regular } from "@fluentui/react-icons";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="py-4 px-8 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="Vora Logo" className="h-10 w-[110px]" />

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

          <DropdownMenu>
            <DropdownMenuTrigger className="hover:border-b hover:border-b-black flex items-center gap-1">
              Ticket
              <CaretDownFilled className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-2 pt-2">
              <DropdownMenuItem className="text-lg py-4 px-4 flex items-center gap-3 border rounded-lg mb-2 hover:border-black hover:bg-gray-100 transition-all">
                <Airplane24Regular className="w-7 h-7" />
                Airplane
              </DropdownMenuItem>
              <DropdownMenuItem className="text-lg py-4 px-4 flex items-center gap-3 border rounded-lg mb-2 hover:border-black hover:bg-gray-100 transition-all">
                <VehicleSubway24Regular className="w-7 h-7" />
                Train
              </DropdownMenuItem>
              <DropdownMenuItem className="text-lg py-4 px-4 flex items-center gap-3 border rounded-lg mb-2 hover:border-black hover:bg-gray-100 transition-all">
                <VehicleBus24Regular className="w-7 h-7" />
                Bus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="hover:border-b hover:border-b-black flex items-center gap-1">
              Smart Trip
              <CaretDownFilled className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-2 pt-2">

              <DropdownMenuItem className="text-lg py-4 px-4 flex items-center gap-3 border rounded-lg mb-2 hover:border-black hover:bg-gray-100 transition-all">
                <CalendarClock24Regular className="w-7 h-7" />
                Trip Planner
              </DropdownMenuItem>
              <DropdownMenuItem className="text-lg py-4 px-4 flex items-center gap-3 border rounded-lg mb-2 hover:border-black hover:bg-gray-100 transition-all">
                <Money24Regular className="w-7 h-7" />
                Travel On Budget
              </DropdownMenuItem>
              <DropdownMenuItem className="text-lg py-4 px-4 flex items-center gap-3 border rounded-lg mb-2 hover:border-black hover:bg-gray-100 transition-all">
                <Calculator24Regular className="w-7 h-7" />
                Price Calculator
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="hover:border-b hover:border-b-black flex items-center gap-1">
              About Us
              <CaretDownFilled className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-2 pt-2">

              <DropdownMenuItem className="text-lg py-4 px-4 border rounded-lg mb-2 hover:border-black hover:bg-gray-100 transition-all">Contact Us</DropdownMenuItem>
              <DropdownMenuItem className="text-lg py-4 px-4 border rounded-lg mb-2 hover:border-black hover:bg-gray-100 transition-all">About Us</DropdownMenuItem>
              <DropdownMenuItem className="text-lg py-4 px-4 border rounded-lg mb-2 hover:border-black hover:bg-gray-100 transition-all">Blogs</DropdownMenuItem>
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
