
let hide = document.querySelector("#advance");
let genres = document.querySelector("#genre")
hide.addEventListener('change', function(){
    if(!hide.checked){
        genres.style.display = "none";
    } else{
        genres.style.display = "intitial";
    }
})