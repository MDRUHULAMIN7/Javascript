function sayHi(n){
    if(n==0){
        return
    }
    // console.log('hi, iam calling')
    sayHi(n-1)
}

sayHi(10)


// sayHi ekta recursive function, jeta ekta parameter number n ney.

// Jodi n == 0 hoy, tahole kichu na kore return kore — mane function ta stop hoye jay.

// Jodi n zero na hoy, tahole:

// console.log('hi, iam calling') — eta console e ekta message print kore.

// Tarpor sayHi(n-1) call kore — mane n ek komiye abar function ta ke call kore.

// Ei vabe function ta n bar nijeke call kore, joto bar porjonto n == 0 na hoy.

function sum(n){
    if(n==4){
        return 1
    } 
    // console.log(n-1,"n-1")
    // console.log(n,"n")
    // console.log(n + sum(n-1),"res")
    return n + sum(n-1)

}

console.log(sum(5))

/*akhane amra sum(5) dara call korle ata parameter hisabe chole gelo 
sum(n) akhane tarpor 

if(n==1){
    return 1
} 
akhane jeheto condition sotti holona tai se if ar vitore dhuklona 

return n + sum(n-1) ata return korlo 5 + sum(5-1) = 5 + sum(4)

abar sum(4) function call holo, abar condition sotti holo na 

tai return n + sum(n-1) ata return korlo 4 + sum(4-1) = 4 + sum(3)

abar sum(3) function call holo, abar condition sotti holo na 

tai return n + sum(n-1) ata return korlo 3 + sum(3-1) = 3 + sum(2)

abar sum(2) function call holo, abar condition sotti holo na 

tai return n + sum(n-1) ata return korlo 2 + sum(2-1) = 2 + sum(1)

abar sum(1) function call holo, abar condition sotti holo and return holo 1

sum(1) return korlo 1

sum(2) er moddhe return holo 2 + 1 = 3

sum(3) er moddhe return holo 3 + 3 = 6

sum(4) er moddhe return holo 4 + 6 = 10

sum(5) er moddhe return holo 5 + 10 = 15

call phase

sum(5)
  ↓
sum(4)
  ↓
sum(3)
  ↓
sum(2)
  ↓
sum(1) → return 1
  ↑
sum(2) → 2 + 1 = 3
  ↑
sum(3) → 3 + 3 = 6
  ↑
sum(4) → 4 + 6 = 10
  ↑
sum(5) → 5 + 10 = 15 

return phase */

function sum(n){
    if(n==1){
        return 1
    } 
   
    return n * sum(n-1)

}

console.log(sum(5))