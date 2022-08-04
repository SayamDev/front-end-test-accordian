document.getElementById("toggleMenu").addEventListener("click", toggleMenu);
document.getElementById("toggleMenu2").addEventListener("click", toggleMenu2);
document.getElementById("toggleMenu3").addEventListener("click", toggleMenu3);


const triangle = document.getElementById("triangle");

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
				
			} else if (toggleStatus == 0) {
				document.getElementById("menu2").style.display = "none";
				toggleStatus = 1;
				
				
			}
		}
var toggleStatus = 1;
		function toggleMenu3() {
			if (toggleStatus == 1) {
				document.getElementById("menu3").style.display = "block";
				toggleStatus = 0;
			} else if (toggleStatus == 0) {
				document.getElementById("menu3").style.display = "none";
				toggleStatus = 1;
			}
		}