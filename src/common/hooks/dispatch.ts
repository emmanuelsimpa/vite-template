import { AppDispatch } from "@/lib/redux/Store";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch =
  useDispatch as () => AppDispatch;
