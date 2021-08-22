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
    $(".cadeira").each(function(){
        $(this).on("click", pop_up_cadeira)
    })
    $(".trilha-icon").each(function(){
        $(this).on("click", pop_up_tilha)
    })
    $(".pop-up-bg").each(function(){
        $(this).on("click", hide_trilha)
    })
}

function pop_up_tilha(){
    if($(this).attr('id') == "trilha-sys"){
        $(".pop-up").css("background-image", "url(images/sistemas.png)")
        $(".pop-up").css("background-size", "cover")
        $(".pop-up").css("background-position", "center")
    }
    if($(this).attr('id') == "trilha-dgn"){
        $(".pop-up").css("background-image", "url(images/design.png)")
        $(".pop-up").css("background-size", "cover")
        $(".pop-up").css("background-position", "center")
    }
    if($(this).attr('id') == "trilha-gms"){
        $(".pop-up").css("background-image", "url(images/jogos.png)")
        $(".pop-up").css("background-size", "cover")
        $(".pop-up").css("background-position", "center")
    }
    if($(this).attr('id') == "trilha-av"){
        $(".pop-up").css("background-image", "url(images/av.png)")
        $(".pop-up").css("background-size", "cover")
        $(".pop-up").css("background-position", "center")
    }

    $(".pop-up-bg").css("display", "block")
    $(".pop-up-bg").css("animation-name", "show-bg")
}

function hide_trilha() {
    $(".pop-up-bg").css("animation-name", "hide-bg")
    $(".pop-up-bg").css("display", "none")
    $(".pop-up").css("background", "white")
}

function pop_up_cadeira() {
    for (let i = 0; i < data.length; i++) {
        if($(this).attr('id') == data[i].id){
            $("body").append("<p>Foi!</p>")
        }
        
    }
}