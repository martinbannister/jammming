import React from 'react';
import './SearchResults.module.css';
import Track from '../Track/Track';

function SearchResults({searchResults}) {
    const tracks = searchResults.map( track => {
      return <Track data={track} />
    });
  
    return (
    <>
        <section className='container'>
          {tracks}
        </section>
    </>);
}

export default SearchResults;