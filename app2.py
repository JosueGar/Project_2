#################################################
# Only pulls data from MongoDB database
#################################################

from flask import Flask, render_template

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

import requests
#from sodapy import Socrata

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.opdcrime_db

# Define database and collection
collection = db.crimes

# Set route
@app.route('/')
def index():
    # Store the entire team collection in a list
    crime = list(db.crimes.find())
    print(crime)

    # Return the template with the teams list passed in
    return render_template('index2.html', crime=crime)
    #return ('hello world')


@app.route('/<param>')
def index2(param):
    # Store the entire team collection in a list
    #val = f"\"Assault\""
    crime = list(db.crimes.find({'category':param}))

    #crime = list(db.crimes.find({'case_number':param}))
    print(crime)

    # Return the template with the teams list passed in
    return render_template('index3.html', crime=crime)
    #return (val)


if __name__ == "__main__":
    app.run(debug=True)