// ------------CHAPTER 43 to 48--------------
// 1. Show an alert box on click on a link.
//------ANSWER------
// function greet(){
//     alert("Hi User");
// }



// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
//------ANSWER------
// function showAlert() {
//     alert("Link clicked!");
// }
// function showImageAlert(mobileName) {
//     alert("Thanks Purchasing Phone From  "+mobileName);
// }



// 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted. 
//------ANSWER------
// function deleteRow(button) {
//     button.parentNode.parentNode.remove()
// }



// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
//------ANSWER------
// in index.html



// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
//------ANSWER------
// var counter = 0;
// function increase(){
//     document.getElementById("counter").innerText = counter++
// }
// function decrease(){
//     if(counter<0){
//         counter=0
//     }
//     document.getElementById("counter").innerText = counter--
// }




// ------------CHAPTER 43 to 48--------------
// 1. Create a signup form and display form data in your web page on submission.
//------ANSWER------
// function displayFormData() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     if(name.trim() === "") {
//         alert("Please enter your name");
//         return;
//     }
//     if(email.trim() === "") {
//         alert("Please enter your email");
//         return;
//     }
//     if(password.trim() === "") {
//         alert("Please enter your password");
//         return;
//     }
//     document.getElementById("displayName").value = "Name: " + name;
//     document.getElementById("displayEmail").value = "Email: " + email;
//     document.getElementById("displayPassword").value = "Password: " + password;
    
//     document.write("Name: "+name+"<br>");
//     document.write("Fathername: "+email+"<br>");
//     document.write("Pasword: "+password+"<br>");
// }




// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. 
//------ANSWER------
// function expandText(){
//     var fullText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim aut fugit expedita totam culpa commodi nulla, voluptates et maiores earum adipisci necessitatibus iure modi? Maiores aperiam iusto repudiandae aspernatur aliquam in voluptatem quam sit. Aut, exercitationem excepturi! Ullam, dolor possimus exercitationem voluptas quam incidunt nobis at nihil magnam nesciunt numquam non ducimus ex aspernatur autem harum eos suscipit quaerat, tempore laudantium excepturi dolorem. Aspernatur reprehenderit nobis, ratione obcaecati repellendus quaerat, quo tempora, consequuntur temporibus impedit quasi voluptates totam nostrum neque nisi perspiciatis fugiat sit beatae fuga placeat quae! Non distinctio exercitationem illum omnis similique inventore dolore impedit fuga consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim aut fugit expedita totam culpa commodi nulla, voluptates et maiores earum adipisci necessitatibus iure modi? Maiores aperiam iusto repudiandae aspernatur aliquam in voluptatem quam sit. Aut, exercitationem excepturi! Ullam, dolor possimus exercitationem voluptas quam incidunt nobis at nihil magnam nesciunt numquam non ducimus ex aspernatur autem harum eos suscipit quaerat, tempore laudantium excepturi dolorem."

//     var shortText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim aut fugit expedita totam culpa commodi nulla, voluptates et maiores earum adipisci necessitatibus iure modi? Maiores aperiam iusto repudiandae aspernatur aliquam in voluptatem quam sit. Aut, exercitationem excepturi! Ullam, dolor possimus exercitationem voluptas quam incidunt nobis at nihil magnam consequuntur temporibus impedit quasi voluptates totam nostrum neque nisi perspiciatis fugiat sit beatae fuga placeat quae! Non distinctio exercitationem illum omnis similique inventore dolore impedit fuga consequuntur."

//     var paraText = document.getElementById("para");
//     var button = document.getElementById("btn");
//     if(paraText.innerText == shortText){
//      paraText.innerText = fullText
//      button.innerText = "Read Less"
//     }
//     else{
//         paraText.innerText = shortText
//         button.innerText = "Read More"
//     }
// }





// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.
//------ANSWER------
