from sqlalchemy.orm import Session
from . import models, schemas

# create, read, update and delete -methods for books db table.

def get_books(db: Session):
    return db.query(models.Book).all()

def create_book(db: Session, book: schemas.BookBase):
    db_book = models.Book(**book.dict())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book

def update_book(db: Session, book: schemas.Book):
    db_book = db.query(models.Book).get(book.id)
    db_book.title = book.title
    db_book.author = book.author
    db_book.description = book.description
    db.commit()
    return db_book

def delete_book(db: Session, book: schemas.Book):
    db.delete(db.query(models.Book).get(book.id))
    db.commit()
    