
const input = document.getElementById("userName");
const msg = document.querySelector(".msg");



// check username validation 

input.onkeyup = (e) =>{

   const value = e.target.value

   if(value.length >= 0 && value.length < 5) { 
      msg.innerHTML = `<span style="color:red"><i class ="fa fa-warning"> </i> কমপক্ষে ৫ টি অক্ষর থাকতে হবে । </span>`;
   }else if(value.length >= 5 && value.length <= 10) {
    msg.innerHTML = `<span style="color:green"><i class ="fa fa-check"> </i> আপনার ইউজার নামটি সঠিক হয়েছে । </span>`;

   }else if( value.length > 10) {
    msg.innerHTML = `<span style="color:blue"><i class="fa fa-thumbs-up" aria-hidden="true"></i>
    আপনার ইউজার নামটি ছোট করুন ।</span>`;

   };


};














