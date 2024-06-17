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

function Track({data}) {
    return (
        <>
            <div style={trackCard}>
                <ul key={data.id} style={styleUl}>
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