import React from 'react';
import './Track.module.css';

function Track({data}) {
    return (
        <>
            <div className='track_card'>
                <ul key={data.id}>
                  <li>{data.name}</li>
                  <li>{data.artist}</li>
                  <li>{data.album}</li>
                  <li>{data.id}</li>
                </ul>
            </div>
        </>
    );
}

export default Track;