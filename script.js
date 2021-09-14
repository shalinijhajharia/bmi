function calcubmi()
{
    
    var w1=parseFloat(document.getElementById("weight").value);
    var wd1=document.getElementById("dd1").value;
    var h1=parseFloat(document.getElementById("height").value);
    var hd1=document.getElementById("dd2").value;
    if(wd1=="lbs")
    {
        w1=w1*0.453 ;//lbs into kg
    }
    if(hd1=="inches")
    {
        h1=h1*0.0254; //inches to meter
    }
    string="";
    bmi=w1/(h1**2);
    
    if(bmi<18.5)
    {
        string=("Underweight and BMI is "+bmi.toFixed(2));
    }
    else if(bmi<=24.9)
    {
        string=("Normal and BMI is "+bmi.toFixed(2));
    }
    else if(bmi<=29.9)
    {
        string=("Overweight and BMI is "+bmi.toFixed(2));
    }
    else if(bmi <=34.9)
    {
        string=("Obese Class 1 and BMI is "+bmi.toFixed(2));
    }
    else if(bmi<=39.9)
    {
        string=("Obese Class II and BMI is "+bmi.toFixed(2));
    }
    else
    {
        string=("Obese Class III and BMI is "+bmi.toFixed(2));
    }
   
    document.getElementById("display").innerHTML=string;
}
function reset()
{
    
    document.getElementById("weight").value="";
    document.getElementById("height").value="";
    document.getElementById("display").innerHTML="&nbsp;";
}