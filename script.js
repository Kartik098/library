var add_btn = document.getElementById("add_btn");
var div = document.querySelector(".model")
var cross = document.querySelector(".cross");
var book_title = document.querySelector("input");
var add_book = document.querySelector(".btn");
var container = document.querySelector("#container");
var remove = document.querySelector(".remove");
var book = document.querySelector(".book");
var book_ = document.getElementById("book_id")
let books = [];




const buildUi = (books)=>{
    books.forEach((book)=>{
        console.log(book.title);
        const div_ = document.createElement("div");
        div_.classList.add("book");
         div_.id = "book_id"
        const book_name = document.createElement("h2");
        book_name.classList.add("book_name")
        book_name.innerText = book.title;
        
        const button = document.createElement("button");
        button.classList.add("remove")
        const icon = document.createElement("i");
        icon.classList.add("fas")
        icon.classList.add("fa-trash-alt");
         button.append(icon);
         button.addEventListener("click",()=>{
            document.getElementById("book_id").remove();
            
         })
        // console.log(book_name.innerText)    
        div_.append(book_name,button);
        console.log(div_);
         container.append(div_);
         console.log(container);
         
    })
}
const setbooks = ()=>{
    container.innerHTML = null;
    if(localStorage.getItem("books")){
        books = JSON.parse(localStorage.getItem("books"));
    } else{
        const test ={
            title:"Not found"
        }
        books.push(test);
    }
    buildUi(books);
}

add_book.addEventListener("click",(event)=>{
    event.preventDefault();
    const book = {
        title :book_title.value 
    }
    books.push(book);
    localStorage.setItem("books",JSON.stringify(books));
    
    
    

    book_title.value = ""
    setbooks();
})
add_btn.addEventListener("click",()=>{
    div.style.display = "flex";
})
cross.addEventListener("click",()=>{
    div.style.display = "none";
})

setbooks();
