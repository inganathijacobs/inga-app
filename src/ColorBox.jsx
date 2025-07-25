import React from 'react';

export function ColorBox({ color }) {
  const styles = {
    background: color,
    height: "25px",
    width: "250px",
  };
  return <div style={styles}></div>;
}
