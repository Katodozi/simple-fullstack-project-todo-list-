# Simple Fullstack Todo List Project

A simple fullstack todo list web application built with **React.js** frontend and **Django REST Framework** backend.

## 🏗️ Project Structure

simple-fullstack-project-todo-list-/
├── backend/ # Django REST API
├── frontend/ # React frontend
├── Pipfile # Python dependencies (backend)
└── Pipfile.lock # Python lock file

text

## 🚀 Quick Start

### Backend Setup (Django)
```bash
cd backend
pip install pipenv  # if not installed
pipenv install
pipenv shell
pipenv run python manage.py migrate
pipenv run python manage.py runserver

### Backend Setup (Django)
bash
cd frontend
npm install
npm start
Tech Stack
Frontend: React.js
Backend: Django REST Framework
Dependencies: Pipenv (Python)

Features
Todo CRUD operations

REST API endpoints

Responsive React UI

MongoDB/PostgreSQL ready (configurable)

API Endpoints
text
GET    /api/todos/           # List todos
POST   /api/todos/           # Create todo  
GET    /api/todos/<id>/      # Get todo
PUT    /api/todos/<id>/      # Update todo
DELETE /api/todos/<id>/      # Delete todo
Running the Project
Backend: http://localhost:8000

Frontend: http://localhost:3000

Requirements
Python 3.8+

Node.js 16+

Pipenv

MongoDB (or PostgreSQL/SQLite)

License
MIT License
