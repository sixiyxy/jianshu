import React, { Component } from "react";
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component  {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
            className='topic-pic'
            src='//upload-images.jianshu.io/upload_images/8981154-60236340e6a9b52c.jpg'
          />
          社会热点
        </TopicItem>
      </TopicWrapper>
    ) 
  }
}

export default Topic;