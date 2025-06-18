
# E. coli Prediction through Genome Sequences

A Django project with a single app, \`myapp\`, designed to predict the presence of *E. coli* in a given DNA sequence using a machine learning model. Users can input a genome sequence via a web interface, and the application returns a prediction indicating whether *E. coli* is detected ("Detected" for positive, "Not Detected" for negative). The project features a modern, biology-themed interface with client-side validation and responsive design. All project files were generated programmatically using a Python script (\`project.py\`) outside the main project.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [File Generation](#file-generation)
- [Contributing](#contributing)
- [License](#license)

## Overview
This Django application leverages a pre-trained machine learning model to predict *E. coli* presence based on genome sequences. The backend uses Django to handle form submissions, process sequences with a \`OneHotEncoder\` (stored in \`onehotencoder.pkl\`), and make predictions using a model defined in \`sustain.py\`. The frontend features a clean, responsive interface with client-side validation to ensure input sequences contain only valid nucleotides (A, T, C, G).

All project files, including Django configurations, static files, and templates, were generated using a Python script (\`project.py\`) outside the main project directory, streamlining the setup process.

## Features
- **Genome Prediction**: Predicts *E. coli* presence from DNA sequences using a machine learning model.
- **User-Friendly Interface**: Modern, biology-themed design with a centered form and clear result display.
- **Client-Side Validation**: Ensures input sequences contain only A, T, C, G (case-insensitive) using JavaScript.
- **Responsive Design**: Adapts to desktops, tablets, and mobile devices.
- **Static File Support**: Serves CSS and JavaScript for styling and interactivity.
- **Django Backend**: Robust handling of form submissions and model predictions.

## Project Structure
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
│   │   ├── 0001_initial.py
│   ├── static/
│   │   ├── css/
│   │   │   ├── style.css
│   │   ├── js/
│   │   │   ├── script.js
│   │   ├── images/
│   └── templates/
│       ├── index.html
```

- **myproject/**: Project settings and configuration.
- **myapp/**: Main application with views, models, and templates.
  - \`views.py\`: Handles form submissions and model predictions.
  - \`sustain.py\`: Defines the machine learning model.
  - \`onehotencoder.pkl\`: Pre-trained \`OneHotEncoder\` for data preprocessing.
  - \`static/\`: CSS, JS, and image assets.
  - \`templates/\`: HTML templates, including \`index.html\` for the prediction interface.

## Setup Instructions
1. **Clone the Repository**:
   \`\`\`bash
   git clone https://github.com/your-username/e-coli-prediction.git
   cd e-coli-prediction
   \`\`\`

2. **Create and Activate a Virtual Environment**:
   \`\`\`bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   \`\`\`

3. **Install Dependencies**:
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

4. **Run Migrations**:
   \`\`\`bash
   python manage.py migrate
   \`\`\`

5. **Collect Static Files**:
   \`\`\`bash
   python manage.py collectstatic
   \`\`\`

6. **Start the Server**:
   \`\`\`bash
   python manage.py runserver
   \`\`\`

7. **Access the Application**:
   Open your browser and navigate to \`http://127.0.0.1:8000/\`.

## Usage
1. **Homepage**:
   - Visit \`http://127.0.0.1:8000/\` to access the prediction form.
   - Enter a DNA sequence (e.g., \`ttactagcaatacgcttgcgttcggtggttaagtatgtataatgcgcgggcttgtcg\`).
   - The form validates that the sequence contains only A, T, C, G (case-insensitive).
   - Submit the form to receive a prediction: "Detected" (E. coli present) or "Not Detected" (E. coli absent).

2. **Alternative URL**:
   - Access \`http://127.0.0.1:8000/home/\` for the same form and functionality.
   - Admin interface available at \`http://127.0.0.1:8000/admin/\` (requires superuser login: \`python manage.py createsuperuser\`).

3. **Example Sequences**:
   - \`ttaacattaataaataaggaggctctaatggcactcattagccaatcaatcaagaac\`
   - \`ttactagcaatacgcttgcgttcggtggttaagtatgtataatgcgcgggcttgtcg\`

## Dependencies
Key dependencies are listed in \`requirements.txt\`. Install them using:
\`\`\`bash
pip install -r requirements.txt
\`\`\`

Main dependencies include:
- Django==5.2.3
- pandas
- scikit-learn
- numpy
- tensorflow (if used by the model in \`sustain.py\`)

Ensure all dependencies are compatible with Python 3.11.

## File Generation
All project files, including Django configurations (\`settings.py\`, \`urls.py\`), application logic (\`views.py\`, \`sustain.py\`), static files (\`style.css\`, \`script.js\`), and templates (\`index.html\`), were generated programmatically using a Python script named \`project.py\`. This script, located outside the main project directory, automated the creation of the project structure and files to streamline development.
