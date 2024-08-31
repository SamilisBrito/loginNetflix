import { useContext } from "react";
import { ModalMovieContext } from "../context/ModalMovieContext";

export function useModalMovie(){
    return useContext(ModalMovieContext)
}