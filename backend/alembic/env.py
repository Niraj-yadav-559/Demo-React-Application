import sys, os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from app.db.session import Base, engine
target_metadata = Base.metadata
