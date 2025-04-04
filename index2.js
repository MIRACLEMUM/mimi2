const contentEl = document.querySelector(".content");

const careers = ['Web Developer', 'Freelancer', 'YouTuber','content creator'];

let careerIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function updateText() {
    const currentCareer = careers[careerIndex];
    let displayedText;

    if (isDeleting) {
        displayedText = currentCareer.slice(0, characterIndex--);
    } else {
        displayedText = currentCareer.slice(0, characterIndex++);
    }

    contentEl.innerHTML = `<h1>I am a ${displayedText}</h1>`;

    if (!isDeleting && characterIndex === currentCareer.length + 1) {
        isDeleting = true;
        setTimeout(updateText, 1000); // Pause before deleting
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        careerIndex = (careerIndex + 1) % careers.length; // Move to the next career
        setTimeout(updateText, 500);
    } else {
        setTimeout(updateText, isDeleting ? 100 : 200); // Faster deleting, slower typing
    }
}

updateText();
