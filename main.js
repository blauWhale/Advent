const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

var today = new Date('December 01, 1995 03:24:00');

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
        let imagePath = `./images/course-9.jpg`;
        if(calendarDoorText.innerHTML < today.getDate()){
            calendarDoor.style.backgroundImage = `url(${imagePath})`
        }
        calendarDoorText.addEventListener("click", openDoor.bind(null,imagePath));

    }
}

const openDoor = (imagePath, event) => {
    today.getDate()
    if(event.target.innerHTML <= today.getDate().toString()){
        event.target.parentNode.style.backgroundImage = `url(${imagePath})`;
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
    else{
        swal({
            title: 'Present',
            text: 'Too early',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

}


createCalendar();

