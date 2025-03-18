const SECRET_TOKEN = "7x!A2d@L9z#Qw4e$Rt6y%Ui8o^Pp5s&Gh";

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navPanel = document.getElementById('navPanel');

    navToggle.addEventListener('click', () => {
        navPanel.classList.toggle('open');
        navToggle.classList.toggle('moved');
    });
});
