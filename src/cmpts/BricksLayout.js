import React from 'react';
import PropTypes from 'prop-types';
import Bricks from 'bricks.js';

class BricksLayout extends React.Component {
  componentDidMount() {
    const { packed, sizes, position } = this.props;

    const bricks = Bricks({
      container: this.container,
      packed,
      sizes,
      position,
    });

    bricks.pack();
    bricks.resize(true);

    this.bricks = bricks;
  }
  componentWillUnmount() {
    this.bricks.resize(false);
  }
  componentDidUpdate() {
    this.bricks.update();
  }

  render() {
    const { style, children } = this.props;

    return (
      <div
        style={style}
        ref={component => {
          this.container = component;
        }}
      >
        {children}
      </div>
    );
  }
}

BricksLayout.propTypes = {
  style: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  packed: PropTypes.string,
  sizes: PropTypes.array,
  position: PropTypes.bool,
};

BricksLayout.defaultProps = {
  style: {},
  packed: 'data-packed',
  sizes: [{ columns: 1, gutter: 20 }],
  position: true,
};

export default BricksLayout;
