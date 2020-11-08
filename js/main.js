//=================================
//Block active:
var active = document.querySelector(".active");
//Block complited:
var complited = document.querySelector(".complited");
//Form input:
var input = document.querySelector("input.inp");
//Button add:
var bt = document.querySelector(".add");
//id_class for search with help "for(){}"
var id_class = 0;
//All script tag name
var all_script = document.querySelectorAll("script");
//=================================

//t.onclick = () => {
bt.onclick = () => {
	//div1 - block with text and two buttons in block"active"
	var div1 = document.createElement("div");
	div1.id = "i_" + id_class;
	id_class++;
	
	//p - text in div1
	var p = document.createElement("p");
	p.style.display = "inline-block";
	
	//Add "p" in div1 and div1 in ".active"
	active.appendChild(div1);
	div1.appendChild(p);
	
	//add text in "p"
	p.innerHTML = input.value;
	
	//Add button complited
	var bt_complite = document.createElement("div");
	bt_complite.id = "button";
	div1.appendChild(bt_complite);
	bt_complite.innerHTML = "Complite";
	bt_complite.style.display = "inline-block";
	
	bt_complite.onclick = () => {
		div1.removeChild(bt_complite);
		complited.appendChild(div1);
	}
	
	//add button delete
	var bt_delete = document.createElement("div");
	bt_delete.id = "button";
	div1.appendChild(bt_delete);
	bt_delete.innerHTML = "Delete";
	bt_delete.style.display = "inline-block";
	
	bt_delete.onclick = () => {
		//if div1 in active then:
		if(document.querySelector(".active #"+div1.id)!=null){
			active.removeChild(div1);
		}else{
			complited.removeChild(div1);
		}
	}
}


