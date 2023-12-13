import React from "react";

const sizeClasses = {
  txtSairaRomanMedium12: "font-medium font-saira",
  txtSairaRomanMedium16: "font-medium font-saira",
  txtSairaRomanMedium12WhiteA700: "font-medium font-saira",
  txtSairaRomanMedium16LightblueA20001: "font-medium font-saira",
  txtSairaRomanMedium20: "font-medium font-saira",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
