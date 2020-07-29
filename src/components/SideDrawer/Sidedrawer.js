import React from 'react'
import './Sidedrawer.css'
const sideDarwer = props =>{
    let drawerclass = 'side-drawer'
    if(props.show){
        drawerclass='side-drawer open'
    }
    return(
       
    <nav className={drawerclass}>
    <ul>
    <li><a href="/">product</a></li>
    <li><a href="/">users</a></li>
    </ul>
    </nav>
    )

}
export default sideDarwer