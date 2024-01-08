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
          <h1><Text>测试赛季S1赛季规则</Text></h1>
          <p><Text>允许使用的道具：</Text>
          </p><p>
            <Text>🟩 梯子</Text><br></br>
            <Text>🟩 仅蓝队侧岛</Text><br></br>
            <Text>🟩 钻甲钻剑</Text><br></br>
            <Text>🟩 水桶(仅在自己基地使用)</Text><br></br>
            <Text>🟩 TNT</Text><br></br>
          </p><p>
            <Text>床爆后允许使用的道具:</Text><br></br>
            <Text>🟨 隐身药水</Text><br></br>
            <Text>🟨 跳跃药水，速度药水</Text><br></br>
            <Text>🟨 搭桥蛋</Text><br></br>
            <Text>🟨 黄队基地(床爆后所有图side都允许)</Text><br></br>
            <Text>🟨 珍珠</Text><br></br>
          </p><p>
            <Text>不允许使用的道具:</Text><br></br>
            <Text>🟥 禁止使用火球炸毁敌方钻石岛钻石</Text><br></br>
            <Text>🟥 击退棒</Text><br></br>
            <Text>🟥 弓（任何弓）</Text><br></br>
            <Text>🟥 黑曜石</Text><br></br>
            <Text>🟥 防御塔(速建塔)</Text><br></br>
            <Text>🟥 每周轮换道具</Text></p>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(News);
