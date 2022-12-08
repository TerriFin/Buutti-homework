from fastapi.testclient import TestClient

from . import main

good_book_one = {
    "title" : "Harry Potter",
    "author": "J. K. Rowling",
    "description": "Story about wizards and witches"
}
good_book_two = {
    "title" : "Unknown Soldier",
    "author": "Väinö Linna",
    "description": "Story about the Winter War"
}
bad_book = {
    "title" : "",
    "author": "Some Dude",
    "description": "Not really a book"
}

client = TestClient(main.app)

def test_create_book_success():
    response = client.post("/books/", json=good_book_one)
    assert response.status_code == 201

    response = client.post("/books/", json=good_book_two)
    assert response.status_code == 201

    # The database has added id, so we will do that here too.
    good_book_one["id"] = 1
    good_book_two["id"] = 2

def test_create_book_failure():
    response = client.post("/books/", json=bad_book)
    assert response.status_code == 422

def test_get_books():
    response = client.get("/books/")
    assert response.status_code == 200
    assert len(response.json()) == 2

def test_update_book_works():
    response = client.get("/books/")
    assert response.status_code == 200
    assert response.json()[0] == good_book_one

    good_book_one["title"] = "Unkown Soldier II"
    response = client.put("/books/", json=good_book_one)
    assert response.status_code == 204

    response = client.get("/books/")
    assert response.status_code == 200
    assert response.json()[0] == good_book_one

# client.delete no longer supports json, so we use this instead
# https://github.com/tiangolo/fastapi/issues/5649
def test_delete_book_works():
    response = client.request("DELETE", "/books/", json=good_book_one)
    assert response.status_code == 200

    response = client.get("/books/")
    assert response.status_code == 200
    assert len(response.json()) == 1
    assert response.json()[0] == good_book_two
