import React from "react";

const Image = ({image}) => {
let defaultTeamLogo = "./teamLogos/defaultLogo.svg";
    return (
        <div>
        {image ? (
            <img className="min-w-8 max-h-8" src={image} alt={`${image} Logo`} />
        ) : (
            <img className="min-w-8 max-h-8" src={defaultTeamLogo} alt="Placeholder Logo"/>
        )}
        </div>
    )
}

export default Image;