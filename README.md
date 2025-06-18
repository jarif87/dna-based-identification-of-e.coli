E. coli Prediction via Genome Sequences
=======================================

A Django-based web application with a single app `myapp`, designed to predict
the presence of E. coli in DNA sequences using a machine learning model. Users
can input genome sequences through a web form, and the app returns a prediction:
"Detected" if E. coli is present, or "Not Detected" otherwise. The project
features a responsive, biology-themed interface with client-side validation.

All project files were generated using a Python script named `project.py`
outside the main project directory.

Table of Contents
-----------------
- Overview
- Features
- Project Structure
- Setup Instructions
- Usage
- Dependencies
- File Generation
- Contributing
- License

Overview
--------
This Django application uses a pre-trained machine learning model to detect
E. coli from DNA sequences. Input sequences are encoded with a OneHotEncoder
(`onehotencoder.pkl`) and passed to the prediction model (`sustain.py`).
The frontend includes responsive design and JavaScript-based input validation.

Features
--------
- Predicts E. coli presence from raw DNA input
- Client-side validation (accepts only A, T, C, G)
- Modern responsive web UI
- Encoded DNA inputs using a OneHotEncoder
- Uses Django framework for routing and views

Project Structure
-----------------
```
myproject/
├── manage.py
├── requirements.txt
├── README.md
├── .gitignore
├── myproject/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
├── myapp/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── tests.py
│   ├── urls.py
│   ├── onehotencoder.pkl
│   ├── sustain.py
│   ├── migrations/
│   │   ├── __init__.py
│   │   └── 0001_initial.py
│   ├── static/
│   │   ├── css/style.css
│   │   ├── js/script.js
│   │   └── images/
│   └── templates/
│       └── index.html

```
Setup Instructions
------------------
1. Clone the repository:
   git clone https://github.com/your-username/e-coli-prediction.git
   cd e-coli-prediction

2. Create and activate a virtual environment:
   python -m venv venv
   source venv/bin/activate         # On Windows: .\venv\Scripts\activate

3. Install dependencies:
   pip install -r requirements.txt

4. Run migrations:
   python manage.py migrate

5. Collect static files:
   python manage.py collectstatic

6. Start the server:
   python manage.py runserver

7. Open the app in your browser:
   http://127.0.0.1:8000/

Usage
-----
- Visit: http://127.0.0.1:8000/
- Input a DNA sequence (only A, T, C, G characters)
- Submit to receive a result: "Detected" or "Not Detected"

Alternative URL:
- http://127.0.0.1:8000/home/
- Admin panel: http://127.0.0.1:8000/admin/ (requires superuser login)

Example DNA Sequences:
- ttaacattaataaataaggaggctctaatggcactcattagccaatcaatcaagaac
- ttactagcaatacgcttgcgttcggtggttaagtatgtataatgcgcgggcttgtcg

Dependencies
------------
Main dependencies (from requirements.txt):
- Django==5.2.3
- pandas
- scikit-learn
- numpy
- tensorflow (if used in sustain.py)

Ensure compatibility with Python 3.11.

File Generation
---------------
All Django files, templates, and static assets were generated using the
Python script `project.py` located outside the main project directory.
This script automates setup and file creation for rapid deployment.


