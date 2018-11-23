import React from 'react';
import { times, slice } from 'lodash/fp';

import BricksLayout from './BricksLayout';
import Image from './Image';

const Gallery = ({ photos, Component = Image }) =>
  <BricksLayout
    sizes={[
      { columns: 1, gutter: 10 },
      { mq: '730px', columns: 2, gutter: 10 },
      { mq: '1090px', columns: 3, gutter: 10 },
    ]}
    style={{ margin: 'auto' }}
  >
    {photos.map(photo => <Component key={photo.id} {...photo} />)}
  </BricksLayout>;

export {Gallery};
