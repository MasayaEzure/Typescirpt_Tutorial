export default function primitiveSample() {
    // 文字列型
    let name: string = "Taro";
    console.log("Name: ", typeof name, name);
    
    // 数値型
    let age: number = 25;
    console.log("Age: ", typeof age, age);
    
    // 真偽値型
    const isOver20: boolean = age >= 20;
    console.log("isOver20: ", typeof isOver20, isOver20);
    
}