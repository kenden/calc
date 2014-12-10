$( document ).ready(function() {

$("#number").val('');
var first_num = "";
var op = "";

  // Add button press ------------------------------------------------------
  $("#add").click(function(){
    if (validate_field() == false) {
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
  
  // Multiply button press -----------------------------------------------  
  $("#multiply").click(function(){
    if (validate_field() == false) {
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
  
  // Substract button press ---------------------------------------------
  $("#substract").click(function(){
    if (validate_field() == false) {
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

  // Divide button press ----------------------------------------------
  $("#divide").click(function(){
    if (validate_field() == false) {
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

  // Equals button press ---------------------------------------------
  $("#equals").click(function() {
    if (validate_field() == false) {
      $("#number").val('');
      return false;
    }   
   
    var num = parseFloat($("#number").val());
    switch (op) {
      case '+': first_num += num; break;
      case 'x': first_num *= num; break;
      case '-': first_num -= num; break;
      case '/': 
        if (num == 0) {
          alert ('Impossible, dividing by 0');
          $("#number").val(first_num);
          return false;
        }     
        first_num /= num; break;            
      default:
        alert ('Please enter a number, choose an operation and enter another number');
        return false;      
      }

    $("#number").val(first_num);
    op = "";
    first_num = "";
  });  

  function validate_field() {
    num = $("#number").val();
    if ( first_num == "" && (num == "" || !$.isNumeric(num)) ) {
        alert ('Please enter a number');
        return false;
    } else {
        if ( first_num != "" && (num == "" || !$.isNumeric(num)) ) {
          alert ('Please enter a second number');
          return false;
        }
    }
  }

  
});


