import React from 'react';
import styles from './Track.module.css';

const trackCard = {
  position: "relative",
  width: "95%",
  margin: "10px auto",
  padding: "10px",
  border: "solid 1px green",
  borderRadius: "16px",
  backgroundColor: "#7dcc55"
}

const styleUl = {
  listStyle: "none"
}

const styleSymbol = {
  position: 'absolute',
  top: '45%',
  right: '15px'
}

function Track({data, origin}) {
    let symbol = '';
    switch (origin) {
      case 'search':
        symbol = '\u{2795}';
        break;
      case 'playlist':
        symbol = '\u{2796}'
    }
  
    return (
      <>
        <div style={trackCard}>
            <ul key={data.id} style={styleUl}>
              <li key={data.id+'1'}>{data.name}</li>
              <li key={data.id+'2'}>{data.artist}</li>
              <li key={data.id+'3'}>{data.album}</li>
              <li key={data.id+'4'}>{data.id}</li>
            </ul>
            <span style={styleSymbol}>{symbol}</span>
        </div>
      </>
    );
}

export default Track;