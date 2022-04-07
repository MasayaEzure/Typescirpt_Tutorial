// import Hello from './aaa';

// const root = document.getElementById("root");
// const hello = new Hello('Hello world');
// hello.sayHello(root);

// 型定義
// import {notExistSample, primitiveSample, anySample} from './basic';

// primitiveSample();
// notExistSample();
// anySample();

// 関数の型定義
import { logMessage, logMessageOther, logMessage2, logMessage3, newMessage, newMessage2 } from './function/basic';
import { isUserSignedIn, isUserSignedIn2, sumProductPrice } from './function/parameters';

logMessage('Taro');
logMessageOther('T-Taro');
logMessage2('Jiro');
logMessage3('Saburo'); 

isUserSignedIn("123", "Taro");
isUserSignedIn("0234");
isUserSignedIn2('123');

const sum = sumProductPrice(1, 5, 10, 20, 50, 100);
console.log('Fucntion sumProductsPrice is ', sum);

newMessage('TARO');
newMessage2('JIRO');
