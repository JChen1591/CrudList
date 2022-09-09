const button = document.querySelector("button");
const ul = document.querySelector("ul");


button.addEventListener("click", function()   {
    const li = document.createElement("li");
    const input1 = document.getElementById ("name").value;
    const input2 = document.getElementById ("link").value;
    console.log (input1, input2);
    li.textContent = input1 + " " + input2;
        const button2 = document.createElement("button");
            button2.setAttribute("id","remove");
            button2.textContent = "x";
            button2.addEventListener('click', function(){
                
            })
            li.append(button2);
    ul.append(li);
    
})




//put text into input sections
//click button to add input to list (append li to button)
    //append button to list (UL)