/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function  DefaultLayout(){
    return(
        <LayoutContainer>
            <Header/>
            <Outlet/>
        </LayoutContainer>
    )
}