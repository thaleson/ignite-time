import { HeaderContainer } from "./styles";
import log_ig from "../../assets/logo_ig.svg"
import { Timer,Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
/* eslint-disable react/react-in-jsx-scope */
export function Header(){
    return(
        <HeaderContainer>
            <img src={log_ig} alt="" />
            <nav>
                <NavLink to="/" title="time">
                <Timer size={24}/>
                </NavLink>

                <NavLink to="/history" title="Histórico">
                <Scroll size={24}/>
                </NavLink>

            </nav>
        </HeaderContainer>
    )
}