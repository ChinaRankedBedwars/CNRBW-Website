import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import joshMullisImageURL from '../images/josh-mullis.jpg';

const styles = theme => ({
  root: {}
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <article>
          <Secuence stagger>
            <header>
              <h1><Text>制作团队</Text></h1>
            </header>
            <p><Text>有空再写</Text></p>
          
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);
