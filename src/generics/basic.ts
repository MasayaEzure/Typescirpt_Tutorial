export default function genericsBasicSample() {
    //  ジェネリクス型を使用しない場合
    const stringReduce = (array: string[], initalValue: string): string => {
        let result = initalValue;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }
    console.log('ジェネリクスを使用しない場合：', stringReduce(["a ", "b ", "c ", "d ", "e"], ""));

    // ジェネリクス型を使用する場合
    type GenericReduce<T> = {
        (array: T[], initialValue: T): T
    }

    // 文字列型をバインド
    const genericStringReduce: GenericReduce<string> = (array, initalValue) => {
        let result = initalValue;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }
    console.log('ジェネリクスを使用する場合：', genericStringReduce(["あ ", "い ", "う ", "え ", "お"], "")); 
    
    // 数値型をバインド
    const genericNumberReduce: GenericReduce<number> = (array, initalValue) => {
        let result = initalValue;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }
    console.log('ジェネリクスを使用した数値型の場合：', genericNumberReduce([10, 20, 30, 40, 50], 0));

    // 完全な呼び出しシグネチャ（個々のシグネチャに対してジェネリック型を割り当てる）
    type GenericSample1 = {
        <T>(array: T[], initialValue: T): T
        <U>(array: U[], initialValue: U): U
    }

    // 呼び出しシグネチャの省略記法
    // すべてのシグネチャに対してジェネリクスを割り当てる
    type GenericSample2<T> = (array: T[], initalValue: T) => T
    // 個々のシグネチャに対してジェネリック型を割り当てる
    type GenericSample3 = <T>(array: T[], initalValue: T) => T
}
