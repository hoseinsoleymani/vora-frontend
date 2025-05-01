const ProgressLine = () => {
  return (
    <div className="flex items-center w-[400px]">
      <div className="relative flex">
        <div className="absolute translate-x-1/2 top-1/2 -translate-y-1/2 h-2 w-2 bg-red-500 rounded-full"></div>
        <div className="w-4 h-4 bg-red-300 rounded-full"></div>
      </div>

      <div className="w-full h-1 bg-red-300 rounded-full"></div>
      <div className="relative flex">
        <div className="absolute translate-x-1/2 top-1/2 -translate-y-1/2 h-2 w-2 bg-red-500 rounded-full"></div>
        <div className="w-4 h-4 bg-red-300"></div>
      </div>
    </div>
  );
};

export { ProgressLine };
