import './header.styles.scss'

import {Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/crwns.svg'

//This special syntax allow react to know that it is a logo


// import { ReactComponent as Logo }
// This is a new special syntax when importing SVG in React. 
// The ReactComponent import name is special and tells Create React App 
// that you want a React component that renders an SVG, rather than its filename. 
// You can read more about it here, but keep in mind that this is a 
// React library special syntax:

// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files


const Header = () => (
    <div className = 'header'>
        <Link className='logo-container' to='/'>
            <Logo className = 'logo'/>
        </Link>
   
        <div className = 'options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link className='option' to='/signin'>SIGN IN</Link>
        </div>
    </div>
)

export default Header;