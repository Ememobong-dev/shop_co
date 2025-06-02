import React from "react";

export const Drawer = ({
  open,
  onCancel,
  children
}: {
  open: boolean;
  onCancel?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      onClick={onCancel}
      className={`${
        open ? "visible fixed z-50 bg-black/10 inset-0 lg:hidden" : "hidden"
      }`}
    >
      <div
        className="absolute bottom-0 w-full h-[90%] rounded-t-3xl bg-white px-4 py-8 border border-black/10
    divide-y divide-black/10 overflow-auto "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
