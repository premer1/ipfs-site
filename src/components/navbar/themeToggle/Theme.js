import { createGlobalStyle } from "styled-components"


export const lightTheme = {
    body: `
    background: #2193b0;
background: -webkit-linear-gradient(left, #2193b0, #6dd5ed);
background: -moz-linear-gradient(left, #2193b0, #6dd5ed);
background: -ms-linear-gradient(left, #2193b0, #6dd5ed);
background: -o-linear-gradient(left, #2193b0, #6dd5ed);
background: linear-gradient(to right, #2193b0, #6dd5ed);

    `,
    fontColor: '#000',    
}

export const darkTheme = {
    body: `
    background: rgb(69,69,69);
background: linear-gradient(90deg, rgba(69,69,69,1) 100%, rgba(21,60,64,1) 100%, rgba(21,60,64,1) 100%, rgba(31,99,106,1) 100%);
    `,
    fontColor: '#fff',
    
    
}


export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${props => props.theme.body}
    }

`