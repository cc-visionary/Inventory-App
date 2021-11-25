const functions = {

  //roman numeral to int
  roman_to_int: (str) => {
      
      let num = functions.char_to_int(str.charAt(0));
      let curr, prev;

      for(let i = 1; i < str.length; i++) {
         
          curr = functions.char_to_int(str.charAt(i))
          prev = functions.char_to_int(str.charAt(i-1));

          if (curr <= prev) {
              num += curr;
          } else {
              num = num + curr - (prev*2);
          }
      }

      return num;
  },

  //char to int conversion
  char_to_int: (c) => {
      switch(c) {
          case 'I': return 1;
          case 'V': return 5;
          case 'X': return 10;
          case 'L': return 50;
          case 'C': return 100;
          case 'D': return 500;
          case 'M': return 1000;
          default: return -1;
      }
  }

}

module.exports = functions;