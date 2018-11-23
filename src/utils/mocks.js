import { times, random, slice } from 'lodash/fp';

const photos = times(
  n => ({
    id: n,
    handle: n,
    width: 350,
    height: random(200, 600),
    camera: { name: 'Sony α 6000' },
    lens: { brand: 'Sigma' },
    fStop: 1.4,
    focalLength: random(50, 200),
    createdAt: new Date(),
    author: {
      name: 'Meelison',
    },
  }),
  50,
);

export default limit => ({
  data: {
    loading: false,
    photos: slice(0, limit, photos),
  },
});
