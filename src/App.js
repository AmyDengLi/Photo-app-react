import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import PicTab from './PicTab'


class App extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: ['./image/0.jpg', './image/1.jpg', './image/2.jpg', './image/3.jpg', './image/4.jpg', './image/5.jpg', './image/6.jpg', './image/7.jpg', './image/8.jpg', './image/9.jpg'],
      title: ['海王', '狗十三', '红海行动', '老爸102岁', '找到你', '龙猫', '无名之辈', '我不是药神', '无双', '无敌破坏王：大闹互联网'],
      constract: ['讲述了亚瑟·库里认识到他家族血脉的真谛的过程，以及和湄拉一同对抗对人类怀有更深敌意的同母异父的兄弟——海洋领主奥姆的故事', '影片讲述了一个女孩从童年到成年残酷变化过程中所发生的故事', '该片讲述了中国海军“蛟龙突击队”8人小组奉命执行撤侨任务，突击队兵分两路进行救援，但不幸遭到伏击，人员伤亡；同时在粉碎叛军武装首领的惊天阴谋中惨胜的故事', '这是一部非常有意思的电影，印度片最近在国内非常的流行，因为他们往往有着相当大的脑洞，102岁的爸爸居然会让75岁的儿子重新充满希望', '该片讲述了职场律师李捷被保姆孙芳“偷”走了孩子，为了追寻孩子下落，两位生活处境完全不同的女人就此展开一场命运博弈的故事。', '该片讲述了草壁达郎的妻子草壁靖子生病住院后，他带着草壁五月与四岁的妹妹梅回到乡间居住的故事', '该片围绕一把丢失的老枪，讲述了一对低配版的劫匪，一个落魄的保安，一个身体残疾却性格彪悍的毒舌女，这些“无名之辈”身上发生的一系列荒诞故事', '影片讲述了神油店老板程勇从一个交不起房租的男性保健品商贩，一跃成为印度仿制药“格列宁”独家代理商的故事', '影片讲述了犯罪天才“画家”与造假天才李问双剑合璧，联手造出超级伪钞的故事', '讲述拉尔夫与云妮洛普在互联网中寻找能够修复游戏《甜蜜冲刺》的组件的故事']
    }
  }
  render() {
    return (
      <div className="App">
        <PicTab info={{imgUrl:this.state.imgUrl,title:this.state.title,constract:this.state.constract}}/>
      </div>
    );
  }
}

export default App;