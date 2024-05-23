import React from "react";
import "./global.css";

export const metadata = {
  title: "StarGPT",
  description: "The place to go for all your Star Wars questions",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
