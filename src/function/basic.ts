// アロー関数
export const logMessage = (message: string): void => {
    console.log('アロー関数: ', message);
}

// アロー関数の省略記法
export const logMessageOther = (message: string): void => console.log('アロー関数の省略記法: ', message);

// 名前付きの関数
export function logMessage2 (message: string): void {
    console.log('名前付き関数: ', message);
}

// 関数式
export const logMessage3 = function (message: string): void {
    console.log('関数式: ', message);
}

// 型がnever
export const throwError = (message: string): never => {
    throw new Error(message);
}

// 呼び出しシグネチャ（省略記法）
type NewMessages = (message: string) => void
export const newMessage: NewMessages = (message) => {
    console.log('呼び出しシグネチャ（省略記法）：', message);
}

// 呼び出しシグネチャ（完全記法）
type NewMessage2 = {
    (message2: string): void
}
export const newMessage2: NewMessage2 = (message2) => {
    console.log('呼び出しシグネチャ（完全記法）：', message2);
}
