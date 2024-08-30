import { MdKeyboardArrowLeft } from "react-icons/md";

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: "16px",
        height: "101%",
        width: "3%",
        background: "linear-gradient(to right, black 0%, transparent 90%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20,
      }}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-transparent text-6xl hover:text-white h-full w-full hover:bg-black/50" />
    </div>
  );
}
