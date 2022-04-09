export default function typeAliasSapmle() {

    // 型エイリアス
    type Person = {
        name: string
        age: number
        country: string
    }

    const member1: Person = {
        name: 'Taro',
        age: 25,
        country: 'Japan'
    }

    const member2: Person = {
        name: 'John',
        age: 23,
        country: 'America'
    }

    console.log('メンバー1：', member1);
    console.log('メンバー2：', member2);

    // union と intersection
    type Member = {
        hp: number
        sp: number
        weapon: string
        skill: string
    }

    type NotMember = {
        hp: number,
        mp: number,
        weapon: string,
        magic: string
    }

    // 　union（どちらかの型を持つ）
    type Coarch = Member | NotMember

    // intersection（どちらの型も持つ）
    type Manager = Member & NotMember

    const a: Coarch = {
        hp: 100,
        sp: 30,
        weapon: '脚',　
        skill: 'スピード',
    }

    const b: Coarch = {
        hp: 100,
        mp: 30,
        weapon: '腕',　
        magic: 'パワーマジック'
    }

    const c: Manager = {
        hp: 100,
        sp: 20,
        mp: 40, 
        weapon: '頭',
        skill: 'シュート',
        magic: 'ミラクルシュート'
    }

    console.log('aさんは、', a)
    console.log('bさんは、', b)
    console.log('cさんは、', c)
}