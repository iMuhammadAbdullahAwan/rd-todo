# 📝 Todo App

A full-stack Todo application built with **Next.js**, **Tailwind CSS**, and **Django**.

---

## ⚙️ Setup Instructions

### 🔧 Backend (Django)

1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run database migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

---

### 🌐 Frontend (Next.js)

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🌍 Access Points

- **Frontend App**: [http://localhost:3000](http://localhost:3000)  
- **Backend API**: [http://localhost:8000/api/todos/](http://localhost:8000/api/todos/)  
- **Django Admin**: [http://localhost:8000/admin/](http://localhost:8000/admin/)  
  > Create a superuser using:
  > ```bash
  > python manage.py createsuperuser
  > ```

---

## 🧱 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Axios  
- **Backend**: Django, Django REST Framework  
- **Database**: SQLite (with optional PostgreSQL upgrade)

---

## 📝 Additional Notes

- **Environment Variables**  
  - Use `process.env` in Next.js and `os.environ` in Django for secrets and config values.

- **Deployment**  
  - Backend: Deploy with Heroku or Render  
  - Frontend: Deploy with Vercel  
  - Ensure CORS is properly configured in production

- **Database**  
  - For production, consider switching to PostgreSQL  
    ```bash
    pip install psycopg2
    ```
  - Update `settings.py` accordingly.

- **Error Handling**  
  - Add toast notifications or alerts in the frontend  
  - Implement custom error responses in the backend

- **Authentication**  
  - Use Django's built-in auth system or libraries like `dj-rest-auth` for user authentication

---

## 🧾 Commands Summary

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install django djangorestframework django-cors-headers
django-admin startproject todo_api .
python manage.py startapp todos
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npx create-next-app@latest .
npm install axios
npm run dev
```
