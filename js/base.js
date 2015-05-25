$( document ).ready(function(){
  console.log( "ready" );
  

   jwplayer("myElement2").setup({
     playlist: [{
      // image: "", file: "https://s3.amazonaws.com/machineintoflesh.com/sitemp3/07_NAIVE_VISION.mp3", title: "VILE INTENT - FLESH INTO MACHINE "
       image: "", file: "https://s3.amazonaws.com/machineintoflesh.com/sitemp3/1.mp3", title: "VILE INTENT - FLESH INTO MACHINE "
       },{
       image: "", file: "https://s3.amazonaws.com/machineintoflesh.com/sitemp3/3.mp3", title: "VILE INTENT - WEAK SIGNALS"
       },{
       image: "", file: "https://s3.amazonaws.com/machineintoflesh.com/sitemp3/04_TOTAL_TURING.mp3", title: "VILE INTENT - TOTAL TURING"
       },{
       image: "", file: "https://s3.amazonaws.com/machineintoflesh.com/sitemp3/14_SCNT.mp3", title: "VILE INTENT - SCNT"
       },{
       image: "", file: "https://s3.amazonaws.com/machineintoflesh.com/sitemp3/07_NAIVE_VISION.mp3", title: "VILE INTENT - NAIVE VISION"
     }],
     height:106,
     width: "97%",
     primary: "flash",
     stretching: "fill",
     listbar: {
       position: 'bottom',
       width: "97%",
       height: 70,
     },
   });

});