var count =document.getElementById("atari");
//const number =[];
//const keybox=[keyName,keyValue]
//for(let i=1; i<=20;i++){
//var keyName["i"]="novisit";
//var keyValue["i"]=false;
//}
//letで定義している為、1度だけ定義すると思う。

const current_url =window.location.href //urlを取得
const nextsharp =current_url.indexOf("?"); //取得したurlの内「？」の位置を取得
const id =current_url.substring(nextsharp); //「？」の開始位置から終了までの文字列を取得。
const id_kazu =int(id)

//当たり数

const dataToSend = {
  "data": "id",
  "datakazu" :"id_kazu"
};

fetch('/add_data', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(dataToSend)
})
.then(response => response.json())
.then(data => {
  console.log(data); // バックエンドからの応答を処理
})
.catch(error => {
  console.error(error);
});




if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?1") {
  var keyName1 = 'visited';
  var keyValue1 = true;
  
  if (!localStorage.getItem(keyName1)) {
      //localStorageにキーと値を追加
      localStorage.setItem(keyName1, keyValue1);
  
      //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
  
      var count =count -1;
      
  } else {
      //ここに通常アクセス時の処理
      
  
  }
  }

if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?2") {
  const keyName2 = 'visited';
  const keyValue2 = true;
  
  if (!localStorage.getItem(keyName2)) {
      //localStorageにキーと値を追加
      localStorage.setItem(keyName2, keyValue2);
  
      //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
  
      let count =count -1;
      
  } else {
      //ここに通常アクセス時の処理
      
  
  }
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?3") {
    const keyName3= 'visited';
    const keyValue3 = true;
    
    if (!localStorage.getItem(keyName3)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName3, keyValue3);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?4") {
    const keyName4 = 'visited';
    const keyValue4 = true;
    
    if (!localStorage.getItem(keyName4)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName4, keyValue4);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?5") {
    const keyName5 = 'visited';
    const keyValue5 = true;
    
    if (!localStorage.getItem(keyName5)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName5, keyValue5);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?6") {
    const keyName6 = 'visited';
    const keyValue6 = true;
    
    if (!localStorage.getItem(keyName6)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName6, keyValue6);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?7") {
    const keyName7= 'visited';
    const keyValue7 = true;
    
    if (!localStorage.getItem(keyName7)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName7, keyValue7);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?8") {
    const keyName8 = 'visited';
    const keyValue8 = true;
    
    if (!localStorage.getItem(keyName8)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName8, keyValue8);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?9") {
    const keyName9= 'visited';
    const keyValue9 = true;
    
    if (!localStorage.getItem(keyName9)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName9, keyValue9);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?10") {
    const keyName10 = 'visited';
    const keyValue10 = true;
    
    if (!localStorage.getItem(keyName10)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName10, keyValue10);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?11") {
    const keyName11 = 'visited';
    const keyValue11 = true;
    
    if (!localStorage.getItem(keyName11)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName11, keyValue11);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?12") {
    const keyName12 = 'visited';
    const keyValue12 = true;
    
    if (!localStorage.getItem(keyName12)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName12, keyValue12);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?13") {
    const keyName13 = 'visited';
    const keyValue13 = true;
    
    if (!localStorage.getItem(keyName13)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName13, keyValue13);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?14") {
    const keyName14 = 'visited';
    const keyValue14 = true;
    
    if (!localStorage.getItem(keyName14)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName14, keyValue14);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?15") {
    const keyName15 = 'visited';
    const keyValue15 = true;
    
    if (!localStorage.getItem(keyName15)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName15, keyValue15);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?16") {
    const keyName16 = 'visited';
    const keyValue16 = true;
    
    if (!localStorage.getItem(keyName16)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName16, keyValue16);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?17") {
    const keyName17 = 'visited';
    const keyValue17 = true;
    
    if (!localStorage.getItem(keyName17)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName17, keyValue17);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?18") {
    const keyName18 = 'visited';
    const keyValue18 = true;
    
    if (!localStorage.getItem(keyName18)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName18, keyValue18);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?19") {
    const keyName19 = 'visited';
    const keyValue19 = true;
    
    if (!localStorage.getItem(keyName19)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName19, keyValue19);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }if (window.location.href === "http://syukatsu5797.html.xdomain.jp/?20") {
    const keyName20 = 'visited';
    const keyValue20 = true;
    
    if (!localStorage.getItem(keyName20)) {
        //localStorageにキーと値を追加
        localStorage.setItem(keyName20, keyValue20);
    
        //ここに初回アクセス時の処理かつ特定のURLが読み込まれたときに実行したいアクションをここに記述する
    
        let count =count -1;
        
    } else {
        //ここに通常アクセス時の処理
        
    
    }
    // 特定のURLが読み込まれたときに実行したいアクションをここに記述する
  }




//count event = new CustomEvent("qrcodeyomikomi")
//当たりは1～20番
/*
1. URLにパラメータをつけてQRコード化する。()
2. javascriptでカスタムイベントを作成する。（その中で、パラメータ付きのURLからアクセスしてきた場合に処理するイベント作る。QRコードからのアクセスと区別する為。）
カウントを1進める処理を作る
３．初回だけのみ作動する。　＋初回アクセス回数＝減らした数が＝になるようにする。　ポップアップメニューの作成。（1～100のリンクでログインした際に複数選択する）
特定のリンクでログイン→ポップアップメニューを開く→購入した1～100の数字のあるＱＲコードを入力してください。（1度行ったら大丈夫です。）→

サーバーにhtmlを乗せれた。余熱があればcssで加工する。
403エラーは、index.htmlにしないと生じる。サーバー側にアップロードするファイルを
jsQRをインストールしたら、いけると思われる。

ポップアップウインドウにQRコードを読み取りリーダー設置完了
読み取った際に、在庫を減らすコードを書く。
同時に読み取る方法と、読み取った際に在庫減らす。（１QRコードに対して1減るよ。）
もしかしたらこれ違うかも。　keynameをそれぞれ用意する必要がある。
CSS等でサイトの見栄え良くする。＋

*/
