type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

// 駒の位置を表すクラス
class Position {
    constructor(
        private suji: Suji,
        private dan: Dan,
    ) { }

    // パラメーターに渡された位置と現在の位置を比較するメソッド
    distanceFrom(potision: Position, player: Player) {
        if (player === 'first') {
            return {
                // (移動先のsujiの位置) - (現在のsujiの位置)
                suji: Math.abs(potision.suji - this.suji),
                // Danは文字列型のため、Numberに型変換
                dan: Math.abs(Number(potision.dan) - Number(this.dan))
            }
        } else {
            return {
                suji: Math.abs(potision.suji - this.suji),
                // 後手の場合、下から上に進んでいくため正負を反転させる
                dan: -(Math.abs(Number(potision.dan) - Number(this.dan)))
            }
        }
    }

// 駒を表す抽象クラス
abstract class Piece {
    // クラスを型として利用することが可能
    // 親クラスと子クラスのみアクセス可能
    protected position: Position

    constructor(
        private readonly player: Player,
        suji: Suji,
        dan: Dan
    ) {
        this.position = new Position(suji, dan);
    }

    // 駒が移動するメソッド
    moveTo(position: Position) {
        this.position = position;
    }

    // 移動できるかどうかを判定するメソッド
    // 具体的なメソッドの処理は実装せず、メソッドの返り値型を定義
    abstract canMoveTo(position: Position, player: Player): boolean
}

// 抽象クラスはインスタンス化することができない
// const a = new Piece('first', 1, '2');

class Osho extends Piece {
    // Oshoクラス内でcanMoveToメソッドを具体的に実装
    canMoveTo(position: Position, player: Player): boolean {
        // 移動先の位置(potision)と現在の位置(this.potision)を比較
        const distance = this.position.distanceFrom(position, player);
        // 移動先の位置と現在の位置の距離が1マス以内なら移動可能
        return (distance.suji < 2 && distance.dan < 2);
    }
}

class Game {
    private pieces = Game.makePieces()
    // メソッド
    private static makePieces() {
        return [
            new Osho('first', 5, '1'),
            new Osho('second', 5, '9')
        ]
    }
}

// 歩のクラス
class Fu extends Piece {
    canMoveTo(position: Position, player: Player): boolean {
        const fuDistance = this.position.distanceFrom(position, player);
        // 移動先と現在の歩の距離で段が1なら移動可能
        return (fuDistance.suji === 0 && fuDistance.dan === 1);
    }
}

// 成金のクラス
class Narikin extends Fu {
    canMoveTo(position: Position, player: Player): boolean {
        const narikinDistance = this.position.distanceFrom(position, player);
        return (
        // 移動先の位置と現在の位置の距離が1マス以内なら移動可能
        narikinDistance.suji < 2 && narikinDistance.dan < 2
        && (narikinDistance.suji !== 0 && narikinDistance.dan === -1)
        )
    }
}