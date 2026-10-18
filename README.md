# Cars Dealership Capstone

A full-stack dealership directory and review application using Django REST Framework and React.

## Requirements
- Python 3.10+
- Node.js 18+
- npm

## Backend
```bash
cd server
python -m venv .venv
# Windows PowerShell: .venv\Scripts\Activate.ps1
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Backend API: http://127.0.0.1:8000/

## Frontend
In another terminal:
```bash
cd server/frontend
npm install
npm start
```
Frontend: http://localhost:3000/

## Demo API
- `GET /djangoapp/dealers/`
- `GET /djangoapp/dealers/<id>/`
- `GET /djangoapp/dealers/<id>/reviews/`
- `GET /djangoapp/dealers/?state=Kansas`
- `POST /djangoapp/reviews/`
- `POST /djangoapp/analyze_review/`

Use Django admin at `/admin/` to manage dealers. Do not use demo credentials in production.
