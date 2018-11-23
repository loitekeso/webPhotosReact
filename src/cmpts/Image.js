import React from 'react';

const Image = ({
  handle,
  width,
  height,
  camera: { name: cameraName },
  lens: { brand: lensBrand },
  author: { name: authorName },
  fStop,
  focalLength,
  createdAt,
}) =>
  <div
    style={{
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: '5px',
      backgroundColor: 'rgb(221, 221, 221)',
      position: 'relative',
      fontFamily: 'inherit',
    }}
  >
    <img
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '5px',
        backgroundColor: 'rgb(221, 221, 221)',
      }}
      src={`https://source.unsplash.com/random/${width}x${height}/?sig=${handle}`}
    />
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: '5px',
        color: 'white',
        backgroundColor: 'rgba(25, 25, 25, 0.75)',
        display: 'flex',
        padding: '5px',
        textAlign: 'left',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          flex: '1 1 auto',
        }}
      >
        <div
          style={{
            flex: '1 1 auto',
          }}
        >
          {createdAt.toDateString()}
        </div>
        <div
          style={{
            flex: '1 1 auto',
          }}
        >
          {authorName}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          flex: '1 1 auto',
        }}
      >
        <div
          style={{
            flex: '1 1 auto',
          }}
        >
          {cameraName}
        </div>
        <div
          style={{
            flex: '1 1 auto',
          }}
        >
          {lensBrand}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          flex: '1 1 auto',
        }}
      >
        <div
          style={{
            flex: '1 1 auto',
          }}
        >
          f/{fStop}
        </div>
        <div
          style={{
            flex: '1 1 auto',
          }}
        >
          {focalLength}mm
        </div>
      </div>
    </div>
  </div>;

export  default Image;
