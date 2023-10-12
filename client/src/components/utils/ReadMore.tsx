import React, { useState } from "react";

const ReadMore: React.FC<{ text: string; maxLength: number }> = ({
  text,
  maxLength,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const truncatedText = expanded ? text : text.slice(0, maxLength);

  return (
    <div>
      {truncatedText}...
      {text.length > maxLength && (
        <span
          style={{ color: "mediumslateblue", cursor: "pointer" }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? " less" : " more"}
        </span>
      )}
    </div>
  );
};

export default ReadMore;
