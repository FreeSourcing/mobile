import t from 't'
import React from 'react'
import { Image } from 'react-native'
import Navigation from 'modules/navigation'

import Goto from 'co/common/goto'

export default class BookmarkEditTagsField extends React.PureComponent {
    static defaultProps = {
        last:       false,
        tags:       [],
        onChange:   null
    }

    onPress = ()=>{
        Navigation.push(this.props, 'bookmark/tags', {
            _id: this.props._id
		})
    }

    render() {
        const { last, tags } = this.props
        const tagsString = tags.join(', ')

        return (
            <Goto 
                last={last}
                iconComponent={<Image source={require('assets/images/tags.png')} />}
                onPress={this.onPress}
                label={tagsString || t.s('tags')}
                subLabel={tagsString ? '' : t.s('noTags')} />
        )
    }
}