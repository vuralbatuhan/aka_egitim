import React from 'react';

interface HighlightTextProps {
  children: string | React.ReactNode;
  highlightWord?: string;
  className?: string;
}

export default function HighlightText({
  children,
  highlightWord = "öğretmen",
  className = ""
}: HighlightTextProps) {
  if (typeof children !== 'string') {
    return <>{children}</>;
  }

  const regex = new RegExp(`(${highlightWord})`, 'gi');
  const parts = children.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (part.toLowerCase() === highlightWord.toLowerCase()) {
          return (
            <span
              key={index}
              className={`font-semibold inline ${className}`}
              style={{ color: '#18504b', display: 'inline' }}
            >
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
}
