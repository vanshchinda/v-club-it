import React from "react";

export const CalendarBlank = ({ svgColor }) => {
  return (
    <>
      <g>
        <path
          d="M17.75 3H2.75C2.33579 3 2 3.33579 2 3.75V18.75C2 19.1642 2.33579 19.5 2.75 19.5H17.75C18.1642 19.5 18.5 19.1642 18.5 18.75V3.75C18.5 3.33579 18.1642 3 17.75 3Z"
          stroke={svgColor}
          fill="none"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.75 1.5V4.5"
          stroke={svgColor}
          fill="none"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.75 1.5V4.5"
          stroke={svgColor}
          fill="none"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 7.5H18.5"
          stroke={svgColor}
          fill="none"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </>
  );
};
