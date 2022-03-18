$(function(){
    $(document).on('click','.subonglets',function (){
        $(this).find("#subcontent").toggleClass("show");
        $(this).find("#subcontent").toggleClass("hide");
    })
     
});

