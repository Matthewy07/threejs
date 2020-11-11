
function domElement(){

    let canvas,ctx,X,Y,scaleX,scaleY,angle;
    let conta;
    let paint,paint2,paint3,paint4,paint5;
    let d,d2,d3,d4,d5;
    let size,rotation,imagestyle;
    let addP=6;

    conta = document.createElement("div");
    canvas = document.createElement("canvas");
   
    let btnArray =[
        {btnId:"additionBtn",
         btnText:"Size"},

        {btnId:"rotationBtn",
         btnText:"Rotation"},

        {btnId:"imageStyle",
        btnText:"ImageStyle"}
    ];

    let flexCont = document.createElement("div");
    flexCont.id="btnCont";
    conta.appendChild(flexCont);

    btnArray.forEach((val)=>{

        let btn0=document.createElement("btn");
        btn0.id=val["btnId"];
        btn0.className="flexBtn";
        btn0.innerText = val["btnText"];
        flexCont.appendChild(btn0);

    });

    document.body.appendChild(conta);
    conta.appendChild(canvas);

    ctx = canvas.getContext("2d");


image = new Image();
image.src="./1.png";


image.onload = ()=>{
firstInit(image,canvas.clientWidth/2,canvas.clientHeight/2,image.naturalWidth/addP,image.naturalHeight/addP);

};

function go(){


    canvas.addEventListener("mousedown",(e)=>{

        distanceMeasure(e)
        if(d < (scaleX-scaleY)/2 ){
            console.log("moveable");
            paint =true;
        }
      
        else if(d2 < (scaleX-scaleY)/2){
            console.log("moveable");
            paint2 =true;
        }

        else if(d3 < (scaleX-scaleY)/2){
            console.log("moveable");
            paint3 =true;
        }

        else if(d4 < (scaleX-scaleY)/2){
            console.log("moveable");
            paint4 =true;
        }

        else if(d5 < (scaleX-scaleY)/2){
            console.log("moveable");
            paint5 =true;
        }

    });

    canvas.addEventListener("mousemove",(e)=>{
    
        if(X+scaleX < canvas.width || Y+scaleY < canvas.height || X > 0 || Y > 0){

        if(paint){

            X = e.offsetX-scaleX/2;
            Y = e.offsetY-scaleY/2;
            if(angle != null){
                angle();
            }
            else{
 
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);      
        }             
        }

        else if(paint2){
            X = e.offsetX-scaleX/5;
            Y = e.offsetY-scaleY/5;
            if(angle != null){
                angle();
            }
            else{
 
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);      
        }  
        }

        else if(paint3){
            X = e.offsetX-scaleX/1.1;
            Y = e.offsetY-scaleY/1.1;
            if(angle != null){
                angle();
            }
            else{
 
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);      
        }  
        }

        else if(paint4){
            X = e.offsetX-scaleX/1.1;
            Y = e.offsetY-scaleY/5;
            if(angle != null){
                angle();
            }
            else{
 
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);      
        }  
        }

        else if(paint5){
            X = e.offsetX-scaleX/5;
            Y = e.offsetY-scaleY/1.1;
            if(angle != null){
                angle();
            }
            else{
 
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,Y,scaleX,scaleY);      
        }  
        }

    }

       if(X < 0){
        
        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        ctx.drawImage(image,0,Y,scaleX,scaleY); 
        }

        else if(Y < 0 ){
         
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,0,scaleX,scaleY); 
        }

        if(X+scaleX > canvas.width){
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,canvas.width-scaleX,Y,scaleX,scaleY);
        }

        else if(Y+scaleY > canvas.height){
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,X,canvas.height-scaleY,scaleX,scaleY);
        }

        else if(X < 0 && Y< 0){
            
            ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            ctx.drawImage(image,0,0,scaleX,scaleY); 
        }

    if(X < 0 && Y+scaleY > canvas.height){
        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        ctx.drawImage(image,0,canvas.height-scaleY,scaleX,scaleY); 
    }

    else if(X+scaleX > canvas.width && Y < 0){
        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        ctx.drawImage(image,canvas.width-scaleX,0,scaleX,scaleY); 
    }

    else if(X+scaleX > canvas.width && Y+scaleY > canvas.height){
        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        ctx.drawImage(image,canvas.width-scaleX,canvas.height-scaleY,scaleX,scaleY); 
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

})

