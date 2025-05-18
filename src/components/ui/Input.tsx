import React from "react";

export default function Input({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="p-[8px_14px] !text-[13px] border rounded-c-medium bg-white border-gray-200 w-full h-[35px] focus:outline-none"
      {...props}
    />
  );
}
