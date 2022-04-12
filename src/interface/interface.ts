// インターフェース
interface Bread {
    calories: number
}

// 宣言のマージ
interface Bread {
    type: string
}

 const breadA: Bread = {
     calories: 320,
     type: 'hard'
 }

// 継承できないため、交差型（union）で新たな型エイリアスを生成
type Chuka = {
    calories: number,
    spicyLebel: number
}

type Rice = {
    calories: number,
    gram: number
}

// Chuka と Rice の両方の方を持つエイリアス
type ChukaDon = Chuka & Rice;

const menuA: ChukaDon = {
    calories: 500,
    spicyLebel: 3,
    gram: 350
}

// インターフェースの継承
interface Book {
    page: number,
    title: string
}

// Book のインターフェースを継承
interface Magagine extends Book {
    cycle: 'weekly' | 'monthly'
}

const magagineA: Magagine = {
    page: 300,
    title: '週刊マガジンA',
    cycle: 'weekly'
}

// typeエイリアスの継承
type BookType = {
    page: number,
    title: string
}

interface HandBook extends BookType {
    theme: string
}

const cotrip: HandBook = {
    page: 150,
    title: 'ことりっぷ',
    theme: '旅行'
}

// classにinterfaceの型を定義
// implementsを使用する
class Comic implements Book {
    // フィールド
    page: number
    title: string

    // コンストラクタ
    constructor(page: number, title: string, private publishYear: number) {
        this.page = page
        this.title = title
    }

    // メソッド
    getPublishYear() {
         return this.title + "は" + this.publishYear + "年に発売されました。"
    }
}

// インスタンス化
const comicA = new Comic(200, "コミックA", 2016);