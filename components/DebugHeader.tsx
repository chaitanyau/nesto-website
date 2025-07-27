import React from "react";

const DebugHeader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-red-600 text-white text-center py-6 text-3xl font-bold">
      ✅ HEADER DEBUG – You should see this!
    </div>
  );
};

export default DebugHeader;
