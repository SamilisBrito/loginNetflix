import { MdKeyboardArrowRight } from "react-icons/md";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{
        ...style,
        marginRight: "20px",
        height: "101%",
        width: "3%",
        background: "linear-gradient(to left, black 0%, transparent 90%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-transparent text-6xl hover:text-white h-full w-full hover:bg-black/50" />
    </div>
  );
}
