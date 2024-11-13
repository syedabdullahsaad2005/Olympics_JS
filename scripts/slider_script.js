var btnLeft = document.getElementById('prev_btn');
var btnRight = document.getElementById('next_btn');

var slider = document.querySelector('.container .slider');

btnRight.addEventListener('click', nextSlide);
function nextSlide() {
	slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener('click', prevSlide);
function prevSlide() {
	slider.prepend(slider.lastElementChild);
}

function autoSlide() {
	deleteInterval = setInterval(timer, 4000); // 4000 mile sec = 4 sec
	function timer() {
		nextSlide();
	}
}
autoSlide();

slider.addEventListener('mouseover', deleteAutoSliding);
btnRight.addEventListener('mouseover', deleteAutoSliding);
btnLeft.addEventListener('mouseover', deleteAutoSliding);

function deleteAutoSliding() {
	clearInterval(deleteInterval);
}

slider.addEventListener('mouseout', autoSlide);
btnRight.addEventListener('mouseout', autoSlide);
btnLeft.addEventListener('mouseout', autoSlide);