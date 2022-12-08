from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import book_crud, models, schemas
from .database import SessionLocal, engine

# Normally i would structure backend more, have controllers folder, etcetc..
# but since this project is so tiny, i feel like it would complicate this more than help.
# So you just have to take my word for it :)

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

# Use this in Depends() to inject the singular open session into the request
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/books", response_model=list[schemas.Book])
async def get_books(db: Session = Depends(get_db)):
    books = book_crud.get_books(db)
    return books

@app.post("/books", response_model=schemas.Book, status_code=201)
async def create_book(book: schemas.BookBase, db: Session = Depends(get_db)):
    return book_crud.create_book(db, book=book)

@app.put("/books", status_code=204)
async def update_book(book: schemas.Book, db: Session = Depends(get_db)):
    book_crud.update_book(db, book=book)

@app.delete("/books")
async def delete_book(book: schemas.Book, db: Session = Depends(get_db)):
    book_crud.delete_book(db, book=book)
