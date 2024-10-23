let MarkReadbtn = document.getElementById("markReadbtn")
let NotificationNumber = document.querySelector("mark")

let Notifications = document.getElementsByClassName("card");
Notifications = Array.from(Notifications);

Notifications.forEach(card => {
    card.addEventListener("click", () => {
        // Set ClassName to unread of span in card
    })
});

MarkReadbtn.addEventListener("click", () => {

    let Unreads = document.querySelectorAll("span")
    Unreads.forEach(unread => {
        if (unread.className == "unread") {
            unread.className = "read";
        }
    });

    NotificationNumber.innerHTML = "0";
    NotificationNumber.style.display = "none";
})