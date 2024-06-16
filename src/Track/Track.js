import React from 'react';
import './Track.module.css';

function Track({data}) {
    return (
        <>
            <div className='track_card'>
                <ul key={data.id}>
                  <li key={data.id+'1'}>{data.name}</li>
                  <li key={data.id+'2'}>{data.artist}</li>
                  <li key={data.id+'3'}>{data.album}</li>
                  <li key={data.id+'4'}>{data.id}</li>
                </ul>
            </div>
        </>
    );
}

export default Track;