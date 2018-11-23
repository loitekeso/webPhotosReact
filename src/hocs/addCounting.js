import { withState, withHandlers, compose } from 'recompose';

export default compose(
  withState('limit', 'set', 5),
  withHandlers({
    loadMore: ({ set }) => m => () => set(n => n + m),
  }),
);
