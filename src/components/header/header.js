import React from 'react';
import styled from "styled-components"

const HeaderWrapper = styled.header`
    padding: 1em;
    text-align: center;
`
const Header = props => {
    return (
        <HeaderWrapper>
            <h1> anja ngozi </h1>
        </HeaderWrapper>
    )
}

export default Header;