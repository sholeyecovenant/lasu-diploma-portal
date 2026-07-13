function welcome() {
alert("Welcome to LASU Diploma Portal!");
}
document.getElementById("applicationForm").addEventListener("submit", function(event){
    event.preventDefault();
        let name = document.getElementById("name").value;
        if(name=== "") {
            alert("Please enter your full name.");
        } else {
            alert("Application submitted sucessfully!");
            document.getElementById("applicationForm").reset();
        }
});