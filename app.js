
function domElement(){
    let canvas,ctx,X,Y,scaleX,scaleY;
    let conta;
    let paint,paint2,paint3,paint4,paint5;
    let d,d2,d3,d4,d5;
    let btn1,btn2;
    let addP=6;


    conta = document.createElement("div");
    conta.id="conta";
    
    canvas = document.createElement("canvas");
    canvas.id="canvas";
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/2;

    btn1=document.createElement("button");
    btn1.id="additionBtn";
    btn1.style.width =canvas.width/12+"px";
    btn1.style.height= canvas.width/12+"px";
    btn1.textContent ="Add";
    conta.appendChild(btn1);

    btn2=document.createElement("button");
    btn2.id="subBtn";
    btn2.style.width =canvas.width/12+"px";
    btn2.style.height= canvas.width/12+"px";
    btn2.textContent ="Substract";
    conta.appendChild(btn2);

    conta.style.width =(canvas.width+canvas.width/12)+"px";
    conta.style.height =(canvas.height+canvas.height/12)+"px";
    document.body.appendChild(conta);
    conta.appendChild(canvas);


    ctx = canvas.getContext("2d");



image = new Image();
image.src="./1.png";


image.onload = ()=>{
firstInit(image,canvas.clientWidth/2,canvas.clientHeight/2,image.naturalWidth/addP,image.naturalHeight/addP);

};


function firstInit(img,x,y,scalex,scaley){
    image.width = scaleX;
    image.height = scaleY;

    scaleX = scalex;
    scaleY = scaley;

    X=x;
    Y=y;
    ctx.drawImage(img,x,y,scaleX,scaleY);
}

function go(){


    canvas.addEventListener("mousedown",(e)=>{

        distanceMeasure(e)
        if(d < 50 ){
            console.log("moveable");
            paint =true;
        }
      
        else if(d2 < 50){
            console.log("moveable");
            paint2 =true;
        }

        else if(d3 < 50){
            console.log("moveable");
            paint3 =true;
        }

        else if(d4 < 50){
            console.log("moveable");
            paint4 =true;
        }

        else if(d5 < 50){
            console.log("moveable");
            paint5 =true;
        }

    });

    canvas.addEventListener("mousemove",(e)=>{
    
        if(paint){

            X = e.offsetX-scaleX/2;
            Y = e.offsetY-scaleY/2;
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);  
                   
        }

        else if(paint2){
            X = e.offsetX-scaleX/5;
            Y = e.offsetY-scaleY/5;
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);  
        }

        else if(paint3){
            X = e.offsetX-scaleX/1.1;
            Y = e.offsetY-scaleY/1.1;
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);  
        }

        else if(paint4){
            X = e.offsetX-scaleX/1.1;
            Y = e.offsetY-scaleY/5;
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);  
        }

        else if(paint5){
            X = e.offsetX-scaleX/5;
            Y = e.offsetY-scaleY/1.1;
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);  
        }

    if(X+scaleX > canvas.width || Y+scaleY > canvas.height || X < 0 || Y< 0){
        paint=false;
        paint2=false;
        paint3=false;
        paint4=false;
        paint5=false;

        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);  
    }
       
   
     });

     canvas.addEventListener("mouseup",(e)=>{
       
        paint=false;
        paint2=false;
        paint3=false;
        paint4=false;
        paint5=false;
       
     });

     canvas.addEventListener("mouseleave",()=>{

        paint=false;
        paint2=false;
        paint3=false;
        paint4=false;
        paint5=false;
     });


    function distanceMeasure(e){

        let a = e.offsetX -(X+scaleX/2);
        let b = e.offsetY -(Y+scaleY/2);

        let a2 = e.offsetX -(X+scaleX/5);
        let b2 = e.offsetY -(Y+scaleY/5);

        let a3 = e.offsetX -(X+scaleX);
        let b3 = e.offsetY -(Y+scaleY);

        let a4 = e.offsetX -(X+scaleX);
        let b4 = e.offsetY -(Y+scaleY/5);

        let a5 = e.offsetX -(X+scaleX/5);
        let b5 = e.offsetY -(Y+scaleY);

        let distance = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
        d=distance;

        let distance2 = Math.sqrt(Math.pow(a2,2)+Math.pow(b2,2));
        d2=distance2;

        let distance3 = Math.sqrt(Math.pow(a3,2)+Math.pow(b3,2));
        d3=distance3;

        let distance4 = Math.sqrt(Math.pow(a4,2)+Math.pow(b4,2));
        d4=distance4;

        let distance5 = Math.sqrt(Math.pow(a5,2)+Math.pow(b5,2));
        d5=distance5;
    }
   
}

window.addEventListener("resize",(e)=>{

    let conta = document.getElementById("conta");
    
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/2;
    firstInit(image,X,Y,image.naturalWidth/addP,image.naturalHeight/addP);


    conta.style.width =(canvas.width+canvas.width/12)+"px";
    conta.style.height =(canvas.height+canvas.width/12)+"px";

    btn1.width =canvas.width/12+"px";
    btn1.height=canvas.width/12+"px";

    btn2.width =canvas.width/12+"px";
    btn2.height=canvas.width/12+"px";
})


btn1.addEventListener("click",()=>{
    addP++;
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    firstInit(image,X,Y,image.naturalWidth/addP,image.naturalHeight/addP);
})

btn2.addEventListener("click",()=>{
    addP--;
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    firstInit(image,X,Y,image.naturalWidth/addP,image.naturalHeight/addP);
    console.log(addP);
})
go()
};

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    domElement();
    
})
