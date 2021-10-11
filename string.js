// ----Repeat----

// function repeat(text,repetitions){
//     let output="";
//     for(let i=0; i<repetitions; i+=1) {
//          output+=text;
//     }
//     return output;
// }
// function main(){
//     let x=repeat("hello" ,5)
// }
// main();


// ----containsChar----

// function containsChar(text,character){
//     for(let i=0; i<=text.length;i++){
//         if(character==text[i]){
//             return true
//         }
//     } 
//     return false
// }
// function main(){
//     let x=containsChar("hello","o");
// }
// main();



// -----indexOfChar----

// function indexOfChar(text,character){
//     for(let i=0; i<=text.length-1; i++){
//         if(character==text[i]){
//             return i;
//         }
//     }return -1;
// }
// function main(){
//     let x=indexOfChar("goodbye","c");
// }
// main();



// ----startWith----

// function startWith(text,character){
//     for(let i=0; i<=text.length-1;i++){
//         if( character==text[0]){
//             return true
//         }
//     }return false;
// } 
// function main(){
//     let x=startWith("imse vimse","b");
// }
// main();   



// ????????????????????????????????????

function startWith(text,character){
        return text[0]==character;
}         
function main(){
    let x= startWith("imse vimse","i")
}
main();
  



// function endsWith(text, char) {

//         if (text[text.length - 1] == char) {
//             return true;
//         }
//         return false;
//     }
//     function main(){
//             let x=endsWith("imse vimse","s");
//         }
//         main();


// ----endsWith----

// function endsWith(text,character){
//     for(let i=0; i<=text.length-1; i++){
//         if(character==text[text.length-1]){
//             return true;
//         }
//     }return false;
// }
// function main(){
//     let x=endsWith("imse vimse","s");
// }
// main();




// ----reverse----

function reverse(text){

}