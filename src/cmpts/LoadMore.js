import React from 'react';

export default ({ limit, maxImages, loadMore }) =>
  <button
    disabled={limit >= maxImages}
    style={{
      margin: '20px',
      border: '3px solid #fff',
      color: '#fff',
      fontSize: '20px',
      borderRadius: '5px',
      padding: '5px',
    }}
    onClick={loadMore(5)}
  >
    load more
  </button>;
