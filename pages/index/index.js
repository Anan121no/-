//Page Object
//引入 用来发送请求的方法
import { request} from "../../request/index.js";
Page({
  data: {
    //轮播图数组
    swiperList:[

    ],
    catesList:[],
    //楼层数据
    floorList:[]
  },
  //options(Object)
  onLoad: function(options) {
    //发送异步请求获取轮播图数据
    //优化的手段可以通过es6的promise来解决
    //wx.request({
    //  url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
     
      
      
      
    //   success: (result) => {
    //     // console.log(result);
    //     this.setData({
    //     swiperList:result.data.message
    //     })
    //   }
    // });
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList()
},

  //获取轮播图数据
  getSwiperList(){
  request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
  .then(result=>{
            this.setData({
    swiperList:result.data.message
  })
})
  },
  //获取分类导航数据
  getCatesList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(result=>{
              this.setData({
     catesList:result.data.message
    })
  })
    },

    //获取楼层数据
    getFloorList(){
      request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
      .then(result=>{
                this.setData({
       floorList:result.data.message
      })
    })
      }
})

  