var data = []

//reads the json file
$.get("Javascript/data.json", function(file){
    for(let i = 0; i < file.length; i++){
        data.push(file[i])
    }
    console.log(data[0])
    add_click_event()
});


$(document).ready(function(){
    console.log(data[0].paises)
});

function add_click_event(){
    $("#btn-mexico").on("click", print_mexico)
    $("#btn-hawaii").on("click", print_us)
}
function print_mexico(){
    $("body").append("<p>"+data[0].paises.mexico+"</p>")
}
function print_us(){
    $("body").append("<p>"+data[0].paises.us+"</p>")
}