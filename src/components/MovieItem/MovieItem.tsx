import React, { useState } from 'react';
import axios from 'axios';

const MovieItem = (props: any) => {
    
    return (
        <div>
            <img src="" alt="Icon" />
            <p style={{ color: "#FFF" }}>{props.name}</p>
            <p style={{ color: "#FFF" }}>genres</p>
        </div>
    );
};

export default MovieItem;