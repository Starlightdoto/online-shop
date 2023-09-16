import React, {FC} from 'react';

interface AvatarImage {
    image: any,
}
const AvatarImage:FC<AvatarImage> = ({image}) => {
    return (
        <img className={"avatarImage"} src={image} />
    );
};

export default AvatarImage;