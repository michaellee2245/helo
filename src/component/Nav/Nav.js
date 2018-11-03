import React from 'react';

function Nav(props) {
    if (props.location.pathname !== '/') {
        return (
            <div>
                Nav
            </div>
        )
    }
    return null
}

export default Nav;