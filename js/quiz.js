//get element and changeg value [0,1]--->[300,500]
var num1 = Math.floor(Math.random()*200 + 300);
document.getElementById('M').textContent = num1.toString();

//var num2 = math.floor(math.random()*50+100);
//document.getElementById('Q').textContent = num2.toString();
var num2 = Math.floor(Math.random()*50+100);
document.getElementById('Q').textContent = num2.toString();

var num3 = Math.floor(Math.random()*1+3);
document.getElementById('W').textContent = num3.toString();

//update
document.querySelector('input[value = "4"]').nextSibling.nodeValue=num1.toString()+"-"+num2.toString()+"+"+num3.toString();

//Element -- div answer box -- Click
function changeStyle(event){
    event.preventDefault();
    console.log(this);
    var classname = this.getAttribute('class');
    if (classname == "answer selected"){
        this.setAttribute('class',"answer");
    }
    else{
        this.setAttribute('class',"answer selected");
    }
}
for(var i = 0; i < 4; i++){
document.getElementsByClassName('answer')[i].addEventListener('click',changeStyle,false);
}
