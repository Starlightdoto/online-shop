import React, {FC} from 'react';

interface FooterProps {

}

const Footer:FC<FooterProps> = (props) => {
    return (
        <footer className={"footer"}>
            <h3>Copyright 2023</h3>
        </footer>
    );
};

export default Footer;