import React from "react";

interface StepContainerProps {
  children: React.ReactNode;
  title: string;
}

function StepContainer({ children, title }: StepContainerProps) {
  return (
    <div className="flex flex-col gap-2 w-full px-8 py-4 min-h-[150px]">
      <h2 className="font-bold mt-2">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default StepContainer;
