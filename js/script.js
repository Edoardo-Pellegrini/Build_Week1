

/* function slide(color){    // Work in progress
    document.getElementById('btn_slide').style =();
    
} */

let slide = 0;
function arrow() {
      
      if(slide==0){
        document.getElementById('prova1').style.transform = "translateX(-276px)";
        document.getElementById('prova2').style.transform = "translateX(-276px)";   
        document.getElementById('prova3').style.transform = "translateX(-276px)";
        document.getElementById('prova4').style.transform = "translateX(-276px)";
        document.getElementById('prova5').style.transform = "translateX(-276px)";
        slide++
        console.log(slide)
        return
      }else if(slide==1){
        document.getElementById('prova1').style.transform = "translateX(-552px)";
        document.getElementById('prova2').style.transform = "translateX(-552px)";   
        document.getElementById('prova3').style.transform = "translateX(-552px)";
        document.getElementById('prova4').style.transform = "translateX(-552px)";
        document.getElementById('prova5').style.transform = "translateX(-552px)";

        slide++
        console.log(slide)
        return
      }else if(slide==2){
        document.getElementById('prova1').style.transform = "translateX(-828px)";
        document.getElementById('prova2').style.transform = "translateX(-828px)";   
        document.getElementById('prova3').style.transform = "translateX(-828px)";
        document.getElementById('prova4').style.transform = "translateX(-828px)";
        document.getElementById('prova5').style.transform = "translateX(-828px)";

        slide++
        console.log(slide)
        return
      }else if(slide==3){
        document.getElementById('prova1').style.transform = "translateX(0)";
        document.getElementById('prova2').style.transform = "translateX(0)";   
        document.getElementById('prova3').style.transform = "translateX(0)";
        document.getElementById('prova4').style.transform = "translateX(0)";
        document.getElementById('prova5').style.transform = "translateX(0)";

        slide=0
        console.log(slide)
      }
      
   /* .scroll(100 , 0); */
    /* document.getElementById('prova2').style.transform = 'translateX(-276px)'; */
  /*   document.getElementById('prova3').style.transform = 'translateX(-276px)';
    document.getElementById('prova4').style.transform = 'translateX(-276px)';  */
    

    

}