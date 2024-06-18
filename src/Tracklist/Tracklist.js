import React from 'react';
import './Tracklist.module.css';
import Track from '../Track/Track';

const styleTracklist = {
    padding: '5px',
    backgroundColor: '#a0d685'
}

function Tracklist({trackData, origin, onAddToPlaylist}) {
    const tracks = trackData.map( track => {
      return <Track data={track} origin={origin} handleClick={onAddToPlaylist} />
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