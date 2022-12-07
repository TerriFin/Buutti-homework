from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/books", response_model=list[schemas.Book])
async def get_books(db: Session = Depends(get_db)):
    books = crud.get_books(db)
    return books

@app.post("/books", response_model=schemas.Book)
async def create_book(book: schemas.BookBase, db: Session = Depends(get_db)):
    return crud.create_book(db, book=book)

@app.put("/books", response_model=schemas.Book)
async def update_book(book: schemas.Book, db: Session = Depends(get_db)):
    return crud.update_book(db, book=book)

@app.delete("/books")
async def delete_book(book: schemas.Book, db: Session = Depends(get_db)):
    crud.delete_book(db, book=book)