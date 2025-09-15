
// String 

'ddddddddddd' ;
"fdfesrsetgsrg" ;

// var str = 'hello world' ;
// var str2 = String('some')

// var n = 10;
// var str3 = n.toString() ;
// var str4 = String(n)
// var str5 =new String(n)
// console.log(str3,str4,str5) ;

/* 
    String methods

    ai khane onek vabe string declare kora jai jemon 
    var str = 'hello world' ; letaral string 
    var str2 = 'hello world' ;
    var str3 =  String('hello world') ; using String Construictor
*/


// Escape Notation //


// var str = 'hello 'world'' ; ai khane 'world text unwanted js ar syntax ar birudhe chole jasse syntax error'
// var str2 = 'hello \'world\'' ;  ai vabe escape notation use kora jai tahole vitore text single ba double qoute ar modhe dekhano jabe
var str2 = 'hello \'world\''
var str3 = 'hello \"world\"'

// var str4 = 'hello \n world' ; ai vabe escape notation use kora jai tahole new line create hobe \n ar pore 
var str4 = 'hello \n world' ;

// var str5 = 'hello \t world' ; ata /t akta tab ar moto space dea diba majkhane 
var str5 = 'hello \t world' ;


// var str6 = 'hello \r world' ; ata /r akta carriage return dea diba ar madhome world hello ke over right kore jar fole cursor world ar age chole jai hello ak prokar bad pore jai 
var str6 = 'hello \r world' ;

// var str7 = 'hello \v world' ; ata /r ar ultota kore
var str7 = 'hello \v world' ;

// var str8 = 'hello\bworld' ; ata /b akta backspace dea diba ar madhome world hello ke over left kore jar fole cursor world ar age chole jai hello ak prokar bad pore jai
var str8 = 'hello\b world' ;

// var str9 = 'hello\f world' ;প্রথমে লেখা হবে hello
// তারপর \f → ফর্ম ফিড, যেটা প্রিন্টার বা টার্মিনালে পেজ পরিবর্তনের মতো আচরণ করে
// তারপর লেখা হবে world 
var str9 = 'hello\fworld' ;



//** String Comparison */

// Javascript use Lexicographic System to Compare to String
// var a = 'baaaZ'
// var b = 'aaaz'
// console.log(a > b)

//console.log('001' == 1) //aikahne '001' ke compare korar somoy number a convert kore compare kortese
//console.log('001' === 1) //aikahne '001' ke compare korar somoy number a convert kore compare kortese na
//console.log('001' !== 1) //aikahne '001' ke compare korar somoy number a convert kore compare kortese na

/* ***Javascript Built in String Method*** */

var a = 'I am'
var b = "Ruhul Amin"
var c = a.concat(' ',b) // concat method duita string ke jora lagai 

var d = c.substring(4,6) // substring method ar madhome c variable 4 number character theke 8 number character projontto nissa
//var d = c.substring(4) // ai vabe dila substring method ar madhome c variable 6 number character theke sesh  projontto nissa


//console.log(c.charAt(5)) // ai chartAt method ar madhome koi character number dea oi character dekhte pari

//console.log(c.indexOf('R')) // ai indexOf method ar madhome R ke search korar jonne index number dea diba

//console.log(c.startsWith('I')) // ai startsWith method ar madhome I ke search korar jonne true false dea diba //true
//console.log(c.endsWith('f')) // ai endsWith method ar madhome n ke search korar jonne true false dea diba //false 

//console.log(c.includes('R')) // ai includes method ar madhome R ke search korar jonne true false dea diba //true

//console.log(a.toUpperCase()) // ai toUpperCase method ar madhome a variable er modhe joto gulo character thakbe oigula capital letter kore diba
//console.log(a.toLowerCase()) // ai toLowerCase method ar madhome a variable er modhe joto gulo character thakbe oigula small letter kore diba

var str10 = '   I am Ruhul Amin   '
//console.log(str10.trim()) // ai trim method ar madhome str10 variable er modhe joto gulo space thakbe oigula remove kore diba clear string diba

var e = "i am ruhul how,are.you"
// string array te rupantor korte use hoi 
//console.log(e.split(" ")) //[ 'i', 'am', 'ruhul', 'how,are.you' ]
//console.log(e.split(",")) //[ 'i am ruhul how', 'are.you' ]
//console.log(e.split(".")) //[ 'i am ruhul how,are', 'you' ]

/*  How to get string length */


var f = "some string some"
var res = (f.charAt(31)) //faka
console.log(typeof(res)) // string

var length = 0

while(true){
     console.log(f.charAt(length))
    if(f.charAt(length) == ''){
       
        break
    }
    length++
}
console.log(length) // 20
