(function() {
    emailjs.init("VXd2-7huC-LT-jFyr");
})();

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const overlay = document.getElementById("loading-overlay");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if(document.getElementById("website").value) {
            console.log("Spam detected!");
            return;
        }

        overlay.classList.add("active");
        document.body.classList.add("no-scroll");

        emailjs.sendForm("service_vnccivz", "template_xrjdo8h", form)
            .then(() => {
                alert("Message sent!");
                form.reset();
            })
            .catch((error) => {
                console.error("Failed...", error);
                alert("Failed to send: " + JSON.stringify(error));
            })
            .finally(() => {
                overlay.classList.remove("active");
                document.body.classList.remove("no-scroll");
            });
    })
})