// ----repeat-----
function repeat(text, repetitions) {
    let output = "";
    for (let i = 0; i < repetitions; i++) {
        output = output + text;
    }
    return output;
}
repeat("hello", 3);

// ----containsChar----
function containsChar(text,char) {
    for (let i = 0; i < text.length; i++) {
         if(text[i] === char){
             return true;
         }
    }return false;
    
}
containsChar("hello","o");

// ----indexOfChar----
function indexOfChar(text, char) {
    for (let i = 0; i < text.length; i++) {
        if( char === text[i]){
            return i;
        }
    }return -1;
}
indexOfChar("asdlkjashdksjdhaksjdf","o")

// ----startsWith----
function startsWith(str, char) {
    if( str[0] === char){
        return true;
    }return false;
}
startsWith("hello","v")
        
// ----endsWith----
function endsWith(str, char) {
    for (let i = 0; i < str.length-1; i++) {
        if (char === str[str.length-1]) {
            return true;
        }
    }
    return false;
}
endsWith("hello","o")

// ----reverse----
function reverse(text) {
let output = "";
for (let i = text.length-1; i >= 0; i--) {
   output = output + text[i];
    }
    return output;
}
reverse("hello boy")

// ----removeChar----
function removeChar(text, char) {
    let output = "";
    for(let currentChar of text ){
        if( currentChar != char){
            output =output + currentChar; //output += currentChar;
        }
    }return output;
    
}
removeChar("hello","o")

// ----replaceChar----
function replaceChar(text, replace, replacer) {
    let output = "";
    for (let currentChar of text) {
      if(currentChar === replace){
          output += replacer; 
      }else{
          output += currentChar;
      }
    }return output;
}
replaceChar("hello","o","aaaaaaa")


// ---andra sätt---

function replaceChar(strings, source, destination){
    let newStrings = "";
    for( let i =0; i<strings.length; i++){
        if ( strings[i]!=source){
            newStrings += strings[i]
        }else
        newStrings += destination;
    }
return newStrings;
}

// let result= replaceChar("Hello World", "o", "y");
// console.log(result);

// ----substring----
function subString(text, start, stop) {
    let subString = "";
    for (let i = start ; i <= stop; i++) {
        subString = subString + text[i];
    }
    return subString;
}
// let result = subString("hello world", 3, 10);
// console.log(result);

// ----contains----
function contains(str, otherString) {
    let len = otherString.length;
    for (let i = 0; i < str.length; i++) {
        let t = subString(str, i, len - 1 + i);
        if(t === otherString){
            return true;
        }
    }return false;
}
// let result = contains("hello world","qld");
// console.log(result);

// ----remove----
function remove(str, otherString) {
    let newStrings = "";
    let len = otherString.length;
    for (let i = 0; i < str.length; i++) {
         let t = subString(str, i, len-1 + i );
        if(t != otherString){
            newStrings += str[i]
        }else{
            i = len-1 +i;
        }
    }return newStrings;
    }
// let result = remove("hello world", "wor");
// console.log(result)

// ----replace----
function replace(str, source, dest) {
    let newStrings = "";
    let len = source.length ;
    for (let i = 0; i < str.length; i++) {
        let t = subString(str, i, len-1 + i);
        if(t != source){
            newStrings += str[i];
        }else{
            newStrings = newStrings + dest; 
            i = i + source.length-1;
        }
        
    }return newStrings;
}
// let result = replace("hello world","ello","ail");
// console.log(result);

// ----encrypt----
function encrypt(str) {
    const consonantsLowerCase = "bcdefghijklmnopqrstuvwxyzåäö";
    const consonantsUpperCase = "BCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
    let newStrings = "";
    for (let char of str) {
        if(containsChar(consonantsLowerCase,char)){
            newStrings += char +"a"+ char;
        }else if(containsChar(consonantsUpperCase,char)){
            newStrings += char +"A"+ char; 
        }else{
            newStrings += char;
        }
    }return newStrings;
}
let result = encrypt("hej på dig");
console.log(result);


// ----decrypt----
function decrypt(str) {
    const consonants = "bcdfghjklmnpqrstvxyzBCDFGHJKLMNPQRSTVXYZ";
    let newStrings = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (containsChar(consonants, char)) {
            i += 2;
        }
        newStrings += char;
    }
    return newStrings;
}
let x = decrypt("hohejoj popå dodigog");
console.log(x)




// function decrypt(strings) {
//     let consonants = "bcdfghjklmnpqrstvxyzBCDFGHJKLMNPQRSTVXYZ" ;
//     let newStrings = "";
    
//     for (let i = 0; i < strings.length; i++) {
  
//       // Call previous function from above
//       let funccontchar = containsChar(consonants, strings[i]);
//       if (funccontchar) {
//         i += 2;
        
//       } 
//         newStrings += strings[i];
        
//       }
    
//     return newStrings;
//   }
  
//   function main13() {
//     console.log("output for decrypt: ");
//     let strings = "hohejoj popå dodigog";
  
//     let result = decrypt(strings);
//     console.log(result);
//   }
  
//   main13();
  
  