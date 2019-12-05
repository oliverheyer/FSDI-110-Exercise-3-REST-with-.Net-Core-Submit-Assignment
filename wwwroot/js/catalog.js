
// create AJAX req to getcatalog
function getCatalog(){
    
    $.ajax({
        url: "/catalog/getCatalog",
        type: 'GET',
        success : function(res){
            console.log("succeed", res);
            
    },
    error: function (error) {
        console.log("Error", error);   
     }
    });


    // alert that car has been saved

    // print the response on the console
}
function init(){
    console.log("Catalog page");

    getCatalog();
}


window.onload = init;