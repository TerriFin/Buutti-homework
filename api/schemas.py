from pydantic import BaseModel, constr

# Pydantic maps dicts to schemas (models) configured here.
# BookBase contains the "must have" attributes of a book.
# We could create a seperate "CreateBook" class to hold information only needed at the creation process of a db entry

class BookBase(BaseModel):
    title: constr(min_length=1)
    author: str
    description: str

class Book(BookBase):
    id: int

    class Config:
        orm_mode = True # This makes the schema check given data in ["attribute"] and .attribute forms, making it work with our orm.
        