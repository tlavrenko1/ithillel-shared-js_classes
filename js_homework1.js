// -> 'number33, took first operand it's a string, so we convert others to string + strings concatenation
'number' + 3 + 3

// -> 3, we count null as 0
null + 3

//-> "qwerty", true AND true = true
5 && "qwerty"

// -> '42hillel' , + near a string convert string to numner + strings concatenation
+'40' + +'2' + "hillel";

// ->false, we do math here 10 - 5 = 5!=6
'10' - 5 === 6;

//-> 1, as 1 + 0
true + false

// -> NaN, as we cannot convert to number
'4px' - 3

//-> 1, convert string to number an do math
'4' - 3

// -> 61, 3^0 = 1, '6' + 1
'6' + 3 ** 0;

//-> 2, we convert string to number
12 / '6'

//- > '10false', as (5 === 6) = false
'10' + (5 === 6);

// -> false, null == NaN
null == ''

//27, 3^3
3 ** (9 / 3);

// -> true, we convert strings to boolean values
!!'false' == !!'true'

// -> 1, 0 OR '0', return true value '0' (not empty string is true), '0' AND 1
0 || '0' && 1

// -> false, (0 == false) = true, 1<1 = false
(+null == false) < 1;

//-> true, false AND true = false, false OR true
false && true || true

// -> false, false OR true = true, false AND true
false && (false || true);

//-> false, (0==false) = true, true < 1^5
(+null == false) < 1 ** 5