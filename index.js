const button = document.querySelector("button");
const ul = document.querySelector("ul");


button.addEventListener("click", function()   {
    const li = document.createElement("li");
    const input1 = document.querySelector (".name").value;
    const input2 = document.querySelector (".link").value;
    console.log (input1, input2);
    li.textContent = input1 + " " + input2;
    
        const removebtn = document.createElement("button");
            removebtn.setAttribute("id","remove");
            removebtn.textContent = "x";
            removebtn.addEventListener('click', function(){
                this.parentElement.remove();
            })
            li.append(removebtn);
    ul.append(li);
    
})




//put text into input sections
//click button to add input to list (append li to button)
    //append button to list (UL)