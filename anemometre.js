console.log("Hello World");
let resultat = document.getElementById("résultat");





let calculer = document.getElementById("calculer");
    calculer.addEventListener("click", function () {
    	let g = 9.81;
    	let ρ = 1.225;

    	let x = parseFloat(document.getElementById("xInput").value) * 0.01;
		let y = parseFloat(document.getElementById("yInput").value) * 0.01;
		let l = parseFloat(document.getElementById("lInput").value) * 0.01;
		let L = parseFloat(document.getElementById("LInput").value) * 0.01;
		let m = parseFloat(document.getElementById("mInput").value) * 0.001;

		let α = Math.atan(x/y);
		let v = Math.sqrt((4*m*g*Math.sin(α)) / (ρ*l*L*((Math.cos(α))*(Math.cos(α)))));
    	console.log(v);
        resultat.innerHTML = v.toFixed(2).toString() + " m/s";
    });

