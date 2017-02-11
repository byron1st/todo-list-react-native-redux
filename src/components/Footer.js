import React from 'react'
import { View } from 'react-native'
import FilterLink from '../containers/FilterLink'
import { VISIBILITY_FILTER } from '../actions'

const Footer = () => (
  <View style={{flexDirection: 'row'}}>
    <FilterLink filter={VISIBILITY_FILTER.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VISIBILITY_FILTER.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VISIBILITY_FILTER.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </View>
)

export default Footer
