var acc = document.getElementsByClassName("accordion");
let caret = document.getElementsByClassName("caret");

for(var i = 0; i<acc.length; i++) {
    acc[i].addEventListener("click", function(){
    this.classList.toggle("bold");
    this.lastElementChild.classList.toggle("caret");

    let panel = this.nextElementSibling;

    if(panel.style.display === "block"){
        panel.style.display = "none";
    } else{
        panel.style.display = "block";
    }
    // delClass("item");
    });
}

// function delClass(item) {
//     acc.forEach(acc => {
//         if (item != section) {
//             let panel = acc.firstElementChild;
//             panel.classList.remove('bold')
//         }
//     })
// }