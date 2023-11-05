# 概要
私が、トレーディングカードを扱ったくじをフリマアプリの「magi」で販売していた際に、購入者にも残りの当たり数が見えればいいなと思い
QRコードを読み取ると、webサイトで残りの当たり数がわかるサイトを作成しましたが、完成には至っていません。
__※「magi」では他サイトに誘導することが禁止だった為利用はしていません…。__

本番環境では、まだ実装していません。
無料のレンタルサーバーではflaskをインストールすることが出来ない為です。今現在はwebフレームワークである「Flask」を使わずに上記のwebアプリ作成できるのか試行錯誤しています。

# 一言サービスコンセプト
「購入者や購入予定者に、商品の残り当たり数がわかるwebアプリ」

# 誰のどんな課題を解決するのか？
商品の購入者、購入予定者に商品の残りの当たり数を開示することで透明性、信頼性を高める為。

他の出品者と差別化する為。
# なぜそれを解決したいのか？
ギャンブル性のある商品は、当たりが入っているのか不信感が広がっていた。また、実際に購入してくれた人にしか信頼性が伝わらない課題がありました。

# どうやって解決するのか？
webアプリで作成することで、商品の出品者の不正を防ぐ。

# 　機能要件

__1.レスポンシブなUIデザイン__
アプリはモバイルデバイスに対応し、画面のサイズに応じて適切に表示される。

__2.同時読み取り機能__
複数購入者向けに、同時QRコードを読み取る機能があります。

__3.QRコードにデータ付与__
100個のQRコードを用意し、それぞれに一意のURLを付与しています。
また、初回のみQRコードを読み取ると残り当たり数のカウントが進むようになっています。

__4.動的のwebサイト__
データベースからデータを取得しサイト表示を変えています。

__使い方__
・各自で用意したデータベースを接続する為に、データベースのパスワードを自分のに設定。


__今後改善する点__

・QRコードを読み取った際に線を描画するが、それが固定されている点。

・QRコードにローカルサーバーのURLを指定する。(今現在はレンタルサーバーのURLになっている為。)


・~~QRコードを読み取った際の処理に関して、URLが一致した場合の記述を書く。（現状、パラメータがついたQRコードなら反応する為。）~~

・QRコードを読み取った際の処理が遅い。また、音やメッセージ等で知らせる機能を付ける。

・URLパラメータで当たり、はずれを判断しており、セキュリティがガバガバ。QRコードに複数付与する方法を見つける。

__理想の方法__
・QRコードにwebサイトのurlとデータベースのデータを付与する。
・QRコードが読み取られた際に、初回のみデータを変更し表示させる。
・どのQRコード読み取りリーダーでも違いがないようにするため、カスタムデータも難しい。
・URLパラメータだと、セキュリティが低いので嫌だ・・。


![FireShot Capture 008 - portfolio01 - 127 0 0 1](https://github.com/dog0922t/portfolio_1/assets/145114733/33d82886-52a8-4c84-8735-b2847ea3c44d)



<img width="960" alt="スクリーンショット 2023-10-14 145723" src="https://github.com/dog0922t/portfolio_1/assets/145114733/37493ff8-7b7f-49a3-9eeb-b0e017a20a39">
