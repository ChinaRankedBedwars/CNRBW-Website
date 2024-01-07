const styles = theme => ({
  root: {
    position: 'relative',
    display: 'block',
    border: 'none',
    margin: 0,
    padding: 0,
    boxShadow: 'none',
    textShadow: 'none'
  },
  link: {
    border: 'none',
    outline: 'none',
    userSelect: 'none'
  },
  title: {
    position: 'absolute',
    left: 0,
    top: 0,
    visibility: 'hidden'
  },
  svg: {
    position: 'relative',
    display: 'block',
    border: 'none',
    margin: 0,
    padding: 0,
    boxShadow: 'none',
    textShadow: 'none',
    textAlign: 'center'
  },
  path: {
    fill: 'none',
    strokeWidth: 16,
    stroke: theme.color.heading.main,
    transition: `stroke ${theme.animation.time}ms ease-out`
  },
  hover: {
    '&:hover': {
      '& $path': {
        stroke: theme.color.secondary.main
      }
    }
  }
});

export { styles };
