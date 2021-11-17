import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/collections/images/247774/crop1507647770158.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    },{
        id: 2,
        title: '手绘',
        imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }],
    articleList: [{
        id: 1,
        title: '不可言说',
        desc: '听人说“女七男八”，意思是女人七七四十九岁，男人八八六十四岁时性欲就消失了。我也四十多岁了，感觉自己好像突然对男女之事没了念头，甚至于觉得放眼望去每个男人都恶心，包括身边的这个。',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/22094067-97789ce6a8396f7b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '这个时代最重要的技能之一',
        desc: '我是一个着迷于产品和运营的技术人，乐于跨界的终身学习者。欢迎关注我的个人公众号「跨界架构师」每周五11：45 按时送达～ 我的第「206」篇原创敬上',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/7087187-d8a055b569ce592f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList: [{
        id: 1,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png'
    },{
        id: 2,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },{
        id: 3,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id: 4,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}