//=================================
//Block active:
var active = document.querySelector(".active");
//Block complited:
var complited = document.querySelector(".complited");
//Form input:
var input = document.querySelector("input.inp");
//id_class for search with help "for(){}"
var id_class = 0;
//
var formss = document.querySelector("#inp_1");
//=================================

//Cancel send при press enter:
formss.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
       event.preventDefault();
    }
});
//----------------------------

//При press enter add task in active:
input.onkeydown = bt_enter;
function bt_enter(key){
	if(key.code == "Enter" && input.value != ""){
		//div1 - block with text and two buttons in block"active"
		var div1 = document.createElement("div");
		div1.id = "task";
		div1.className = "i_" + id_class;
		id_class++;
		
		//p - text in div1
		var p = document.createElement("p");
		p.style.display = "inline-block";
		
		//Add "p" in div1 and div1 in ".active"
		active.appendChild(div1);
		div1.appendChild(p);
		
		//add text from input in "p"
		p.innerHTML = input.value;
		
		//add button delete
		var bt_delete = document.createElement("div");
		bt_delete.id = "button";
		bt_delete.innerHTML = "Delete";
		bt_delete.style.display = "inline-block";
		div1.appendChild(bt_delete);
		
		bt_delete.onclick = () => {
			//if div1 in active then:
			if(document.querySelector(".active ."+div1.className)!=null){
				active.removeChild(div1);
			}else{
				complited.removeChild(div1);
			}
		}
		
		//Add button complited
		var bt_complite = document.createElement("div");
		bt_complite.id = "button";
		bt_complite.innerHTML = "Complite";
		bt_complite.style.display = "inline-block";
		div1.appendChild(bt_complite);
		
		bt_complite.onclick = () => {
			div1.removeChild(bt_complite);
			complited.appendChild(div1);
		}
	}
}
