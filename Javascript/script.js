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
    console.log(data)
});

function add_click_event(){
    $("#btn-mexico").on("click", print_mexico)
    $("#btn-hawaii").on("click", print_us)
    $(".cadeira").each(function(){
        $(this).on("click", pop_up_cadeira($(this).id))
    })
}

function pop_up_cadeira(elemento) {
    console.log("smd")
    for (let i = 0; i < data.length; i++) {
        if(elemento == data[i].id){
            $("body").append("Foi!")
        }
        
    }
}

function print_mexico(){
    $("body").append("<p>"+data[0].info.nome+"</p>")
}
function print_us(){
    $("body").append("<p>"+data[0].id+"</p>")
}