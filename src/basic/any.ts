export default function anySample() {
    // any型：基本的に使用しない
    let name: any = "aaa";
    console.log("any: ", typeof name, name)
    
    name = 100
    console.log("any: ", typeof name, name)
    
    // unknown型
    const maybeNumber: unknown = 10;
    console.log("unknown: ", typeof maybeNumber, maybeNumber);
    
    const isFoo = maybeNumber === name;
    console.log("unknown: ", typeof isFoo, isFoo);
    
    // 型が一致しているかの確認
    if (typeof maybeNumber === 'number') {
        const sum = maybeNumber + 10;
        console.log("unknown: ", typeof maybeNumber, maybeNumber);
    }
}