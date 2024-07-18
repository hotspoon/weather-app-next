/** @format */

import { cn } from "@/utils/cn"
import React from "react"

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      style={{
        background: "linear-gradient(to right, #00a2e8, blue)",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        ...props.style
      }}
      className={cn("w-full rounded-xl flex py-4 shadow-sm text-white", props.className)}
    />
  )
}
