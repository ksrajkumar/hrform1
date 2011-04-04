$(document).ready(function(){
  $('.add_interview').click(function(){

   $.ajax({
   type:"POST",
   url:'add_interviews',
   data:"",
   success: function(data){
     $(data).appendTo('#result_interview');
    }
 })
 });
});

