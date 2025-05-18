import React from "react";

export default function Input({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="p-[5px_10px] text-lg border rounded-c-medium border-c-dark-blue w-full h-[30px]"
      {...props}
    />
  );
}
