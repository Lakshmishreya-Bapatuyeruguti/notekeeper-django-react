# notekeeper-django-react

### Quick Demo: [ https://www.loom.com/share/0f22f6487d554aac8dc6e089a8fb751a?sid=33ad6d48-5493-46d5-80f9-42b32be640db]( https://www.loom.com/share/0f22f6487d554aac8dc6e089a8fb751a?sid=33ad6d48-5493-46d5-80f9-42b32be640db).
# Project Setup

## Frontend (React)

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Lakshmishreya-Bapatuyeruguti/notekeeper-django-react
    cd /notekeeper-django-react
    ```

2. **Navigate to the Frontend Folder:**
    ```bash
    cd frontend
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Run the Development Server:**
    ```bash
    npm start
    ```

   The frontend development server should be running at [http://localhost:3000](http://localhost:3000).

## Backend (Django)

1. **Navigate to the Backend Notekeeper Folder:**
    ```bash
    cd ../backend_notekeeper
    ```

2. **Create a Virtual Environment (Optional but recommended):**
    ```bash
    python -m venv venv
    ```

3. **Activate the Virtual Environment:**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install Django and Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

5. **Add .env file with below sample and enter details for postgres db:**
``` DB_NAME=
   DB_USER=
   DEBUG=
   HOST=
   PASSWORD=
   PORT=
   SECRET_KEY="django project seccret key"
   ```

7. **Apply Database Migrations:**
    ```bash
    python manage.py migrate
    ```

8. **Run the Django Development Server:**
    ```bash
    python manage.py runserver
    ```

   The backend development server should be running at [http://localhost:8000](http://localhost:8000).

## AWS Status
- created an aws ec2 instance for django backend and used nginx to route but had issues with gunicorn.conf and hence was returing bad request response

