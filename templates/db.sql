SELECT * FROM qr番号.在庫;
SET 残り当たり数 = 全当たり数 - (SELECT COUNT(*) FROM 識別) ;