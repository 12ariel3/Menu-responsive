const menuButton = document.querySelector(".container__menu");
const menuList = document.querySelector(".div__container__ul");


menuButton.addEventListener("click", ()=>{
	if(menuList.style.top === "56px"){
		menuList.style.top = "-1500"+ "px";
		menuList.style.transition = "all .4s"
	} else {
		menuList.style.top = "56px";
		menuList.style.transition = "all .4s"
	}
})


window.addEventListener("resize", ()=>{
	if(window.innerWidth >=720 && window.innerWidth <= 780){
	menuList.style.transition = "none";}
})