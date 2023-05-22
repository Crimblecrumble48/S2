const Blog = document.getElementById('BlogInputs')

function BlogEntry(input){

    console.log(input)

    if(input === 1){
        document.getElementById('a1').style.display = "block"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a4').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }

    else if(input === 2){
        document.getElementById('a2').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a4').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }
    else if(input === 3){
        document.getElementById('a3').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a4').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }
    else if(input === 4){
        document.getElementById('a4').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }
    else if(input === 5){
        document.getElementById('a5').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a4').style.display = "none"
    }
}