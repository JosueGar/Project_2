#################################################
# MongoDB and Flask Application
#################################################

from flask import Flask, render_template


# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

import requests
from sodapy import Socrata

# Create an instance of our Flask app.
app = Flask(__name__)

# Creates a collection in the database
# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Define database and collection
db = client.opdcrime_db
collection = db.crimes

# Drops collection if available to remove duplicates
db.crimes.drop()

# Creates a collection in the database
crime_data = {
    'case_number': [],
    'date': [],
    'time': [],
    'category': [],
    'lat': [],
    'lng': []}
opd_data = []

query_url = 'https://data.cityoforlando.net/resource/4y9m-jbmz.json'

client = Socrata('data.cityoforlando.net', None)

results = client.get("4y9m-jbmz", limit=190000)

for i in results:
    if i['status'] == 'Mapped':
        crime_data['case_number'] = i['case_number']
        datetime = i['case_date_time'].split('T')
        crime_data['date'] = datetime[0]
        crime_data['time'] = datetime[1]
        crime_data['category'] = i['case_offense_category']
        crime_data['lat'] = i['location']['latitude']
        crime_data['lng'] = i['location']['longitude']
        post = {
            'case_number' : i['case_number'],
            'date' : datetime[0],
            'time' : datetime[1],
            'category' : i['case_offense_category'],
            'lat' : i['location']['latitude'],
            'lng' : i['location']['longitude']
            }
        collection.insert_one(post)
    else:
        next
    opd_data.append(crime_data)


# Set route
@app.route('/')
def index():
    # Store the entire team collection in a list
    crime = list(db.crimes.find())
    print(crime)

    # Return the template with the teams list passed in
    return render_template('index2.html', crime=crime)


if __name__ == "__main__":
    app.run(debug=True)