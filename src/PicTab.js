import React, {
	Component
} from 'react';

class PicTab extends Component {
	constructor() {
		super();
		this.state = {
			randomDeg: [],
			randomLeft: [],
			randomTop: [],
			Zindex: [],
			boxshadow: [],
			myindex: 0,
			rotateY: []
		}
	}
	random(i) {
		let newDeg = [],
			newLeft = [],
			newTop = [],
			newZindex = [],
			NewBoxShadow = [],
			newRotateY = [];
		this.props.info.imgUrl.forEach((value, key) => {
			newRotateY[key] = 0;
			if (i == key) {
				newDeg.push(0);
				newLeft.push('580px');
				newTop.push('20%');
				newZindex.push(100);
				NewBoxShadow.push('0 0 15px red');
			} else {
				newDeg.push(Math.random() * -720 + 360);
				newLeft.push(Math.random() * window.innerWidth - 170);
				newTop.push(Math.random() * window.innerHeight - 208);
				newZindex.push(key);
				NewBoxShadow.push('0 0 15px black');

			}
		})
		this.setState({
			randomDeg: newDeg,
			randomLeft: newLeft,
			randomTop: newTop,
			Zindex: newZindex,
			boxshadow: NewBoxShadow,
			rotateY: newRotateY
		})
	};
	componentWillMount() {
		this.random()
	}
	clickTab(key, e) {
		var ev = e || window.event;
		// console.log(ev.target.classList.contains('active'))
		//ev.target.classList.contains('active')为false表示支点击过一次,为true则表示点击多次了
		if (ev.target.classList.contains('active')) {
			//已经点击过一次了,第二次点击则添加reActive类,第三次点击则删除这个类依此类推，即contains('reActive')为false则为第二/偶数次点击
			if (ev.target.classList.contains('reActive')) {
				ev.target.classList.remove('reActive');
				this.state.rotateY[key] = 0;


			} else {
				ev.target.classList.add('reActive');
				// this.state.rotateY.splice(key,1,180)
				this.state.rotateY[key] = 180;
			}
			this.setState({
				rotateY: this.state.rotateY
			})

		} else {
			//第一次点击，有随机摆放动画
			this.random(key);
		}

		this.setState({
			myindex: key,
			// rotateY: this.state.rotateY 如果放在这里的话，会与random函数里面的rotateY冲突，第一次点击其他照片，之前反转的照片不会翻回来
		})

	}
	render() {
		// console.log(this.props)
		// console.log(this.state)

		let arr = [];
		this.props.info.imgUrl.forEach((value, key) => {
			arr.push(<li key={key} style={{transform:'rotate('+this.state.randomDeg[key]+'deg) rotateY('+this.state.rotateY[key]+'deg)',left:this.state.randomLeft[key],top:this.state.randomTop[key],zIndex:this.state.Zindex[key],boxShadow:this.state.boxshadow[key]}}>
			<div className="frontSide"><img src={value} alt=""/><div>{this.props.info.title[key]}</div></div>
				<div className="reverseSide"><h4>影片：{this.props.info.title[key]}</h4><p>{this.props.info.constract[key]}</p></div>
				</li>)
		})
		let arrList = [];
		this.props.info.imgUrl.forEach((value, key) => {
			arrList.push(<li key={key} className={this.state.myindex==key?'active':''} onClick={this.clickTab.bind(this,key)}></li>)
		})
		return (<div>
			<div className="picTab">
				<ul>{arr}</ul>
			</div>
			<div className="PicList">
				<ul>{arrList}</ul>
			</div>
		</div>)
	}
}
export default PicTab