import React, {useState} from 'react'
import './navbar.css'
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themeToggle/Theme';
import CoinApp from './Coinapp';


const StyledApp = styled.div` 
color: ${(props) => props.theme.fontColor}
`;


function Navbar() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

    const [showLinks, setShowLinks] = useState(false);

  return (
    
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
      <navbar>
    <div className='Navbar'> 
    <div className='leftSide'>
        <div className='links' id={showLinks ? "hidden" : ""}>
        <a href='/home'><img src='/images/logoSmall.png' alt='' /> </a>
        <a href='/currencies'>Cryptocurrencies</a>
        <a href='exchanges'>Exchanges</a>
        <a href='https://opensea.io/'>NFT</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>Menu</button>
    </div> 
    <div className='rightSide'>
        <a href='/porfolio'>Portfolio</a>
        <a href='/login'>Login</a>
        <a href='signup'>Sign up</a>
        <input type='text' placeholder='Search...'/>
        <button className='search-btn'>Search</button>
        <button className='connect-wallet-btn' onClick={() => themeToggler()}>Theme Color</button>
    </div>
    </div>
    </navbar>
    <CoinApp/>
    </StyledApp>
    </ThemeProvider>
    
  )
}


export default Navbar


