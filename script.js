// HTML मधील घटक निवडले
const btn = document.getElementById('btn');
const colorText = document.querySelector('.color');

// Random color तयार करणारा function
function getRandomColor() {
  // Hexadecimal मध्ये random रंग तयार करत आहोत
  const letters = '0123456789ABCDEF';
  let color = '#';

  // 6 वेळा random अक्षर जोडत आहोत
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// बटण क्लिक केल्यावर काय करायचं ते
btn.addEventListener('click', function () {
  const newColor = getRandomColor(); // नवीन रंग मिळवतो
  document.body.style.backgroundColor = newColor; // बॉडीचा रंग बदलतो
  colorText.textContent = newColor; // रंगाचा कोड स्क्रीनवर दाखवतो
});