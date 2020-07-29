import React from 'react'
import './ToggleButton.css'
const drawerToggle = props =>(
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-buttton-line"/>
        <div className="toggle-buttton-line"/>
        <div className="toggle-buttton-line"/>
        </button>
)
export default drawerToggle