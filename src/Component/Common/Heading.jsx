import React from "react";

const Heading = {
  h1: "text-6xl font-font1",
  h2: "text-6xl font-font1",
  h3: "text-5xl font-font1",
  h4: "text-3xl font-font1",
  h5: "text-2xl font-font1",
  h6: "text-base font-font1",
};

export default function Headings({ type = "h1", className = "", children }) {
  const Tag = type;

  return (
    <Tag className={`${Heading[type] || ""} ${className}`}>
      {children}
    </Tag>
  );
}
