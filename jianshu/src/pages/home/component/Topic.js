import React, { Component } from "react";
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux';
import { NavItem } from "../../../common/header/style";

class Topic extends Component  {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
                alt=''
              />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    ) 
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','topicList'])
})

export default connect( mapState, null )(Topic);