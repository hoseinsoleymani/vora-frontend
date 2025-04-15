import { Button } from "@/components/ui";

export type TabBarPage = "Login" | "Signup";

interface TabBarProps {
  activeTab: TabBarPage;
  setActiveTab: (tab: TabBarPage) => void;
}

function TabBar({ activeTab, setActiveTab }: TabBarProps) {
  return (
    <div className="flex items-center justify-center gap-10 w-full relative">
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-2"></div>
      <Button
        variant={"link"}
        className={`font-bold relative pb-2 mb-2 ${
          activeTab === "Login"
            ? "after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-blue-6 text-blue-6 transition-all duration-300"
            : ""
        }`}
        onClick={() => setActiveTab("Login")}
      >
        Sign In
      </Button>
      <Button
        variant={"link"}
        className={`font-bold relative pb-2 mb-2 ${
          activeTab === "Signup"
            ? "after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-blue-6 text-blue-6 transition-all duration-300"
            : ""
        }`}
        onClick={() => setActiveTab("Signup")}
      >
        Signup
      </Button>
    </div>
  );
}

export { TabBar };
