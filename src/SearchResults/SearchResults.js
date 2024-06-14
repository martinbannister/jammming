import React from 'react';
import './SearchResults.module.css';

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