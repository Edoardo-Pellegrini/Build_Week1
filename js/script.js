

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
        document.getElementById('prova6').style.transform = "translateX(-276px)";
        document.getElementById('prova7').style.transform = "translateX(-276px)";
        document.getElementById('prova8').style.transform = "translateX(-276px)";

        document.getElementsByClassName('fa-circle')[3].style.color = '#d3d3d3';
        document.getElementsByClassName('fa-circle')[0].style.color = '#FF5333';

        
        slide++
        console.log(slide)
        return
      }else if(slide==1){
        document.getElementById('prova1').style.transform = "translateX(-552px)";
        document.getElementById('prova2').style.transform = "translateX(-552px)";   
        document.getElementById('prova3').style.transform = "translateX(-552px)";
        document.getElementById('prova4').style.transform = "translateX(-552px)";
        document.getElementById('prova5').style.transform = "translateX(-552px)";
        document.getElementById('prova6').style.transform = "translateX(-552px)";
        document.getElementById('prova7').style.transform = "translateX(-552px)";
        document.getElementById('prova8').style.transform = "translateX(-552px)";

        document.getElementsByClassName('fa-circle')[0].style.color = '#d3d3d3';
        document.getElementsByClassName('fa-circle')[1].style.color = '#FF5333';
        slide++
        console.log(slide)
        return
      }else if(slide==2){
        document.getElementById('prova1').style.transform = "translateX(-828px)";
        document.getElementById('prova2').style.transform = "translateX(-828px)";   
        document.getElementById('prova3').style.transform = "translateX(-828px)";
        document.getElementById('prova4').style.transform = "translateX(-828px)";
        document.getElementById('prova5').style.transform = "translateX(-828px)";
        document.getElementById('prova6').style.transform = "translateX(-828px)";
        document.getElementById('prova7').style.transform = "translateX(-828px)";
        document.getElementById('prova8').style.transform = "translateX(-828px)";

        

        slide++
        console.log(slide)
        return
      }else if(slide==3){
        document.getElementById('prova1').style.transform = "translateX(-1104px)";
        document.getElementById('prova2').style.transform = "translateX(-1104px)";   
        document.getElementById('prova3').style.transform = "translateX(-1104px)";
        document.getElementById('prova4').style.transform = "translateX(-1104px)";
        document.getElementById('prova5').style.transform = "translateX(-1104px)";
        document.getElementById('prova6').style.transform = "translateX(-1104px)";
        document.getElementById('prova7').style.transform = "translateX(-1104px)";
        document.getElementById('prova8').style.transform = "translateX(-1104px)";
        document.getElementsByClassName('fa-circle')[1].style.color = '#d3d3d3';
        document.getElementsByClassName('fa-circle')[2].style.color = '#FF5333';

        

        slide++
        console.log(slide)
        return
      }else if(slide==4){
        document.getElementById('prova1').style.transform = "translateX(-1380px)";
        document.getElementById('prova2').style.transform = "translateX(-1380px)";   
        document.getElementById('prova3').style.transform = "translateX(-1380px)";
        document.getElementById('prova4').style.transform = "translateX(-1380px)";
        document.getElementById('prova5').style.transform = "translateX(-1380px)";
        document.getElementById('prova6').style.transform = "translateX(-1380px)";
        document.getElementById('prova7').style.transform = "translateX(-1380px)";
        document.getElementById('prova8').style.transform = "translateX(-1380px)";

        document.getElementsByClassName('fa-circle')[2].style.color = '#d3d3d3';
        document.getElementsByClassName('fa-circle')[3].style.color = '#FF5333';

        slide++
        console.log(slide)
        return
      
      }else if(slide==5){
        document.getElementById('prova1').style.transform = "translateX(0)";
        document.getElementById('prova2').style.transform = "translateX(0)";   
        document.getElementById('prova3').style.transform = "translateX(0)";
        document.getElementById('prova4').style.transform = "translateX(0)";
        document.getElementById('prova5').style.transform = "translateX(0)";
        document.getElementById('prova6').style.transform = "translateX(0)";
        document.getElementById('prova7').style.transform = "translateX(0)";
        document.getElementById('prova8').style.transform = "translateX(0)";

        


        slide=0
        console.log(slide)
      }
      
   /* .scroll(100 , 0); */
    /* document.getElementById('prova2').style.transform = 'translateX(-276px)'; */
  /*   document.getElementById('prova3').style.transform = 'translateX(-276px)';
    document.getElementById('prova4').style.transform = 'translateX(-276px)';  */
    

    

}
function pallini(num){
  if(num==1){
    document.getElementById('prova1').style.transform = "translateX(-276px)";
        document.getElementById('prova2').style.transform = "translateX(-276px)";   
        document.getElementById('prova3').style.transform = "translateX(-276px)";
        document.getElementById('prova4').style.transform = "translateX(-276px)";
        document.getElementById('prova5').style.transform = "translateX(-276px)";
        document.getElementById('prova6').style.transform = "translateX(-276px)";
        document.getElementById('prova7').style.transform = "translateX(-276px)";
        document.getElementById('prova8').style.transform = "translateX(-276px)";

        document.getElementsByClassName('fa-circle')[3].style.color = '#d3d3d3';
        document.getElementsByClassName('fa-circle')[0].style.color = '#FF5333';

  }else if(num==2){
        document.getElementById('prova1').style.transform = "translateX(-552px)";
        document.getElementById('prova2').style.transform = "translateX(-552px)";   
        document.getElementById('prova3').style.transform = "translateX(-552px)";
        document.getElementById('prova4').style.transform = "translateX(-552px)";
        document.getElementById('prova5').style.transform = "translateX(-552px)";
        document.getElementById('prova6').style.transform = "translateX(-552px)";
        document.getElementById('prova7').style.transform = "translateX(-552px)";
        document.getElementById('prova8').style.transform = "translateX(-552px)";

        document.getElementsByClassName('fa-circle')[0].style.color = '#d3d3d3';
        document.getElementsByClassName('fa-circle')[1].style.color = '#FF5333';
  }else if(num==3){
        document.getElementById('prova1').style.transform = "translateX(-1104px)";
        document.getElementById('prova2').style.transform = "translateX(-1104px)";   
        document.getElementById('prova3').style.transform = "translateX(-1104px)";
        document.getElementById('prova4').style.transform = "translateX(-1104px)";
        document.getElementById('prova5').style.transform = "translateX(-1104px)";
        document.getElementById('prova6').style.transform = "translateX(-1104px)";
        document.getElementById('prova7').style.transform = "translateX(-1104px)";
        document.getElementById('prova8').style.transform = "translateX(-1104px)";

        document.getElementsByClassName('fa-circle')[1].style.color = '#d3d3d3';
        document.getElementsByClassName('fa-circle')[2].style.color = '#FF5333';
  }else if(num==4){
        document.getElementById('prova1').style.transform = "translateX(-1380px)";
        document.getElementById('prova2').style.transform = "translateX(-1380px)";   
        document.getElementById('prova3').style.transform = "translateX(-1380px)";
        document.getElementById('prova4').style.transform = "translateX(-1380px)";
        document.getElementById('prova5').style.transform = "translateX(-1380px)";
        document.getElementById('prova6').style.transform = "translateX(-1380px)";
        document.getElementById('prova7').style.transform = "translateX(-1380px)";
        document.getElementById('prova8').style.transform = "translateX(-1380px)";

        document.getElementsByClassName('fa-circle')[2].style.color = '#d3d3d3';
        document.getElementsByClassName('fa-circle')[3].style.color = '#FF5333';
  }

}