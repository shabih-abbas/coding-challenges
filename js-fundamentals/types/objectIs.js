// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true){
    Object.is = function (a,b){
        function negZeroCheck(a,b){
            return Infinity/a == Infinity/b // -0 makes Infinity negative
    }
        function NaNCheck(a,b){
            // a valid number must be either greater than, less than or equal to any other valid number 
            return typeof a === "number" && typeof b === "number" && !(a===0 || a<0 || a>0) && !(b===0 || b<0 || b>0)
    }
        if(typeof a === "number" && typeof b === "number"){
            if(a === b) return negZeroCheck(a,b)
            return NaNCheck(a,b)
        }
        return a === b
        
    }
}

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
