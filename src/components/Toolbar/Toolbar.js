import React from 'react'
import './Toolbar.css'
import ToggleButton from '../SideDrawer/DrawerToggleButton'
const toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div className="toggle-toolbar-button">
                <ToggleButton click={props.drawerClick }/>
            </div>
            <div className="toolbar_logo"><a href='/'>The Logo</a></div>
            <div className="spacer"/>
            <div className="toolbar_item">
                <ul>
                    <li><a href="/">product</a></li>
                    <li><a href="/">users</a></li>
                </ul>
                </div>
            </nav>
        </header>
)

export default toolbar