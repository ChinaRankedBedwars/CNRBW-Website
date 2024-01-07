import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';
import { Text } from '../Text';

class Component extends React.Component {
  static displayName = 'Brand';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    link: PropTypes.string,
    hover: PropTypes.bool,
    stableTime: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  static defaultProps = {
    link: '/'
  };

  constructor() {
    super(...arguments);

    const { energy, stableTime } = this.props;

    if (!stableTime) {
      energy.updateDuration({ enter: 820 });
    }
  }

  componentWillUnmount() {
    // anime.remove(paths);
  }

  enter() {
    const { energy, sounds, stableTime, onEnter } = this.props;

    anime.set(this.svgElement, { opacity: 1 });

    sounds.logo.play();
  }

  exit() {
    const { energy, sounds } = this.props;

    sounds.fade.play();

    anime({
      targets: this.svgElement,
      easing: 'easeInCubic',
      duration: energy.duration.exit,
      opacity: 0
    });
  }

  render() {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      link,
      hover,
      stableTime,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    return (
      <h1 className={cx(classes.root, hover && classes.hover, className)} {...etc}>
        <Link href="/">
        <Text
          className={classes.svg}
          onMouseEnter={() => sounds.hover.play()}
        >
          中国排位起床社区
        </Text>
        </Link>
      </h1>
    );
  }
}

export { Component };
