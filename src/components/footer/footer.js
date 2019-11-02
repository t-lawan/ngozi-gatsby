import React from 'react';
import styled from "styled-components"

const FooterWrapper = styled.footer`
    padding: 1em;
    position: fixed;
    text-align: center;
    bottom: 0;
    width: 100vw;
`
const Footer = props => {
    return (
        <FooterWrapper>
            <h2>Footer</h2>
        </FooterWrapper>
    )
}

export default Footer;