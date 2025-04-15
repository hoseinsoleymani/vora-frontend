"use client";
import React, { useState } from "react";
import Image from "next/image";
import LoginImage from "../../../../public/img/a5719b147a8fe9cf4a90f9d842083703-min.jpg";
import Logo from "../../../../public/img/Logo.png";
import { TabBar, TabBarPage, LoginSection, SignupSection } from "@/app/(login)";
import clsx from "clsx";
import { WizardProvider } from "@/hooks";

function LoginPage() {
  const [activeTab, setActiveTab] = useState<TabBarPage>("Login");
  const [showTabBar, setShowTabBar] = useState(true);
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50">
      <div className="flex items-center justify-center gap-34 w-full max-w-7xl px-4">
        <div className="w-1/2 h-fit rounded-[32px] overflow-hidden">
          <Image
            src={LoginImage}
            alt="login"
            width={519}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 min-h-[600px] flex flex-col gap-4 items-center justify-start pt-10">
          <Image src={Logo} alt="logo" className="mb-4" />
          <div className="w-full">
            {showTabBar && (
              <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            )}
          </div>
          <div className="relative w-full flex-grow">
            <div
              className={clsx(
                "absolute inset-0 transition-opacity duration-300 ease-in-out",
                {
                  "opacity-100": activeTab === "Login",
                  "opacity-0 pointer-events-none": activeTab !== "Login",
                }
              )}
            >
              <LoginSection />
            </div>
            <div
              className={clsx(
                "absolute inset-0 transition-opacity duration-300 ease-in-out",
                {
                  "opacity-100": activeTab === "Signup",
                  "opacity-0 pointer-events-none": activeTab !== "Signup",
                }
              )}
            >
              <WizardProvider totalSteps={3}>
                <SignupSection setShowTabBar={setShowTabBar} />
              </WizardProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
