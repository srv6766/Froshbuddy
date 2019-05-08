    function myFun() {
        var dat=document.getElementById("sdate").value;
        myFunct(dat);
        
 
}
        function myFunct(dat) {
            if(dat>=2019-03-31 && dat <=2019-04-04)  {         
             document.getElementById(dat).style.display='block';
             document.getElementById(dat).scrollIntoView();
             /*document.getElementById(dat).style.color = "blue";*/
                document.getElementById(dat).style.fontFamily = "Times New Roman";
                document.getElementById(dat).style.fontSize = "larger"; 
            /*document.getElementById(dat).style.background="grey";*/
            document.getElementById(dat).style.padding="1%";
                
            }
            else{
                alert("Wrong date..!");
            }
}