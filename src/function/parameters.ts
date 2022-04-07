import { toUSVString } from "util";

// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
    if (userId === "123") {
        console.log('isUserSignedIn: ', userId, ':', username);
        return true;
    } else {
        console.log('User is not signed in…');
        return false;
    }
}

// デフォルトパラメーターを持つ関数
// username に初期値が設定されている
export const isUserSignedIn2 = (userId: string, username: string = 'NO_NAME'): boolean => { 
    if (userId === "123") {
        console.log('isUserSignedIn2: ', userId, ':', username);
        return true;
    } else {
        console.log('User is not signed in (isUserSignedIn2)');
        return false;
    }
}

// レストパラメーターを持つ関数
export const sumProductPrice = (...productsPrice: number[]) : number => {
    return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
        return prevTotal + productsPrice;
    }, 0);
}