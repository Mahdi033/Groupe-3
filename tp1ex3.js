var tab=new Array;

//1er element
	var y=prompt("saisir nom");
	 var x=prompt("saisir un note");
	tab.push({nom:y,note:x,img:'<img src="el1.jpg">'});
	
	document.getElementById("ligne1").innerHTML="<td>"+ tab[0].nom+"</td>"+"<td>"+tab[0].note+"</td>"+"<td>"+tab[0].img+"</td>";
//2eme element
	var y=prompt("saisir nom2");
	var x=prompt("saisir un note");
	tab.push({nom:y,note:x,img:'<img src="el2.png">'});
	
	document.getElementById("ligne2").innerHTML="<td>"+ tab[1].nom+"</td>"+"<td>"+tab[1].note+"</td>"+"<td>"+tab[1].img+"</td>";
//3eme element
	var y=prompt("saisir nom3");
	var x=prompt("saisir un note");
	tab.push({nom:y,note:x,img:'<img src="el1.jpg">'});
	
	document.getElementById("ligne3").innerHTML="<td>"+ tab[2].nom+"</td>"+"<td>"+tab[2].note+"</td>"+"<td>"+tab[2].img+"</td>";
//tri par nom
function tri_nom() {
	let t=tab.sort((a,b) =>{
		if (b.nom >a.nom){return -1;}
	});
	document.write("<table border='1'><tr><td>nom</td><td>note</td><td>img</td></tr></table>");
	let t_filtres=t.filter(function(el){
		document.write("<table border='1'><tr><td>"+el.nom+"</td><td>"+el.note+"</td><td>"+el.img+"</td></tr></table>");
	})
}
//tri par note 
function tri_note() {
	let t=tab.sort((a,b) =>b.note-a.note);
	document.write("<table border='1'><tr><td>nom</td><td>note</td><td>img</td></tr><table>");
	let t_filtres=t.filter(function(el){
		document.write("<table border='1'><tr><td>"+el.nom+"</td><td>"+el.note+"</td><td>"+el.img+"</td></tr></table>");
	})
}
// infos
function info(){
	var x=prompt("saisie le nom que vous avez choisir")
	var found = tab.find(element=> element.nom ===x);
	alert(found.nom+" "+found.note);
}