import React from 'react';
import { Link } from 'react-router-dom';


// Chenges a class in the nav bar to darken the section; not currently being used
export default (props) => {
    var isActive = props.location.pathname === props.to;
    var className = isActive ? 'active' : '';

        return(
            <Link className={`${className} navbar__link`} history={props.history} to={props.to}>
                {props.children}
            </Link>
        );
}