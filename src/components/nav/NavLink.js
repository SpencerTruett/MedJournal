import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    var isActive = props.location.pathname === props.to;
    var className = isActive ? 'active' : '';

        return(
            <Link className={`${className} navbar__link`} history={props.history} to={props.to}>
                {props.children}
            </Link>
        );
}