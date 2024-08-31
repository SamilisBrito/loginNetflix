import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
  return (
    <div className="flex items-center justify-center h-full w-full p-5">
      <AiOutlineLoading3Quarters className="text-3xl text-gray-800 animate-spin" />
    </div>
  );
}
