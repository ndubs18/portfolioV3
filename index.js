const linkedinLogo = document.getElementById("linkedin-logo");
const githubLogo = document.getElementById("github-logo");
const mediaLinks = document.getElementById("media-links");

const scroller = document.getElementById("scroller");


let addAnimation = () => {
	scroller.setAttribute('data-animated', true);
	let scrollerInner = document.querySelector(".scrollerInner");
	let scrollerContent = Array.from(scrollerInner.children);

	scrollerContent.forEach(e => {
		const duplicated = e.cloneNode(true);
		duplicated.setAttribute("aria-hidden", true);
		scrollerInner.appendChild(duplicated);
	})

}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	addAnimation();
}


/*
document.addEventListener("scroll", e => {
    let scrollPos = window.scrollY;
    
    if(window.innerWidth >= 800) {
	if(scrollPos >= 375) {
	    githubLogo.src = "assets/github-logo-black.svg";
	} else githubLogo.src = "assets/github-circle-svgrepo-com.svg";

	if(scrollPos >= 440) {
	    linkedinLogo.src = "assets/linkedin-logo-black.svg"
	} else linkedinLogo.src = "assets/linkedin-circle-svgrepo-com.svg"

	if(scrollPos >= 453) {
	    mediaLinks.style.backgroundColor = "#0001"
	}
	else mediaLinks.style.backgroundColor = "#FFF1"
    }

    else {
	githubLogo.src = "assets/github-circle-svgrepo-com.svg"; 
	linkedinLogo.src = "assets/linkedin-circle-svgrepo-com.svg"
	mediaLinks.style.backgroundColor = "none"
    }
})
*/
