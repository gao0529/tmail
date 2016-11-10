
window.onload=function(){
	var btns=document.getElementsByClassName("btn");
	var bg=document.getElementsByClassName("tupian-box");
	var bgcolor=document.getElementsByClassName("banner-box")[0];
	var color=["#e8e8e8","#e8e8e8","#2cb1f6","#fff613","#00baff","#e8e8e8"]
	for (var i = 0; i < btns.length; i++) {
	   	btns[i].index=i;
	   	// 给每一个按钮对象添加一个index属性 值为它在集合中的下标
	   	btns[i].onmouseover=function(){
	   		num=this.index;
	   	for (var i = 0; i < btns.length; i++) {
	        btns[i].style.borderColor="#ccc";
	        btns[i].style.backgroundColor="#ccc";
	   		bg[i].style.zIndex=1;
	   		btns[i].style.opacity="1"
	   	};
	   	 bg[this.index].style.zIndex=2;
	   	 this.style.borderColor="#555";
	   	 this.style.backgroundColor="#fff";
	   	 this.style.opacity="0.8"
	   	 bgcolor.style.backgroundColor=color[this.index];
	   	}
	   	   
	   };  

	var num=0;
	var house=setInterval(move,2000);
	function move(){
		num++;
		if (num==btns.length) {
			num=0;
		};
		for (var i = 0; i < btns.length; i++) {
	        btns[i].style.borderColor="#ccc";
	        btns[i].style.backgroundColor="#ccc";
	   		bg[i].style.zIndex=1;
	   		btns[i].style.opacity="1";
	   	};
	   	 bg[num].style.zIndex=2;
	   	 btns[num].style.borderColor="#555";
	   	 btns[num].style.backgroundColor="#fff";
	   	 btns[num].style.opacity="0.8"
	   	 bgcolor.style.backgroundColor=color[num];
	}
    bgcolor.onmouseover=function(){
            clearInterval(house);
    }
    bgcolor.onmouseout=function(){
    	house=setInterval(move,2000);
    }
  
  var content=getClass("content-type-right1");
  var img=getClass("content-index");
  for (var i = 0; i < content.length; i++) {
  	    lunbo(content[i],img[i])
  };
  function lunbo(content,img){
  	content.onmouseover=function(){
  	        animate(img,{top:-12},200);
  			img.style.display="block"
  }
    content.onmouseout=function(){
    animate(img,{top:0},200);
    img.style.display="none"
  }
}
//right效果
var right_btn=$(".right-botom-1");
var right=$(".right-innerbox");
   for (var i = 0; i < right_btn.length; i++) {
   	right_btn[i].index=i;
   	hover(right_btn[i],function(){
   		right[this.index].style.display="block"
 	   animate(right[this.index],{left:-68},500)
   	},function(){
   		animate(right[this.index],{left:-88},500,function(){
   			this.style.display="none"
   		})
   	})
   	
   }


   var tuijian_img=$(".tuijian-center-box");
var tuijian=$(".tuijian-center");
for (var i = 0; i < tuijian.length; i++) {
  tuijian[i].index=i;

hover(tuijian[i],function(){
      animate(tuijian_img[this.index],{height:170,width:170,left:-15,top:-15},400) 
},function(){
   animate(tuijian_img[this.index],{height:133,width:133,left:0,top:0},400)
 }) 
}
   
  var shangping=$(".shangping1-box");
  var leftbtns=$(".floorbtn");
  var hand=$(".ground-box")[0];
  var leftlove=$(".floorbtn1")[0];
  var love=$(".love-box")[0];
  var lefttop=$(".floorbtn2")[0];
  var righttop=$(".right-bottom-22")[0];
  for (var i = 0; i < leftbtns.length; i++) {
    leftbtns[i].index=i;
    leftbtns[i].onclick=function(){
      var ot=shangping[this.index].offsetTop;
      animate(scrollobj,{scrollTop:ot-50})
    }
  };
  leftlove.onclick=function(){
    var ob=love.offsetTop;
    animate(scrollobj,{scrollTop:ob})
  }
   lefttop.onclick=function(){
    var oc=hand.offsetTop;
    animate(scrollobj,{scrollTop:oc})

  }
  righttop.onclick=function(){
    var od=hand.offsetTop;
    animate(scrollobj,{scrollTop:od})

  }
  var lh=love.offsetTop;
  var ot=[]
  var colors=["#F7B157","#7EDDCC","#F39E9E","#A7DA8D","#76CBEE","#EFA4BD"]
    for (var i = 0; i < shangping.length; i++) {
       ot.push(shangping[i].offsetTop)
    }
     function tz(){

    for (var j = 0; j < shangping.length; j++) {
      leftbtns[j].style.backgroundColor=""
      if (scrollobj.scrollTop>ot[j]-200&&scrollobj.scrollTop<lh-500) {

         for (var i = 0; i < leftbtns.length; i++) {
           leftbtns[i].style.backgroundColor="";
         }
         leftbtns[j].style.backgroundColor=colors[j]
      }
    }
    }
    addEvent(window,"scroll",tz)
    function tz2(){
        if (scrollobj.scrollTop>lh-500) {
            leftlove.style.opacity="0.9"
        }
        if (scrollobj.scrollTop<lh-500) {leftlove.style.opacity=""}
  }
  addEvent(window,"scroll",tz2)
/*顶部下拉导航*/
  var wdtb=$(".wdtb")[0]
  var hr1=$(".hand-right1")[0]
  hr1.onmouseover=function(){
    wdtb.style.display="block"
  }
  wdtb.onmouseover=function(){
    wdtb.style.display="block"
  }

  wdtb.onmouseout=function(){
    wdtb.style.display="none"
  }
  hr1.onmouseout=function(){
    wdtb.style.display="none"
  }
   var scj=$(".scj")[0]
  var sc=$(".shoucang")[0]
  sc.onmouseover=function(){
    scj.style.display="block"
  }
  scj.onmouseover=function(){
    scj.style.display="block"
  }

  scj.onmouseout=function(){
    scj.style.display="none"
  }
  sc.onmouseout=function(){
    scj.style.display="none"
  }
  var shouji=$(".hand-right5")[0]
  var hr5=$(".hand-right5-1")[0];
  shouji.onmouseover=function(){
  hr5.style.display="block"
  }
  shouji.onmouseout=function(){
  hr5.style.display="none"
  }
  var bz=$(".hand-right8")[0]
  var h8=$(".hand-right8-1")[0];
  bz.onmouseover=function(){
  h8.style.display="block"
  }
  bz.onmouseout=function(){
  h8.style.display="none"
  }
  var dh=$(".hand-right9")[0]
  var h9=$(".hand-right9-1")[0];
  dh.onmouseover=function(){
  h9.style.display="block"
  }
  dh.onmouseout=function(){
  h9.style.display="none"
  }
  /*隐藏栏*/
  var topbn=$(".yincang-top-box")[0];
 var leftbn=$(".left-box")[0];
 document.documentElement.scrollTop=1;
 if(document.documentElement.scrollTop==1){
 var scrollobj=document.documentElement;
}else{
  var scrollobj=document.body;
}
 var flag=true;
 var flag2=true;
 function cx(){
  var st=scrollobj.scrollTop;
  if(st>650){
    if(flag){
      flag=false;
      flag2=true
    animate(topbn,{top:0})
    animate(leftbn,{width:35,height:370})
}
  }else{
    if (flag2) {
      flag2=false
      flag=true
    
    animate(topbn,{top:-50})
    animate(leftbn,{width:0,height:0})
  }

 }

  } 
  addEvent(window,"scroll",cx)

 //左侧侧拉
 var  l=$(".gld")
 var  lr=$(".banner-left1-1")
 for (var i = 0; i < l.length; i++) {
  l[i].index=i
   hover(l[i],function(){
    lr[this.index].style.display="block"
   },function(){
    lr[this.index].style.display="none"
   })
 };

  

       //遮罩
var remenb=$("li",$(".remen-zhong-zhong")[0])
var remenl=$(".remen-1");
for (var i = 0; i < remenb.length; i++) {
  remenb[i].index=i
   hover(remenb[i],function(){
    remenl[this.index].style.display="block"
   },function(){
    remenl[this.index].style.display="none"
   })
 };



	
	
 
 	
 	

}