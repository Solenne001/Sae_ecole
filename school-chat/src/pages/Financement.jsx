import React from 'react';
import Badge from '../component/Badge/Badge';
import BadgeRed from '../component/BadgeRed/BadgeRed';

const Financement = () => {
    return (
        <div>
            <h1 style={{margin : "15px"}}>Tranche 1</h1>
            <Badge />
            <h1 style={{margin : "15px"}}>Tranche2</h1>
            <Badge/>
            <h1 style={{margin : "15px"}}>Tranche3</h1>
            <BadgeRed/>
            <h1 style={{margin : "15px"}}>Tranche4</h1>
            <BadgeRed/>
        </div>
    );
};

export default Financement;