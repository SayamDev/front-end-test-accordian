//targeted toggleMenu buttons with addEventListener that gets triggered when the user clicks on the button which then results in the different toggleMenu function being called
document.getElementById("toggleMenu").addEventListener("click", toggleMenu);
document.getElementById("toggleMenu2").addEventListener("click", toggleMenu2);
document.getElementById("toggleMenu3").addEventListener("click", toggleMenu3);

//triangle 
const triangle = document.getElementById("triangle");
const triangle2 = document.getElementById("triangle2");
const triangle3 = document.getElementById("triangle3");


//toggleStatus variable is used to determine whether the menu is open or closed
//toggleStatus = 1 == menu is open
//toggleStatus = 0 == menu is closed
//function toggleMenu is used to open and close the menu
//if statement with  toggleStatus is 1 then the menu is open === the function toggleMenu will be triggered
//function toggleMenu targets the menu id and then changes the display property to block which will display the menu & also it targets the triangle id and then changes the transform property to rotate 180deg which will make it point downwards

//when toggleStatus ==0 

//if statement with  toggleStatus is 0 then the menu is closed === the function toggleMenu will be triggered
//function toggleMenu targets the menu id and then changes the display property to none which will hide the menu & it also also targets the triangle id and then changes the transform property to rotate 360deg which will make it point upwards



var toggleStatus = 1;
		function toggleMenu() {
			if (toggleStatus == 1) {
				document.getElementById("menu").style.display = "block";
				triangle.style.transform = "rotate(180deg)";
				

				toggleStatus = 0;
			} else if (toggleStatus == 0) {
				document.getElementById("menu").style.display = "none";
				toggleStatus = 1;
				triangle.style.transform = "rotate(360deg)";
			}
		}



var toggleStatus = 1;
		function toggleMenu2() {
			if (toggleStatus == 1) {
				document.getElementById("menu2").style.display = "block";
				toggleStatus = 0;
				triangle2.style.transform = "rotate(180deg)";
				
			} else if (toggleStatus == 0) {
				document.getElementById("menu2").style.display = "none";
				toggleStatus = 1;
				triangle2.style.transform = "rotate(360deg)";
				
				
			}
		}
var toggleStatus = 1;
		function toggleMenu3() {
			if (toggleStatus == 1) {
				document.getElementById("menu3").style.display = "block";
				toggleStatus = 0;
				triangle3.style.transform = "rotate(180deg)";
			} else if (toggleStatus == 0) {
				document.getElementById("menu3").style.display = "none";
				toggleStatus = 1;
				triangle3.style.transform = "rotate(360deg)";
			}
		}