let a = Number(prompt ("Zadejte první číslo"))
let b = Number(prompt ("Zadejte druhé číslo"))
let c = Number(prompt ("Zadejte třetí číslo"))


const max3 = (a,b,c) => {
    if (a > b ){
        if ( a > c){
            return a
        }else{
            return c
        }
    }else{
        if ( b > c ){
            return b
        }else{
            return c
        }
    }
}

console.log (max3(a,b,c))