import React from 'react';

const StyledText = (props:any) => {

    return (
        <h3 className={"styledText"}>
            {props.children}
        </h3>
    );
};

export default StyledText;