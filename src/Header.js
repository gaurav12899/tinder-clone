import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header">
            <IconButton>

        <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <img className="header__logo"
            src="https://theme.zdassets.com/theme_assets/302164/e2bd933724b7744350510577cef454a487f069ce.png"
            alt="">
            </img>
            <IconButton>

<ForumIcon fontSize="large" className="header__icon"/>
    </IconButton>
        </div>
    )
}

export default Header
