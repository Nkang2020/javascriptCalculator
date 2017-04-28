$(document).ready(function(){
  var inputs = [""];
  var totalString;
  var operators1 = ["+","-","*","/"];
  var operators2 = ["."];
  var nums = [0,1,2,3,4,5,6,7,8,9];
  
  function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }
  function getValue(input){
    inputs.push(input);
    update();
  }
  function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  } 
  $("a").click(function(){
    if (this.id==="deleteAll"){
      inputs = [""];
      update();
    }
    else if(this.id==="backOne"){
      inputs.pop();
      update();
    }
    else if(this.id==="total"){
      getTotal();
      inputs = [""];
    }
    else{
      getValue(this.id);
    }
  })
});