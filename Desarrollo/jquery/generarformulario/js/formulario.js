$(function () {


    //generar input
    $("#anadido").dblclick(function () {
        console.log("click en btn titutlo");
        anadir($(this));

        function anadir($this) {
            $this.clone().appendTo("#formulariofinal");
        }
    })



 
   
   
})