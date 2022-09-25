const btn_0=document.getElementById("newButton0");
// console.log(btn_0.value)

const btn_1=document.getElementById("newButton1");

const btn_2=document.getElementById("newButton2");

const btn_3=document.getElementById("newButton3");

const btn_4=document.getElementById("newButton4");

const btn_5=document.getElementById("newButton5");

const btn_6=document.getElementById("newButton6");

const btn_7=document.getElementById("newButton7");

const btn_8=document.getElementById("newButton8");


var totalAmt=0;

const total=document.getElementById("total");
// console.log(total);
// let bill="Total : Rs. "+JSON.stringify(totalAmt);
// console.log(bill);

// console.log(total.innerText);
let c0=1,c1=1,c2=1,c3=1,c4=1,c5=1,c6=1,c7=1,c8=1;
btn_0.addEventListener("click",e=>{

    c0++;
    if(c0%2==0 && c0>0){
        totalAmt=totalAmt+parseInt(btn_0.value);
        console.log(totalAmt);
        btn_0.innerText="Selected";
    }
    else{
        totalAmt=totalAmt-parseInt(btn_0.value);
        console.log(totalAmt);
        btn_0.innerText="Buy";
    }

    // totalAmt=totalAmt+parseInt(btn_0.value);
    // console.log(totalAmt);
    // btn_0.innerText="Selected";
    total.innerText="Total : Rs. "+totalAmt;
    
})


btn_1.addEventListener("click",e=>{
    c1++;
    if(c1%2==0 && c1>0){
        totalAmt=totalAmt+parseInt(btn_1.value);
        console.log(totalAmt);
        btn_1.innerText="Selected";
    }
    else{
        totalAmt=totalAmt-parseInt(btn_1.value);
        console.log(totalAmt);
        btn_1.innerText="Buy";
    }

    total.innerText="Total : Rs. "+totalAmt;
    
})

btn_2.addEventListener("click",e=>{
    c2++;
    if(c2%2==0 && c2>0){
        totalAmt=totalAmt+parseInt(btn_2.value);
        console.log(totalAmt);
        btn_2.innerText="Selected";
    }
    else{
        totalAmt=totalAmt-parseInt(btn_2.value);
        console.log(totalAmt);
        btn_2.innerText="Buy";
    }

    total.innerText="Total : Rs. "+totalAmt;
    
})

btn_3.addEventListener("click",e=>{
    c3++;
    if(c3%2==0 && c3>0){
        totalAmt=totalAmt+parseInt(btn_3.value);
        console.log(totalAmt);
        btn_3.innerText="Selected";
    }
    else{
        totalAmt=totalAmt-parseInt(btn_3.value);
        console.log(totalAmt);
        btn_3.innerText="Buy";
    }

    total.innerText="Total : Rs. "+totalAmt;
    
})

btn_4.addEventListener("click",e=>{
    c4++;
    if(c4%2==0 && c4>0){
        totalAmt=totalAmt+parseInt(btn_4.value);
        console.log(totalAmt);
        btn_4.innerText="Selected";
    }
    else{
        totalAmt=totalAmt-parseInt(btn_4.value);
        console.log(totalAmt);
        btn_4.innerText="Buy";
    }

    total.innerText="Total : Rs. "+totalAmt;
    
})

btn_5.addEventListener("click",e=>{
    c5++;
    if(c5%2==0 && c5>0){
        totalAmt=totalAmt+parseInt(btn_5.value);
        console.log(totalAmt);
        btn_5.innerText="Selected";
    }
    else{
        totalAmt=totalAmt-parseInt(btn_5.value);
        console.log(totalAmt);
        btn_5.innerText="Buy";
    }

    total.innerText="Total : Rs. "+totalAmt;
    
})

btn_6.addEventListener("click",e=>{
    c6++;
    if(c6%2==0 && c6>0){
        totalAmt=totalAmt+parseInt(btn_6.value);
        console.log(totalAmt);
        btn_6.innerText="Selected";
    }
    else{
        totalAmt=totalAmt-parseInt(btn_6.value);
        console.log(totalAmt);
        btn_6.innerText="Buy";
    }

    total.innerText="Total : Rs. "+totalAmt;
    
})

btn_7.addEventListener("click",e=>{
    c7++;
    if(c7%2==0 && c7>0){
        totalAmt=totalAmt+parseInt(btn_7.value);
        console.log(totalAmt);
        btn_7.innerText="Selected";
    }
    else{
        totalAmt=totalAmt-parseInt(btn_7.value);
        console.log(totalAmt);
        btn_7.innerText="Buy";
    }

    total.innerText="Total : Rs. "+totalAmt;
    
})

btn_8.addEventListener("click",e=>{
    c8++;
    if(c8%2==0 && c8>0){
        totalAmt=totalAmt+parseInt(btn_8.value);
        console.log(totalAmt);
        btn_8.innerText="Selected";
    }
    else{
        totalAmt=totalAmt-parseInt(btn_8.value);
        console.log(totalAmt);
        btn_8.innerText="Buy";
    }

    total.innerText="Total : Rs. "+totalAmt;
    
})







