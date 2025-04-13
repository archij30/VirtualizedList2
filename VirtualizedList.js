import { useCallback, useState } from "react";

const OFFSET = 5;

const VirtualizedList = ({ height, width, itemHeight, items }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(Math.floor(height / itemHeight));

  const handleScroll = useCallback(
    (e) => {
      const scrollTop = e.target.scrollTop;
      setStart(Math.floor(Math.max(0, scrollTop / itemHeight - OFFSET)));
      setEnd(
        Math.floor(
          Math.min(items.length, (scrollTop + height) / itemHeight + OFFSET)
        )
      );
    },
    [setStart, setEnd]
  );
  return (
    <div>
      <div
        className="list-container"
        style={{
          height,
          width,
          backgroundColor: "yellow",
          overflow: "auto",
        }}
        onScroll={handleScroll}
      >
        <div
          className="scroll-container"
          style={{
            height: items.length * itemHeight,
            // overflow: "auto",
            position: "relative",
          }}
        >
          {items.slice(start, end + 1).map((item, index) => {
            return (
              <div
                key={item}
                className="list-item"
                style={{
                  height: itemHeight,
                  top: (start + index) * itemHeight,
                  position: "absolute",
                  width: "100%",
                }}
              >
                Item&nbsp;{item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;
