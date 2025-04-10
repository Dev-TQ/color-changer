


 let color_b;
 let color_t;
 let color_s;

 // الحصول على العناصر
 let e_input = document.getElementById("bg-color");
 let e_input2 = document.getElementById("bt-color");
 let e_input3 = document.getElementById("bs-color");

 e_input.addEventListener("input", function() {

     let element = document.getElementById("parent");
 color_b=e_input.value;
     element.style.backgroundColor = color_b;  
 });
 e_input2.addEventListener("input", function() {
     let h = document.getElementById("hed");
     color_t= e_input2.value;
     h.style.color = color_t; 
 });


 e_input3.addEventListener("input", function() {
  // تخزين اللون في المتغير
     let s = document.getElementById("hed");
     color_s=e_input3.value;
     s.style.borderColor = color_s ; // تطبيق اللون مباشرة على النص
    
 });
 

 let bt3=document.getElementById("btn2");
 bt3.addEventListener("click",function(){
    console.log("ddddddd")
   let li=document.getElementById("color");
   li.style.display=(li.style.display === "block")?"none":"block";
 });