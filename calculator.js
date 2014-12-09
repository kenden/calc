$( document ).ready(function() {

$("#number").val('');
var first_num = "";
var op = "";

  $("#add").click(function(){
    num = $("#number").val();
    if (validate_field(num) == false) {
      $("#number").val('');
      return false;
    }
    var num = parseFloat($("#number").val());
    
    if (first_num != "") {
      first_num += num;
    } else {
      first_num = num;
    }
    $("#number").val('');
    op = "+";
  });
  
  $("#multiply").click(function(){
    num = $("#number").val();
    if (validate_field(num) == false) {
      $("#number").val('');
      return false;
    }
    var num = parseFloat($("#number").val());
    
    if (first_num != "") {
      first_num *= num;
    } else {
      first_num = num;
    }
    $("#number").val('');
    op = "x";
  });
  
  $("#substract").click(function(){
   num = $("#number").val();
    if (validate_field(num) == false) {
      $("#number").val('');
      return false;
    }
    var num = parseFloat($("#number").val());
    
    if (first_num != "") {
      first_num -= num;
    } else {
      first_num = num;
    }
    $("#number").val('');
    op = "-";
  });
  
  $("#divide").click(function(){
    num = $("#number").val();
    if (validate_field(num) == false) {
      $("#number").val('');
      return false;
    }
    var num = parseFloat($("#number").val());
    if (num == 0) {
        alert ('Impossible, dividing by 0');
        return false;
    } 
        
    if (first_num != "") {
      first_num /= num;
    } else {
      first_num = num;
    }
    $("#number").val('');
    op = "/";
  });
  
  $("#equals").click(function() {
   num = $("#number").val();
   if (first_num == "" ||  validate_field(num) == false) {
      alert ('Please enter 2 numbers: ' + first_num + ' ' + num);
      $("#number").val('');
      return false;
    }
    var num = parseFloat($("#number").val());
    if (op == "+") {
        first_num += num;   
    }
    if (op == "x") {
        first_num *= num;
    }
    if (op == "-") {
        first_num -= num;
    }
    if (op == "/") {
      if (num == 0) {
        alert ('Impossible, dividing by 0');
        $("#number").val(first_num);
      return false;
    }     
    
    first_num /= num;
    }
    $("#number").val(first_num);
    op = "";
    first_num = "";
  });  
  
});

function validate_field(entry) {
  if (entry == "" || !$.isNumeric(entry)) {
    alert ('Please enter a number');   
      return false;
    }
}
