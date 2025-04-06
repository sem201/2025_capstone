import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const DefaultLayout = () =>{
    return<Wrapper>
        <Outlet/>
    </Wrapper>
}

const Wrapper = styled.section`
    min-height: calc(var(--vh, 1vh) * 100);
    padding-top: 70px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`