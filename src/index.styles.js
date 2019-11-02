import styled, { css, createGlobalStyle } from "styled-components"
import background from './images/background.jpg';
import wave from './images/wave.png'
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Averia+Libre&display=swap');
@import url('https://fonts.googleapis.com/css?family=Averia+Libre|Exo&display=swap');
* {
  box-sizing: border-box;
}
html,
body {
  width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: 'Averia Libre', cursive !important;
  font-style: normal;

  }
  body {
    cursor: url(${wave}), pointer;
  background-image: url(${background});
  ${'' /* background-repeat: round; */}
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Exo', sans-serif !important; 
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: inherit;
    }
  a {
    text-decoration: underline;
    color: black;
  }
  h1 {
  margin-bottom: 1.45rem;
  font-size: 2.5rem;
  line-height: 1.1;
}
h2 {
  margin-bottom: 1.45rem;
  font-size: 1.62671rem;
  line-height: 1.1;
}
h3 {
  margin-bottom: 1.45rem;
  font-size: 1.38316rem;
  line-height: 1.1;
}
h4 {
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.1;
}
h5 {
  margin-bottom: 1.45rem;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-bottom: 1.45rem;
  font-size: 0.78405rem;
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p{
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0.5rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-size: 1.15em;
}
li {
  list-style-type: lower-roman;
}
`

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const hideDisplayForTablet = css`
  ${"" /* display: ${props => (props.hideInMobile ? "inherit" : "inherit")}; */}
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
  }
`

export const showDisplayForTablet = css`
  display: ${props => (props.showInMobile ? "none" : "inherit")};
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`

export const mobile = props => {
  return css`
    @media (max-width: ${size.mobileL}) {
      ${props};
    }
  `
}

export const tablet = props => {
  return `
    @media (max-width: ${size.tablet}) {
      ${props};
    }
  `
}

export const Color = {
  yellow: "#EEEC7A",
  red: "#D9515C",
}
