export default function notExistSample() {
    // null
    let name = null;
    console.log("Name: ", typeof name, name);
    
    name = "Jiro";
    
    if (!name) {
        console.log(typeof name);
    } else {
        console.log("Nothing"); 
    }
    
    // undefined
    let i = undefined;
    console.log("i: ", typeof i, i);

    i = 10;

    if (!i) {
        console.log(typeof i);
    } else {
        console.log("Nothing"); 
    }
    
}