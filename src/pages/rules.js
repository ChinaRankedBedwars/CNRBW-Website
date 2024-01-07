import React from 'react';
import PropTypes from 'prop-types';

import newsPosts from '../data/news';
import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Post } from '../components/Post';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';

const styles = theme => ({
  root: {}
});

class News extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render() {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <header>
            <h1><Text>赛季规则</Text></h1>
          </header>
          <h1>测试赛季S1赛季规则</h1>
          <p>允许使用的道具：
          </p><p>
            🟩 梯子<br></br>
            🟩 仅蓝队侧岛<br></br>
            🟩 钻甲钻剑<br></br>
            🟩 水桶(仅在自己基地使用)<br></br>
            🟩 TNT<br></br>
          </p><p>
            床爆后允许使用的道具:<br></br>
            🟨 隐身药水<br></br>
            🟨 跳跃药水，速度药水<br></br>
            🟨 搭桥蛋<br></br>
            🟨 黄队基地(床爆后所有图side都允许)<br></br>
            🟨 珍珠<br></br>
          </p><p>
            不允许使用的道具:<br></br>
            🟥 禁止使用火球炸毁敌方钻石岛钻石<br></br>
            🟥 击退棒<br></br>
            🟥 弓（任何弓）<br></br>
            🟥 黑曜石<br></br>
            🟥 防御塔(速建塔)<br></br>
            🟥 每周轮换道具</p>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(News);
