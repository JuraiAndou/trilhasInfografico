var data = []

//reads the json file
$.get("Javascript/data.json", function(file){
    for(let i = 0; i < file.length; i++){
        data.push(file[i])
    }

    add_click_event()
});


$(document).ready(function(){
    console.log(data[0].hawaii)
});

function add_click_event(){
    $("#btn-mexico").on("click", print_mexico)
    $("#btn-hawaii").on("click", print_us)
}
function print_mexico(){
    $("body").append("<p>"+data[0].mexico+"</p>")
}
function print_us(){
    $("body").append("<p>"+data[0].us+"</p>")
}