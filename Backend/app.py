from flask import Flask, jsonify
from flask_cors import CORS

from routes.auth import auth
from database.database import init_database


app = Flask(__name__)

# Allow frontend to communicate with backend
CORS(app)

# Initialize database
init_database()

# Register authentication routes
app.register_blueprint(auth)


@app.route("/")
def home():
    return jsonify({
        "message": "AI Learning Platform Backend is running!",
        "status": "success"
    })


@app.route("/api/test")
def test():
    return jsonify({
        "message": "Backend connection successful!",
        "platform": "AI Learning Platform"
    })


if __name__ == "__main__":
    app.run(debug=True)