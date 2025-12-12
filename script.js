let txtInput = document.querySelector("#txtInput");;
let output = document.querySelector("#output");
let btnProcess = document.querySelector("#btnProcess");

btnProcess.addEventListener("click", function() {
    let sentence = txtInput.value;
    let outputSentence = sentence.replaceAll("PHP"," ")
    output.innerHTML = outputSentence;
});
