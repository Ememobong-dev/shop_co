import React, { useEffect } from "react";

export const Drawer = ({
  open,
  onCancel,
  children,
  width,
  height,
  drawerPosition = "left",
  className,
}: {
  open: boolean;
  onCancel?: () => void;
  children: React.ReactNode;
  width?: number; //in percentage
  height?: number; //in percentage
  drawerPosition?: "top" | "bottom" | "left" | "right";
  className?: string
}) => {
    useEffect(() => {
      if (open) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }, [open]);
  return (
    <div
      onClick={onCancel}
      className={`${
        open
          ? "ease-in transition-all visible fixed z-50 bg-black/10 inset-0 lg:hidden"
          : "hidden"
      }`}
    >
      <div
        className={` ${width ? `!w-[${width}%]` : "!w-full"} ${height ? `h-[${height}%]` : "!h-screen"}  absolute ${drawerPosition && `${drawerPosition}-0` } ${drawerPosition ==="bottom" ? "rounded-t-3xl" : "rounded-none" }  bg-white px-4 py-2 border border-black/10 overflow-auto ${className} `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
