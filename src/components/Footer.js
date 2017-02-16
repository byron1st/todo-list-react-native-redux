import React from 'react'
import { Footer, FooterTab } from 'native-base'
import FilterLink from '../containers/FilterLink'
import { VISIBILITY_FILTER } from '../actions'

const FooterBar = () => (
  <Footer style={{flexDirection: 'row'}}>
    <FooterTab>
      <FilterLink filter={VISIBILITY_FILTER.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={VISIBILITY_FILTER.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VISIBILITY_FILTER.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </FooterTab>
  </Footer>
)

export default FooterBar
