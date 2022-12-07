from sqlalchemy import CheckConstraint, Column, Integer, String
from sqlalchemy.orm import validates

from .database import Base

# This defined the "books" table, and how data is stored in it.
# I also added in validation, the title has to be at least one character.

class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, CheckConstraint('title>0'))
    author = Column(String)
    description = Column(String)

    @validates("title")
    def validate_title(self, key, title):
        if len(title) == 0:
            raise ValueError("Title must have at least one character")
        return title
        