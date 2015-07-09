//@https://github.com/huanglirui

/*画球构造函数*/
function drawBall () {
	this.radius=250;
    this.angles=[];
	this.length=41;
	this.all=[];
}
drawBall.prototype={
 constructor:drawBall,
//根据球半径和两个角度确定球上的点
 angle:function  () {
	  var num=0;
	  for (var i=0; i<this.length; i++) {
		  var obj={};
		    if(i==0){
			obj.theta=0;                        
			obj.phi=0;							
			}									
			if(i>0&&i<4){						
			  obj.theta=Math.PI/8*1;
			  obj.phi=Math.PI*2/3*num;
			  num++
			}
			if(i>3&&i<9){
			  obj.theta=Math.PI/8*2;
			  obj.phi=Math.PI*2/5*num;
			  num++
			}
			if(i>8&&i<16){
			  obj.theta=Math.PI/8*3;
			  obj.phi=Math.PI*2/7*num;
			  num++
			}
			if(i>15&&i<25){
			  obj.theta=Math.PI/8*4;
			  obj.phi=Math.PI*2/9*num;
			  num++
			}
			if(i>24&&i<32){
			  obj.theta=Math.PI/8*5;
			  obj.phi=Math.PI*2/7*num;
			  num++
			}
			  if(i>31&&i<37){
			  obj.theta=Math.PI/8*6;
			  obj.phi=Math.PI*2/5*num;
			  num++
			}
			  if(i>36&&i<40){
			  obj.theta=Math.PI/8*7;
			  obj.phi=Math.PI*2/3*num;
			  num++
			}
			if(i>39){
			  obj.theta=Math.PI;
			  obj.phi=0;
			}
			this.angles.push(obj);
	  };
 },
//生成li，并确定其在球上的位置
draw:function  () {
    this.angle();
	var radius=this.radius;
    	for (var i=0; i<this.length; i++) {
			   var theta=this.angles[i].theta
			   var phi=this.angles[i].phi
			   var z=radius*Math.sin(theta)*Math.cos(phi);
			   var x=radius*Math.sin(theta)*Math.sin(phi)+250;
			   var y=radius*Math.cos(theta)+250;
			   var li=document.createElement("li");
			   li.style.cssText="left:"+x+"px;top:"+y+"px;";
			   if(i==40){
			   setCss3(li,{transform:"translateZ("+10+"px) rotateY("+phi+"rad) rotateX("+(theta-Math.PI/2)+"rad)"});	   
			   this.all.push(li);
			   }else{
			   setCss3(li,{transform:"translateZ("+z+"px) rotateY("+phi+"rad) rotateX("+(theta-Math.PI/2)+"rad)"});	   
			   this.all.push(li);
			   };
			   
		};
	}
};