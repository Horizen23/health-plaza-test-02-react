import { useSelector } from "react-redux";
import { RootState } from "../store";
import { selectIsAuthenticated, selectUser } from "./AuthSlice";

export const useSelectUser = () => {
         return useSelector((state: RootState) => selectUser(state));
};
       
export const useSelectIsAuthenticated = () => {
         return useSelector((state: RootState) => selectIsAuthenticated(state));
};
       