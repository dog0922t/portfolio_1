from flask import Flask,render_template
import pymysql

app =Flask(__name__, template_folder="templates/entries") #デフォルトでは[templates]フォルダを参照する為、正確なパスを指定する。
app.config.from_object('flask_blog.config')

def getConnection(): #mysqlに接続
    return  pymysql.connect(
        host="127.0.0.1",
        user="root",
        password="****",#パスワード 自身のパスワード、データベース名を記載する。
        database="****",#データベース名
        cursorclass = pymysql.cursors.DictCursor
    )
@app.route("/")

def select_sql():
# カーソルを作成してクエリを実行
    connection = getConnection()
    query = "SELECT all_hit_number,rest_hit_number,all_number FROM 在庫 where id=0" 
    cursor= connection.cursor()
    cursor.execute(query)
    data_atari = cursor.fetchall()
    
    cursor.close()
    connection.close()   # データベース接続をクローズ

    return render_template('index.html',data_atari=data_atari) # templatesフォルダ内のindex.htmlを表示する(サーバーに表示する為にindex、サーバーに繋げないならai.htmlに変える)

import flask_blog.views

