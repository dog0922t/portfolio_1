from flask import Flask, jsonify , request
from flask import render_template
import mysql.connector

app = Flask(__name__) #ここのappの名前とファイル名が一致していないためエラー起きたかも

@app.route('')
def index():
    # MySQLデータベースに接続
    db_connection = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    
    password="Toyofuku0922",#パスワード
    database="qr番号"#データベース名
    )

# カーソルを作成してクエリを実行
    cursor = db_connection.cursor()
    query = "SELECT 残り当たり数 FROM 在庫"
    cursor.execute(query)
    result = cursor.fetchall()
    db_connection.commit()
    cursor.close()
    db_connection.close()   # データベース接続をクローズ
    data=result

    return render_template('index.html',data=data) # templatesフォルダ内のindex.htmlを表示する(サーバーに表示する為にindex、サーバーに繋げないならai.htmlに変える)

if __name__ == '__main__':
    app.run(debug=True)




#フロントエンドから1～20のidつまり当たりなら、idと当たりidをデータでPythonに送り、送られたデータを基にPythonからデータベースにsqlで送る。
#当たり数
@app.route('/add_data', methods=['POST'])
def add_data():
    try:
       # MySQLデータベースに接続
       db_connection = mysql.connector.connect(
       host="127.0.0.1",
       user="root",
    
       password="Toyofuku0922",#パスワード
       database="qr番号"#データベース名
       )

# カーソルを作成してクエリを実行
       cursor = db_connection.cursor()

       data = request.get_json()
       name = data.get('id')
       data_kazu = data.get("id_kazu")

        # トランザクションを開始
       db_connection.start_transaction()
       try:
          if data_kazu<21:
    # データベースにデータを挿入
             insert_query = "INSERT INTO 識別 (qrコード識別番号,当たりかはずれ) VALUES (%s,1)"
             update_query ="UPDATE 在庫 SET 残り当たり数 = 全当たり数-(SELECT COUNT(*) FROM 識別 WHERE 当たりかはずれ =1)"
             query = "SELECT 残り当たり数 FROM 在庫"

             cursor.execute(insert_query,(name,))
             cursor.execute(update_query)
             cursor.execute(query)
             result = cursor.fetchall()
             db_connection.commit()  # コミットする

             cursor.close()
             db_connection.close()   # データベース接続をクローズ



             response_data = {"message": "データをデータベースに挿入しました"}
             return jsonify(result,data=result) 
    
    
          elif data_kazu>=21:
    # データベースにデータを挿入
             insert_query = "INSERT INTO 識別 (qrコード識別番号,当たりかはずれ) VALUES (%s,0)"
      

             cursor.execute(insert_query,(name,))
             db_connection.commit()

             cursor.close()
             db_connection.close()

             response_data = {"message": "データをデータベースに挿入しました"}
             return jsonify(response_data)
          
       except Exception as e:
            # エラーが発生した場合、トランザクションをロールバック
            db_connection.rollback()
            return str(e)

    except Exception as e:
        return str(e)
    

if __name__ == '__main__':
    app.run(debug=True)






#　html等で外観を整えて、javascriptでユーザーインターフェイス（視覚やユーザーからのアクションの動きをwebに付ける。）
#データベースをmyq\sqlを使って作成し、sql言語やworkbenchでデータベースを編集、操作する。
#  その後、python,ruby、php等のバックエンドプログラミング言語を使ってデータベースにアクセス、dataを取得する命令を書く。
#dataを追加する方法と、dataを参照して処理する方法。
