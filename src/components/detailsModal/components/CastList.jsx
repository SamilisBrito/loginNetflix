import React, { useState } from "react";

export function ItemList({ items, title }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const itemsToShow = expanded ? items : items.slice(0, 4);
  if (items.length <= 0) return null;
  return (
    <div>
      <h3 className="inline text-neutral-400">{title}: </h3>
      {itemsToShow.map((item, index) => (
        <React.Fragment key={item.id}>
          <p className="inline">{item.name}</p>
          {index < itemsToShow.length - 1 && <span>, </span>}
        </React.Fragment>
      ))}
      {items.length > 4 && (
        <>
          <span>, </span>
          <button className="italic hover:underline" onClick={toggleExpand}>
            {expanded ? "menos" : `mais (${items.length - 4})`}
          </button>
        </>
      )}
    </div>
  );
}
