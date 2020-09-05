import React from 'react';
import classes from './footer.module.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {

    const onButtonClicked = () => {

        localStorage.setItem("header",props.header);
        localStorage.setItem("logo",props.logo);
        localStorage.setItem("size",props.size);

        console.log(props);
    }

    return (
        <div className={classes.main}>
            <Link to='/' style={{marginLeft: "20px"}}><button>Cancel</button></Link>
            <div style={{marginRight: "20px"}}><button onClick={onButtonClicked}>Save and Next</button></div>
        </div>
    );
}
export default Footer;