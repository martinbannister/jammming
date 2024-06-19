import React from 'react';
import './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const styleContainer = {
  position: 'absolute',
  top: '100px',
  right: '50px',
  width: '30dvw',
  height: 'calc(90dvh - 110px',
  margin: '50px',
  border: '1px solid green',
  boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
  overflow: 'scroll'
}

function Playlist({data, onTakeFromPlaylist}) {
    
    return (
      <>
        <div style={styleContainer}>
          <section className="header">
            <p>HEADER</p>
          </section>
          <section className="container">
            <Tracklist trackData={data} origin='playlist' />
          </section>
        </div>
      </>
    )
}

export default Playlist;