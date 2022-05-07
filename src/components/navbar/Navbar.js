import React, {useState} from 'react'
import './navbar.css'
function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

  return (
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
        <input type='text' placeholder='Search...'/>
        <button>Search</button>
    </div>
    </div>
  )
}


export default Navbar


