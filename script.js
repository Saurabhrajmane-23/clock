let time = document.getElementById("time");


setInterval(function(){

   let a = new Date();
   let d = a.getDate();
   let h = a.getHours();
   let m = a.getMinutes();
   let s = a.getSeconds();
   console.log(h,m,s);
   time.innerHTML = h + ":" + m + ":" + s;

},1000);


