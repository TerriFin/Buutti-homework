from pydantic import BaseModel, constr

class BookBase(BaseModel):
    title: constr(min_length=1)
    author: str
    description: str

class Book(BookBase):
    id: int

    class Config:
        orm_mode = True