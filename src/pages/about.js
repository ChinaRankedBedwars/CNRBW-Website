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

  render() {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <article>
          <Secuence stagger>
            <header>
              <h1><Text>关于我们</Text></h1>
            </header>
            <h2><Text>制作团队</Text></h2>
            <h3><Text>IAFEnvoy</Text></h3>
            <p><Text>社区机器人维护，主系统设计，个人网站：iafenvoy.net</Text></p>
            <p><Text>StarburstGalaxies公会会长，公会官网：starburst.team</Text></p>
            <h3><Text>Juzi_CN</Text></h3>
            <p><Text>域名和服务器提供，富哥一枚，个人网站：jz-i.com&jc.baby</Text></p>
            <p><Text>JuziClub公会会长，公会官网：juziclub.net</Text></p>
            <h3><Text>泪殇(IGN：BhopL)</Text></h3>
            <p><Text>社区总管理，社区频道主要创建者，社区头像logo、封面设计者</Text></p>
            <p><Text>QUITED RANKED BEDWARS</Text></p>
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);
