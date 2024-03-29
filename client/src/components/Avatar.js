import React from "react";
import { useSelector } from "react-redux";

export const Avatar = ({ src, size }) => {
  const { theme } = useSelector((state) => state);
  return (
    <img
      src={src}
      alt="avatar"
      className={size}
      size={size}
      style={{
        filter: `${theme ? "invert(1)" : "invert(0)"}`,
      }}
    />
  );
};
