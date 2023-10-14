from flask_blog import db
class Entry(db.Model):
    __tablename__ = 'count'
    id = db.Column(db.Integer,primary_key=True)
    title = db.Column(db.String(50),unique=True)
    text = db.Column(db.Text)
    
    def __init__(self, title=None,text=None):
        self.title = title
        self.text = text
        

    def __repr__( self):
        return '<Entry id:{} title:{} text:{}>'. format( self.id, self. title, self. text)
    


