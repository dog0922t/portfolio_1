import qrcode
from PIL import Image
import os


# QRコードを生成する関数
def generate_qr_code(data,directory, filename):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="#ffffff")
    save_path = os.path.join(directory, filename)  # 保存先のパスを作成
    #new_dir ="C:\\Users\\Owner\\Documents\\web.test\\QRstock"
    img.save(save_path)

save_directory = "./QRstock"
url ="http://shukatsu5797.shop/" #QRコード先のリンク

for i in range(1,101):
    data = f"{url}/?{i}"  # 各識別番号に対するURL パラメータ（？以降）を付ける事で識別できる。
    filename = f"qr_code_{i}.png"  # 生成されるQRコードのファイル名
    generate_qr_code(data,save_directory, filename)
    
#生成されたファイル。

#for外で書かないと動作しない。
#img = Image.open('qrcode.png')
#img.show()
