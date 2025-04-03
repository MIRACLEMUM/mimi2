const contentEl = document.querySelector(".content")

const careers = ['web developer','freelancer','youtuber'];

let characterIndex = 0;

updateText();

function updateText(){
characterIndex++
   
contentEl.innerHTML = `<h1>I am a ${careers [careerindex].slice(0,characterIndex)}</h1>
`;
if(characterIndex === careers[careerindex].length){
    careerindex++
    characterIndex = 0;
}

if (careerIndex === careers.length)
{
  careerIndex = 0;
}
setTimeout(updateText,400)
}