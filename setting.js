       
       
       
   /**take Right input of hours, minits ,and seconds */
//Hours
console.log("setting.js");
$('#hours').on('input', function () {   
  var value = this.value;
  if (value !== '') {
  value = parseFloat(value);
  if (value > 23)
  this.value = '';
  }
  });
  
  // Minutes
  $('#minutes').on('input', function () {   
  var value = this.value;
  if (value !== '') {
  value = parseFloat(value);
  if (value > 59)
  this.value = '';
  }
  });
  //seconds
  $('#seconds').on('input', function () {   
      var value = this.value;
      if (value !== '') {
      value = parseFloat(value);
      if (value > 59)
      this.value = '';
      }
      });