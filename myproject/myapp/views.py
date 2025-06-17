from django.shortcuts import render, redirect
import pandas as pd
from .sustain import model
import pickle
import os
import numpy as np

# Define BASE_DIR as the directory containing views.py
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def handler(request):
    response = None
    if request.method == 'POST':
        genome = request.POST['Name']
        genome_list = list(genome)
        df_test = pd.DataFrame(genome_list)
        result = predicting(df_test.transpose())
        if result[0] == 1:
            response = True
        else:
            response = False
    return render(request, "index.html", {'response': response})

def predicting(data):
    # Load the encoder using the absolute path
    encoder_path = os.path.join(BASE_DIR, "onehotencoder.pkl")
    encoder = pickle.load(open(encoder_path, 'rb'))
    data_test = encoder.transform(data)
    # Check if data_test is already a NumPy array
    if isinstance(data_test, np.ndarray):
        result = model.predict(data_test)
    else:
        result = model.predict(data_test.toarray())
    return result