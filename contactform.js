let form = document.getElementById("contactForm");
form.addEventListener("submit", function(e){
    e.preventDefault();

    let data = {
        name: form.name.value,
        mobile: form.mobile.value,
        email: form.email.value,
        message: "Hey Akhila, I need lemon soda 🍋🥤"
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
    .then(function(){
        alert("Message sent ✅");
        location.reload();
    }, function(error){
        alert("Failed ❌");
        console.log(error);
    });
});
