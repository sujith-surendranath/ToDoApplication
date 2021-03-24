import React from "react";
import "./Title.css";

export const Title: React.FC = ({ children }) => {
  return <p className="title">{children}</p>;
};
