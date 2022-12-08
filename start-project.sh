#!/bin/sh

read -p "Please insert the python command to be used [python3]: " PYTHON
PYTHON=${PYTHON:-python3}

cd api/

$PYTHON -m venv ./venv
source venv/bin/activate

pip install --upgrade pip
pip install -r requirements.txt

cd ../client/

npm install

export DATABASE=books.db
npm run start-all