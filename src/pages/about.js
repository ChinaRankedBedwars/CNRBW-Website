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
            <p><Text>社区机器人维护，主系统设计，<a href="https://iafenvoy.net" target="_blank">个人网站</a></Text></p>
            <p><Text>Ficer工作室室长，<a href="https://ficer.net" target="_blank">工作室网站</a></Text></p>
            <h3><Text>辞愿 IGN: IQ_Boost | Alt: SideInc</Text></h3>
            <p><Text>社区机器人维护 & 社区管理，<a href="https://awa.gold" target="_blank">个人网站</a></Text></p>
            <p><Text>半Quit RBW，会经常玩游戏也经常搞开发</Text></p>
            <h3><Text>Juzi_CN</Text></h3>
            <p><Text>域名和服务器提供，富哥一枚，个人网站：jz-i.com&jc.baby</Text></p>
            <p><Text>JuziClub公会会长，公会官网：juziclub.net</Text></p>
            <h3><Text>泪殇 (IGN：BhopL)</Text></h3>
            <p><Text>社区总管理，社区频道主要创建者，社区头像logo、封面等设计者</Text></p>
            <p><Text>QUITED RANKED BEDWARS</Text></p>
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);
