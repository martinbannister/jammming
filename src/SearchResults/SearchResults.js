import React from 'react';
import './SearchResults.module.css';
import Track from '../Track/Track';

const styleContainer = {
  position: 'absolute',
  top: '100px',
  width: '30dvw',
  height: 'calc(90dvh - 110px',
  margin: '50px',
  border: '1px solid green',
  boxShadow: 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px',
  overflow: 'scroll'
}

function SearchResults({searchResults}) {
    const tracks = searchResults.map( track => {
      return <Track data={track} />
    });
  
    return (
    <>
        <section style={styleContainer}>
          {tracks}
        </section>
    </>);
}

export default SearchResults;