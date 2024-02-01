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
          <h1><Text>S1赛季规则</Text></h1>
          <p>
            <Text>允许使用的物品</Text><br></br>
            <Text>✅ 梯子</Text><br></br>
            <Text>✅ 水只能在自己基地使用</Text><br></br>
            <Text>✅ 跳跃、隐身药水在 绿宝石2 后可使用</Text><br></br>
            <Text>✅ 搭路蛋在 钻石2 后可使用</Text><br></br>
            <Text>✅ 允许使用火球 炸毁 对方钻点钻石</Text><br></br>
            <Text>✅ Side侧岛 只能在Invasion和Lectus地图</Text><br></br>
          </p><p>
            <Text>床爆后允许使用的物品</Text><br></br>
            <Text>🟨 黄队侧岛</Text><br></br>
            <Text>🟨 珍珠</Text><br></br>
            <Text>🟨 速度药水、钻剑、钻甲</Text><br></br>
          </p><p>
            <Text>禁止使用的物品</Text><br></br>
            <Text>🟥 击退棒</Text><br></br>
            <Text>🟥 弓（ 包括击退弓 ）</Text><br></br>
            <Text>🟥 黑曜石</Text><br></br>
            <Text>🟥 防御塔</Text><br></br>
            <Text>🟥 每周轮换道具</Text></p>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(News);
