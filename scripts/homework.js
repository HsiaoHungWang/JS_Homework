//homework1
export function bmiCalc(h, w) {
    const r = w / (h * h);
    let strMessage = "";
    if (r < 18.5) {
        strMessage = "太輕了!!";
    } else if (r >= 18.5 && r < 24) {
        strMessage = "標準體重!!";
    } else if (r >= 24 && r < 27) {
        strMessage = "體重過重!!";
    } else if (r >= 27 && r < 30) {
        strMessage = "輕度肥胖!!";
    } else if (r >= 30 && r < 35) {
        strMessage = "中度肥胖!!";
    } else if (r >= 35) {
        strMessage = "重度肥胖!!";
    } else {
        strMessage = "計算有誤!!";
    }

    return [r, strMessage];

}

//homework2
export function treeDrawing(x, y) {
    // if (x < 3) {
    //     return "";
    // }
    let tree = "";
    for (let i = 1; i <= x; i++) { //畫幾層
        for (let j = 1; j <= x * 2 - 1; j++) {  //x*2-1 最多要畫幾個^
            //第一層要畫四個空白 + 一個^ + 四個空白
            if (j <= x - i || j >= x + i) { //1<=4 || 1>=6
                tree += "&nbsp;&nbsp;";
            } else {
                tree += "^";
            }
        }
        tree += "<br>";
    }
    //畫樹幹
    for (let k = 1; k <= y; k++) {
        for (let j = 0; j < (x * 2) - 3; j++) { //7
            tree += "&nbsp;";
        }
        tree += "^^<br>";

    }

    return tree;
}

//homework3
export function guessNumber(theNumber) {
    while (true) {
        const guess = parseInt(window.prompt("請輸入猜測的數字(1~100)，輸入0離開遊戲 =>"));
        // if (theNumber == guess || guess == 0) {
        //     break;      //跳出迴圈
        // }
        if (isNaN(guess)) {
            alert("請輸入數字");
        } else {
            if (guess == 0) {
                alert("下次再來玩!!");
                break;
            } else if (theNumber == guess) {
                alert("猜中數字 = " + theNumber);
                break;
            } else if (guess > theNumber) {
                alert(guess + " 數字太大!")
            } else {
                alert(guess + " 數字太小!")
            }
        }

    }



}

//homework4
export function checkLeapYear(year) {
    var result = "";
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        result = "閏年";
    } else {
        result = "平年";
    }
    return result;
}

//homework5
export function Ninenine() {
    let myTable = "<table id='table99'><tr>";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            // myTable += `<td>${i} * ${j} = ${i * j}</td>`;
            myTable += `<td>${j} * ${i} = ${i * j}</td>`;
        }
        myTable += "</tr>"
    }
    myTable += "</table>";
    return myTable
}

//homework7 溫度轉換
export function temperatureConvert(degree, type) {

    let degreeChange = 0;
    if (type === "C") {
        degreeChange = degree * (9 / 5) + 32;
    } else {
        degreeChange = (degree - 32) * (5 / 9);
    }
    return degreeChange;
}

//homework8 密碼格式檢查
///^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
// ?= 叫做 無寬度右合樣(Positive Lookahead) 表示 字串右邊需和聲明(assertion)匹配
//(?=.*\d) 表示字串右邊會有一個數字
//(?=.*[a-z]) 表示字串右邊會有一個小寫英文字母
//(?=.*[A-Z]) 表示字串右邊會有一個大寫英文字母
//(?=.*[^a-zA-Z0-9]) 表示字串右邊會有一個非大小寫英文字母及數字的字元
//(?!.*\s) 表示字串右邊不能有空白
//.{8,15} 表示任意字元需為 8 到 15 字元
export function passwordCheck(password) {
    const pwdRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return pwdRegexp.test(password);
}

//homework9 電子郵件格式檢查
//RFC2822 Email Validation https://regexr.com/2rhq7
///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// ^\w+ 表示email開始可以是字母數字_，+ 表示[字母數字_]出現的次數是1次以上
//([\.-]?\w+)* => * 表示 ( )中標示的字元可以出現0次或1次以上
// [\.-]? 表示可以是 . 或 - ，?表示0次或1次， \w+ 前面說明過了
// \w{2,3} 表示[字母數字_]出現的次數是2次或3次
export function emailCheck(mail) {
    const mailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailRegexp.test(mail);
}

//homework10 計算年紀
export function ageCalc(birthday) {
    let birth = new Date(birthday);
    let today = new Date();

    //一年有多少毫秒 => 365.2425(天) * 24(小時) * 60(分) * 60(秒) * 1000(毫秒)
    //日期相減會得到毫秒 / 一年毫秒數 => 就會得到幾歲
    const yearMilliseconds = (today - birth) / (365.2425 * 24 * 60 * 60 * 1000);
    //Number.EPSILON
    //Number.EPSILON 是 JavaScript 能够表示的最小精度
    //這表示誤差如果小於這個值，就可以認為已經没有意義了，即不存在誤差了。
    //一般用在浮點數的計算，因為在JavaScript中浮點數的計算是不精確的

    //Math.round() 四捨五入取整數，如果要取得小數點一位數就要先乘上10，再做四捨五入，然後再除回10
    let age = Math.round((yearMilliseconds + Number.EPSILON) * 10) / 10;

    return age;
}