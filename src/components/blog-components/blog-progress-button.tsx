import React, { ComponentPropsWithRef } from "react";

type BlogProgressButtonProp = ComponentPropsWithRef<"button">;

export default function BlogProgressButton(props: BlogProgressButtonProp) {
  const { children, className, ...restProps } = props;

  return (
    <button type="button" {...restProps} className={className}>
      {children}
    </button>
  );
}
