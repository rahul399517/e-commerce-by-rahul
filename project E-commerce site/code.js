//below function will executed through onclick event
//The below function will change the css propertis of element with ID-Cartvalue// 
function cart(){
document.querySelector("#cartvalue").style.marginLeft="200px";
//queryselector used to access the css code of the element through its ID  //
document.querySelector("#cartvalue").style.transition="2s";
//queryselector used to access the css code of the element through its ID  //
}


//below function will executed through onclick event
//The below function will change the css propertis of element with ID-Cartvalue1// 
function paynow()
{
    //queryselector used to access the css code of the element through its ID  //
    document.querySelector("#cartvalue1").style.marginLeft="1224px";
    document.querySelector("#cartvalue1").style.transition="2s";
    document.querySelector("#cartvalue").style.marginLeft="-1000px";
document.querySelector("#cartvalue").style.transition="2s";
}


//below function will executed through onclick event
//The below function will change the css propertis of element with ID-Cartvalue1// 
function paynowcut()
{
    document.querySelector("#cartvalue1").style.marginLeft="-1224px";
    document.querySelector("#cartvalue1").style.transition="2s";
   
}
//below function will executed through onclick event
//The below function will change the css propertis of element with ID-Cartvalue// 
function cartcut(){
    document.querySelector("#cartvalue").style.marginLeft="-1000px";
    document.querySelector("#cartvalue").style.transition="2s";
    }



    //below function will executed through onclick event
//The below function will change the css propertis of element with ID-Cartvaluemobile// 
function cartvaluemobile()
{
    document.querySelector("#cartvaluemobile").style.marginLeft="12px";
document.querySelector("#cartvaluemobile").style.transition="2s";
}


//below function will executed through onclick event
//The below function will change the css propertis of element with ID-Cartvaluemobilepayment// 
function cartvaluemobilepayment()
{
    document.querySelector("#cartvaluemobilepayment").style.marginLeft="12px";
document.querySelector("#cartvaluemobilepayment").style.transition="2s";
document.querySelector("#cartvaluemobile").style.marginLeft="-400px";
document.querySelector("#cartvaluemobile").style.transition="2s";
}


//below function will executed through onclick event
//The below function will change the css propertis of element with ID-Cartvaluecross// 
function cartvaluemobilecross()
{
    document.querySelector("#cartvaluemobile").style.marginLeft="-400px";
document.querySelector("#cartvaluemobile").style.transition="2s";

}


//below function will executed through onclick event
//The below function will change the css propertis of element with ID-Cartvaluemobilepayment// 
function cartvaluemobilepaymentcross()
{
    document.querySelector("#cartvaluemobilepayment").style.marginLeft="-400px"
document.querySelector("#cartvaluemobilepayment").style.transition="2s";
}



//below function will executed through onclick event
//The below function will compare the value entered in text box thought if statment// 
function checkavailebility()
{
    var n1 = String(document.getElementById('quantity').value);
    var n2 = String(document.getElementById('size').value);
    if(n2==="small")
   {
    document.querySelector("#available").style.color="red";
    document.querySelector("#available").style.border="1px solid red";
    document.getElementById('available').value ="Not Available";
    document.getElementById('cost').value ="0";
    document.getElementById('totalcost').value ="0";
   }
   else 
   {
    document.querySelector("#available").style.color="green";
    document.querySelector("#available").style.border="1px solid green";
    document.getElementById('available').value ="Available"; 
    document.getElementById('cost').value = n1*499;
    document.getElementById('totalcost').value =n1*499+50;
   }
  
}
function checkout()
{
alert('Order Placed Successfully');
}


function checkavailebilitywindow()
{
    var n11= String(document.getElementById('quantity').value);
    var n22 = String(document.getElementById('size').value);
    if(n22==="small")
   {
    document.querySelector("#available").style.color="red";
    document.querySelector("#available").style.border="1px solid red";
    document.getElementById('available').value ="Not Available";
    document.getElementById('cost').value ="0";
    document.getElementById('totalcost').value ="0";
   }
   else 
   {
    document.querySelector("#available").style.color="green";
    document.querySelector("#available").style.border="1px solid green";
    document.getElementById('available').value ="Available"; 
    document.getElementById('cost').value = n11*499;
    document.getElementById('totalcost').value =n11*499+50;
   }
  
}
   
