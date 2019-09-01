import request from './request/request'; 
var wx = require('jweixin-module') 
export default {     
        //初始化sdk配置  
    initJssdk:function(callback ,url){  
        //获取服务端签名
			request.get('/api/wechat/mp_sign/',{ data: { url: url } }).then(res=>{
				if(res.data.data){  
				    wx.config({
				         debug: false,  
				         appId: res.data.data.appId,
				         timestamp: res.data.data.timestamp,
				         nonceStr: res.data.data.noncestr,
				         signature: res.data.data.sign, 
				         jsApiList: [  
				             'chooseWXPay',  
				             'onMenuShareTimeline',  
				             'onMenuShareAppMessage',
							 'getLocation'
				         ]
				    });
					 
				    //配置完成后，再执行分享等功能  
				    if(callback){  
				        callback();  
				    }  
				}  
			}) 
    },  
    //在需要自定义分享的页面中调用  
    share:function(data){  
        let url = window.location.href.split('#')[0];
        //每次都需要重新初始化配置，才可以进行分享 
        this.initJssdk(function(){  
            wx.ready(function(){    
                var shareData = {  
                     title: data.title,  
                     desc: data.desc,  
                     link: data.link,
                     imgUrl: data.imgUrl, 
                     success: function (res) {  
                         
                     },  
                     cancel: function (res) {  
						 
                     }  
                 };
                 //分享给朋友接口
                 wx.onMenuShareAppMessage(shareData);
                 //分享到朋友圈接口
                 wx.onMenuShareTimeline(shareData);
            });  
        } ,url);  
    },
	//在需要获取地理位置的页面中调用
	location:function(callback){
		let url = window.location.href.split('#')[0];
		this.initJssdk(function(){  
		    wx.ready(function(){    
		        wx.getLocation({
					type: 'wgs84',
					success: (res) => {
						callback(res)
					},
					fail: (res) => {
						callback(false)
					}
				})
		    });  
		} ,url);
	}  
}  