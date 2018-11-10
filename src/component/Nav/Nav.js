import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './nav.css';


function Nav(props) {
    console.log(props)

    if (props.location.pathname !== '/') {
        return (
            <div className="main-nav-container">
                <div className="nav-top-items">
                    <Link className="home" to='/dashboard'></Link>
                    <Link className="new-post" to='/post'></Link>
                </div>
                <div className="nav-bottom-items">
                    <Link className ="logout" to='/'></Link>
                </div>
            </div>

        )
    }
    return null
}


const mapStateToProps = (state) => {
    return {
        username: state.username,
        profilePic: state.profilePic
    }
}

export default connect(mapStateToProps)(Nav);