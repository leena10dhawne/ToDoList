let inputs = document.getElementById("task");
let text =document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Your Task.");
    }else{

        // Capitalize the task before adding it to the list
        var capitalizedTask = capitalizeSentences(inputs.value);

        let newTask = document.createElement("ul");
        newTask.innerHTML = `${capitalizedTask} <i class='fa-solid fa-trash'></i>`;
        text.appendChild(newTask);
        inputs.value = "";
        newTask.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newTask.remove();
        }
    }
}

function capitalizeSentences(text) {
    // Split the text into sentences
    var sentences = text.split('. ');

    // Capitalize the first letter of each sentence
    var capitalizedSentences = sentences.map(function(sentence) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });

    // Join the sentences back together
    return capitalizedSentences.join('. ');
}