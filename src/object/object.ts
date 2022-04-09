export default function objectSample() {

    // オブジェクトリテラル記法で型定義
    let person: {
        name: string,
        age: number
    } = {
        name: 'Taro',
        age: 30
    }
    console.log(person);

    // 値を更新
    person = {
        name: 'Jiro',
        age: 27
    }
    console.log('値を更新後： ', person);

    // オプショナル(?)とreadonly
    const person2 : {
        readonly firstName: string,
        lastName: string,
        age: number,
        gender?: string
    } = {
        firstName: "Saburo",
        lastName: "Sato",
        age: 32,
    }
    
    // 値の代入・更新
    // 代入可能
    person2.gender = 'male'
    // 読み取り専用プロパティのため、更新不可
    // person2.firstName = 'Shiro'

    console.log("わたしは、", person2, 'です');

    // インデックスシグネチャ
    const capitals: {
        [countryName: string]: string
    } = {
        Japan: 'Tokyo',
        Korea: 'Seoul',
        China: 'Beijing',
    }
    
    // キーとバリューの追加
    capitals.Canada = 'Ottawa'
    
    console.log(capitals.Japan);
    console.log(capitals.Korea);
    console.log(capitals.China);
    console.log(capitals.Canada); 
}