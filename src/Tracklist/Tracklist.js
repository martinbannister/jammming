import React from 'react';
import './Tracklist.module.css';
import Track from '../Track/Track';

const styleTracklist {
    padding: 5px;
    background-color: #a0d685;
}

function Tracklist({trackData}) {
    const tracks = trackData.map( track => {
      return <Track data={track} />
    });
    return (
        <>
            <section style={styleTracklist}>
                {tracks}
            </section>
        </>
    );
}

export default Tracklist;