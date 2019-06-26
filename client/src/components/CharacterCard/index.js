import React from 'react';

const CharacterCard = props => (
    <div>
        {props.character.name}
        <img src={props.character.imageUrl} alt=""/>
    </div>
);

export default CharacterCard;