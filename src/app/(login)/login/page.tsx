"use client";
import React, { useState } from "react";
import Image from "next/image";
import LoginImage from "../../../../public/img/a5719b147a8fe9cf4a90f9d842083703-min.jpg";
import Logo from "../../../../public/img/Logo.png";
import { TabBar, TabBarPage } from "@/app/(login)/components/tabBar";
import { LoginForm } from "../components/loginForm";
import { SignupForm } from "../components/signupForm";

function LoginPage() {
  const [activeTab, setActiveTab] = useState<TabBarPage>("Login");
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50">
      <div className="flex items-center justify-center gap-8 w-full max-w-7xl px-4">
        <div className="w-1/2 h-fit rounded-[32px] overflow-hidden">
          <Image
            src={LoginImage}
            alt="login"
            width={519}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-6 justify-around items-center">
          <Image src={Logo} alt="logo" />
          <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "Login" && <LoginForm />}
          {activeTab === "Signup" && <SignupForm />}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
