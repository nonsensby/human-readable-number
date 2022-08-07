module.exports = function toReadable (number) {
        const numberStrArr = number.toString().split('');
        let finishStr = '';
        const numbersList = {
           0: 'zero',
           1: 'one',
           2: 'two',
           3: 'three',
           4: 'four',
           5: 'five',
           6: 'six',
           7: 'seven',
           8: 'eight',
           9: 'nine',
           10: 'ten',
           11: 'eleven',
           12: 'twelve',
           13: 'thirteen',
           14: 'fourteen',
           15: 'fifteen',
           16: 'sixteen',
           17: 'seventeen',
           18: 'eighteen',
           19: 'nineteen',
           20: 'twenty',
           30: 'thirty',
           40: 'forty',
           50: 'fifty',
           60: 'sixty',
           70: 'seventy',
           80: 'eighty',
           90: 'ninety',
       }
              
        switch (numberStrArr.length) {
           case 2: 
           finishStr = Tence(numberStrArr,numbersList);
           break;
           case 3:
            finishStr = Hundreds(numberStrArr,numbersList);
           break;
           default:
             finishStr =  Once(numberStrArr[0],numbersList );   
           
        };
       
        function Once (number, numbers) {
            let str = '';
            for ( let key in numbers ) {
                if (key == number) {
                    str = numbers[key];
                    }
            }
            return str
        }
       
        function Tence(number, numbers){
            if ((number[0] + number[1]) <= 20  ) {
                return Once((number[0] + number[1]),numbersList);
            } else if (number[1] == '0') {
                return Once((number[0]+ '0'),numbersList);
            }
            else {
                return (Once((number[0]+ '0'),numbersList ) + ' ' + Once(number[1],numbersList ));
            }

        }
       
        function Hundreds (number, numbers){
            if (number[1] == '0' && number[2] == '0') {
                return (Once(number[0],numbers ) + ' ' + 'hundred')
            } else if (number[1] == '0' && number[2] != '0') {
                return (Once(number[0],numbers ) + ' ' + 'hundred' + ' '+ Once(number[2],numbers));
            }
            else {
                return (Once(number[0],numbers ) + ' ' + 'hundred' + ' '+ Tence((number[1]+number[2]),numbers));
            }

            re
        }
       
        return finishStr;
       }
       
       
