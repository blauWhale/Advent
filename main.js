const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const createCalendar = () => {
    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        calendarDoor.setAttribute("class", "item");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        imageNumber = i + 1;
        let imagePath = `./images/course-${imageNumber}.jpg`;
        calendarDoorText.addEventListener("click", openDoor.bind(null,imagePath));
    }
}

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#521751";
    swal({
        title: 'Present',
        text: 'Description of the present',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })


}


createCalendar();

