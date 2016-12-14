var toBinary = function(number, decimals){
   if(number >= 1){
      throw new Error("Number must be smaller than 1");
   }

   if(!decimals){
      decimals = 6;
   }
   var result = "0.";
   var bin = 1/2;

   for(var i=0; i<decimals; ++i){
      if(number > bin){
         console.log(number, bin, "1");
         result += "1";
         number -= bin;
      }
      else {
         console.log(number, bin, "0");
         result += "0";
      }

      bin /= 2;
   }

   return result;
}

var toDecimal = function(binary){
   var decimalPart = binary.split(".")[1];
   var result = 0;
   var bin = 1/2;
   for(var i=0; i<decimalPart.length; ++i){
      var digit = parseInt(decimalPart.charAt(i));
      result += digit * bin;
      bin /= 2;
   }

   return result;
}

module.exports.toBinary = toBinary;
module.exports.toDecimal = toDecimal;
