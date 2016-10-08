window.onload=function(){
	var btns=document.getElementsByClassName("banner-btn");
	var bgs=document.getElementsByClassName("banner");
	var bgc=document.getElementsByClassName("banner-bg")[0];
	var arr=["#00BAFF","#155291","#2CB1F6","#2C73CF","#fff"]
	console.log(btns)
	console.log(bgs)
     for (var i = 0; i < btns.length; i++) {
     	btns[i].index=i;
     	btns[i].onmouseover=function(){
     		for (var i = 0; i < btns.length; i++) {
     			btns[i].style.border="1px solid #ccc";
     			bgs[i].style.zIndex=1;
     	}
     	        btns[this.index].style.border="1px solid #555";
     	        bgs[this.index].style.zIndex=2;
     	        bgc.style.backgroundColor=arr[this.index];
     };


}
//顶部
var phone=$(".phone")[0]
var right5=$(".right5")[0]
var mytaobao=$(".mytaobao")[0]
var right1=$(".right1")[0]
var shoucang=$(".shoucang")[0]
var right4=$(".right4")[0]
right5.onmouseover=function(){
  phone.style.display="block"
}
right5.onmouseout=function(){
  phone.style.display="none"
}
right1.onmouseover=function(){
  mytaobao.style.display="block"
}
right1.onmouseout=function(){
  mytaobao.style.display="none"
}
right4.onmouseover=function(){
  shoucang.style.display="block"
}
right4.onmouseout=function(){
  shoucang.style.display="none"
}




//右边侧栏鼠标经过出现浮动文字
var bian1=$(".i");
var item=$(".item");
var t;
    for (var i = 0; i < bian1.length; i++) {
      console.log(1)
      bian1[i].index=i;
      hover(bian1[i],function(){
        var that=this;
        clearTimeout(t)
        t=setTimeout(function(){
            item[that.index].style.display="block";
            animate(item[that.index],{left:-80,opacity:1},500)
          },200)
      },function(){
        clearTimeout(t)
          animate(item[this.index],{left:-120,opacity:0},500,function(){
          this.style.display="none";
          })
      })
    };







//动画
var num=0;
function move(){
    num++;
  if (num==5) {
    num=0;
  };
  for (var i = 0; i < btns.length; i++) {
          btns[i].style.border="1px solid #ccc";
          bgs[i].style.zIndex=1;
      }
              btns[num].style.border="1px solid #555";
              bgs[num].style.zIndex=2;
              bgc.style.backgroundColor=arr[num];
}
  t=setInterval(function(){
    move()
    },1000)
  bgc.onmouseover=function(){
   clearInterval(t);
   }
   bgc.onmouseout=function(){
  t=setInterval(move,1000)
   }
//遮罩
 var xiaotu=document.getElementsByClassName("xiaotu")
 var masks=document.getElementsByClassName("mask");
     for (var i = 0; i < xiaotu.length; i++) {
          xiaotu[i].index=i;
          //给每一个按钮添加一个index属性，值为它在集合中的下标
          xiaotu[i].onmouseover=function(){
               masks[this.index].style.opacity="0.8"       // 
          }
          xiaotu[i].onmouseout=function(){
               masks[this.index].style.opacity="0"
          } 

}
      //侧边导航和顶部搜索滚轮效果
      var floor=document.getElementsByClassName("bian-left")[0];
      var tpsBox=document.getElementsByClassName("topsearch-box")[0];
      var flag1=true;
      var flag2=true;
      if(document.documentElement.scrollTop==1) {
          document.documentElement.scrollTop;
       }else{
          document.body;
       }
      //楼层跳转
      var qinzi=$(".tt");
      var bian=$(".pp");
      for (var i = 0; i < qinzi.length; i++) {
          bian[i].index=i
        for (var j = 0; j < qinzi.length; j++) {
          bian[j].onclick=function(){
            var height=qinzi[this.index].offsetTop-50
            var doc=getDoc();
            animate(doc,{scrollTop:height},1000)
          };
        }
      };
      window.onscroll=function(){
        //侧边导航和顶部搜索滚轮效果
      var floorobj=document.documentElement;
       if(document.documentElement.scrollTop==1) {
          document.documentElement.scrollTop;
       }else{
          document.body;
       }
      if (floorobj.scrollTop>650) {
          if (flag1) {
               flag1=false;
               flag2=true;
        animate(floor,{width:36,height:316})
        animate(tpsBox,{top:0})
        };
        }else{
          if (flag2) {
               flag1=true;
               flag2=false;
           animate(floor,{width:0,height:0})
           animate(tpsBox,{top:-50})
           };
        }
       //楼层颜色变化
        var arr=["#EA5F8D","#19C8A9","#F7A945","#F15453","#64C333","#0AA6E8","#000"]
        var doc=getDoc();
        var op=doc.scrollTop+300
      for (var j = 0; j < qinzi.length; j++) {
        if(op>(qinzi[j].offsetTop)){
          for (var i = 0; i < qinzi.length; i++) {
            bian[i].style.background=""
          };
          bian[j].style.background=arr[j]
        }
      };
      





    }
    
//图片左移
var midTu=$(".mid1-tu");
var midImg=("img",midTu);
for (var i = 0; i < midTu.length; i++) {
  midTu[i].index=i;
  midTu[i].onmouseover=function(){
        animate(midImg[this.index],{left:-20})
  }
  midTu[i].onmouseout=function(){
        animate(midImg[this.index],{left:0})
  }
};

var right1Tu=$(".right1-tu");
var right1Img=("img",right1Tu);
  for (var i = 0; i < right1Tu.length; i++) {
    right1Tu[i].index=i
    right1Tu[i].onmouseover=function(){
      animate(right1Img[this.index],{left:-10})
    }
    right1Tu[i].onmouseout=function(){
      animate(right1Img[this.index],{left:0})
    }
  };
  var right1Tu1=$(".right1-tu1");
  var right1Img1=("img",right1Tu1); 
  for (var i = 0; i < right1Tu1.length; i++) {
    right1Tu1[i].index=i
    right1Tu1[i].onmouseover=function(){
      animate(right1Img1[this.index],{right:10})
    }
    right1Tu1[i].onmouseout=function(){
      animate(right1Img1[this.index],{right:0})
    }
  };


//图片放大
var chaoliu=document.getElementsByClassName("fangda");
console.log(chaoliu)
var img=document.getElementsByClassName("imgs");
console.log(img)

for (var i = 0; i < chaoliu.length; i++) {
  chaoliu[i].index=i
  chaoliu[i].onmouseover=function(){
    animate(img[this.index],{width:140,height:140,left:50,top:10},200)
  }
  chaoliu[i].onmouseout=function(){
    animate(img[this.index],{width:120,height:120,left:60,top:20},200)
  }
};

//返回顶部
var returnTop=$(".black10")[0];
var left1=$(".left1")[0];
var doc=getDoc();
   returnTop.onclick=function(){
    animate(doc,{scrollTop:0})
   }
   left1.onclick=function(){
    animate(doc,{scrollTop:0})
   }




}