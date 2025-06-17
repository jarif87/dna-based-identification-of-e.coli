import os
import pickle
from django.core.cache import cache

model_cache_key = 'model_cache'

model = cache.get(model_cache_key)

if model is None:
    # Build absolute path
    current_dir = os.path.dirname(os.path.abspath(__file__))
    model_path = os.path.join(current_dir, 'mlp_model.pkl')
    
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
        
    cache.set(model_cache_key, model, None)
