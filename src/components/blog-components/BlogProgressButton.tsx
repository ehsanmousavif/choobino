import React, { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

const BlogProgressButton: React.FC<PropType> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <button type="button" {...restProps} className={className}>
      {children}
    </button>
  );
};

export default BlogProgressButton;
