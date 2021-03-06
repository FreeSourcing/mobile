import React from 'react'
import t from 't'
import {Image} from 'react-native'
import {mediumFade} from 'co/style/animation'
import {
	Wrap,
	Loading,
	Periods
} from './style'
import Goto from 'co/common/goto'
import {
	Form,
	SubInfoText
} from 'co/style/form'

const icon_pro = <Image source={require('assets/images/pro.png')} />
const icon_selected = require('assets/images/selectFilled.png')

export default class ProBuy extends React.PureComponent {
	componentDidUpdate(prevProps) {
		//animation
		if (prevProps.loading != this.props.loading)
			mediumFade();
	}

	renderPeriods = ()=>{
		return (
			<Periods>
				<Form>
					{this.props.periods.map(({productId, localizedTitle, localizedPrice}, index)=>
						this.props.active == productId ?
							<Goto 
								key={productId}
								last={index == this.props.periods.length-1}
								label={localizedTitle}
								icon={icon_selected}
								subLabel={localizedPrice}
								action='' /> :
							<Goto 
								key={productId}
								last={index == this.props.periods.length-1}
								label={localizedTitle}
								iconComponent={icon_pro}
								subLabel={localizedPrice}
								onPress={()=>this.props.onSelect(productId)} />
					)}
				</Form>

				<Form>
					<Goto 
						last
						label={t.s('restore')}
						onPress={this.props.onRestore} />
				</Form>

				<SubInfoText>Auto-renewable. You will get access to all features in all supported platforms (Web, macOS, Windows, iOS, Android).</SubInfoText>
				<SubInfoText>All content you made in PRO remains available in free when subscription is canceled.</SubInfoText>
			</Periods>
		)
	}

	render() {
		return (
			<Wrap>
				{this.props.loading ? <Loading /> : this.renderPeriods()}
			</Wrap>
		)
	}
}