import React, {FC} from 'react';

interface FooterProps {

}

const Footer:FC<FooterProps> = (props) => {
    return (
        <footer className={"footer"}>
            <h3>Copyright 2023</h3>
            <p>Contact us: <a style={{textDecoration:"none", color:"white" }} href="">test@test.com</a></p>
        </footer>
    );
};

export default Footer;