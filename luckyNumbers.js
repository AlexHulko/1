for (let a = 1; a <=9; a++) {
  for (let b = 0; b <= 9; b++) {
    for (let c = 0; c <= 9; c++) {
      for (let d = 0; d <= 9; d++) {
        for (let e = 0; e <= 9; e++) {
          for (let f = 0; f <= 9; f++) {
            function luckyNumber (a, b, c,) {return a === d && b === e && c === f};
            if (luckyNumber(a, b, c)) console.log(`Ваш счастливый номер ${a} ${b} ${c} ${d} ${e} ${f}`);

          }
        }
      }  
    }
  }
};



//вариант на 2 переменные 


//for (let a = 100; a <=999; a++) {
//  for (let b = 100; b <= 999; b++)  {
//            function luckyNumber (a, b,) {return a === b};
//            if (luckyNumber(a, b)) console.log(`Ваш счастливый номер ${a} ${b}`);
//          }
//        };