function domStyle(){

    let z = false;
    size=document.getElementById("additionBtn");
    rotation=document.getElementById("rotationBtn");
    imagestyle = document.getElementById("imageStyle");

    let cssLink = document.createElement("link");
    cssLink.rel ="stylesheet";
    cssLink.href ="./index.css";
    document.head.appendChild(cssLink);

    canvas.id="canvas";
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/2;

    conta.id="conta";
    conta.style.width =(canvas.width+canvas.width/12)+"px";
    conta.style.height =(canvas.height+canvas.height/12)+"px";

    size.addEventListener("click",()=>{
   
        sessionStorage.setItem("btn1clicked",true);

        if(sessionStorage.getItem("btn2clicked") || sessionStorage.getItem("btn3clicked")){

            sessionStorage.removeItem("btn2clicked");
            sessionStorage.removeItem("btn3clicked");
            z=false;

            let range = document.getElementById("sizeBar"); 
            if(range != null){
                range.parentElement.removeChild(range);
            }
           
        }

        sessionStorage.setItem("happened",true);

        if(sessionStorage.getItem("btn1clicked") && z == false ){

        z = true;
        let rangeBar = document.createElement("input"); 
        let current;
        rangeBar.type="range";
        rangeBar.name="range";
        rangeBar.min=1;
        rangeBar.max = 6;
     
        rangeBar.id="sizeBar";
        conta.appendChild(rangeBar);
        let range = document.getElementById("sizeBar");

        range.addEventListener("input",()=>{
            
                addP=range.value;
                if(angle != null){
                    angle();
                }
                else {
                    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
                    firstInit(image,X,Y,image.naturalWidth/addP,image.naturalHeight/addP)
                }
               
        })

    };

    });

    rotation.addEventListener("click",()=>{

        let d6;

        sessionStorage.setItem("btn2clicked",true);

        if(sessionStorage.getItem("btn1clicked") || sessionStorage.getItem("btn3clicked")){

            sessionStorage.removeItem("btn1clicked",false);
            sessionStorage.removeItem("btn3clicked",false);
            z=false;

            let range = document.getElementById("sizeBar");
            if(range != null){
                range.parentElement.removeChild(range);
            }
               
        }    
    

        if(sessionStorage.getItem("btn2clicked") && z == false){

        z=true; 
        let rangeBar2 = document.createElement("input");
        rangeBar2.type="range";
        rangeBar2.name ="range";
        rangeBar2.id="sizeBar";
        rangeBar2.min = -360;
        rangeBar2.max = 360;
        rangeBar2.value = 0; 

        conta.appendChild(rangeBar2);
        
        rangeBar2.addEventListener("input",()=>{

            function rotation (){

           let a= Math.sqrt(Math.pow((canvas.width-canvas.width)-(X+scaleX/2),2));
           let b = Math.sqrt(Math.pow((canvas.height-canvas.height) -(Y+scaleY/2),2));

           ctx.save();
           ctx.translate(a,b);
           ctx.rotate(Math.PI/180*rangeBar2.value);
           ctx.translate(-(a),-(b));
           ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
           firstInit(image,X,Y,image.naturalWidth/addP,image.naturalHeight/addP)
           ctx.restore();

        }
        angle=rotation;
        rotation();

        })
    }

    });

    /*
    imagestyle.addEventListener("click",()=>{

        sessionStorage.setItem("btn3clicked",true);

        if(sessionStorage.getItem("btn1clicked") || sessionStorage.getItem("btn2clicked")){

            sessionStorage.removeItem("btn1clicked",false);
            sessionStorage.removeItem("btn2clicked",false);
            sessionStorage.removeItem("happened");
            
            let range = document.getElementById("sizeBar");
            range.parentElement.removeChild(range);
               
        }    

        if(sessionStorage.getItem("btn3clicked") && !sessionStorage.getItem("happened")){

        }
    });
*/
}



function firstInit(img,x,y,scalex,scaley){
    image.width = scaleX;
    image.height = scaleY;

    scaleX = scalex;
    scaleY = scaley;

    X=x;
    Y=y;
    ctx.drawImage(img,x,y,scaleX,scaleY);
}

domStyle();
go()
};



let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    domElement();
    
})
