# Book Full Stack App

Start back and frontends with the "start-project.sh" and input the python command you want used.
This will configure all required stuff to make this app work, given you have a new enough python and npm installations.

If you want to launch just backend, make sure to create and activate venv, run "pip install -r requirements.txt" in api folder and set env variable with "export DATABASE=books.db".
After this, just run "uvicorn api.main:app --reload --port 9000" in project root.

Launching frontend works with "npm install" and "npm start" in client folder.

"npm run start-all" starts both, but it needs the setup be done. The script handles it for you.

## Tests

Tests are run in backend with command "pytest" while in the virtual environment and api folder.
On the frontend they are run via "npm test"
