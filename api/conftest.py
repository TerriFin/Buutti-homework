import os

# Create a seperate database for tests and delete it when no longer needed.

def pytest_sessionstart(session):
    os.environ["DATABASE"] = "test_books.db"

def pytest_sessionfinish(session, exitstatus):
    os.environ["DATABASE"] = "books.db"
    os.remove("test_books.db")
