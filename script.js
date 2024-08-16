let inp =document.getElementById("input")

function AddToinput(input){
    inp.value += input;
}

function Calculat(){
    try{
    inp.value=eval(inp.value)

    }
    catch(error){
        inp.value="Error"
        setTimeout(function(){
            inp.value=""
        },1000)
    }
}

function Clear(){
    inp.value=""

}
