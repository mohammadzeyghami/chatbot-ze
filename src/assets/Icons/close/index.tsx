import React from "react";

const IconClose = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "#000",
  xmlns = "http://www.w3.org/2000/svg",
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
        fill={fill}
      />
    </svg>
  );
};

export { IconClose };