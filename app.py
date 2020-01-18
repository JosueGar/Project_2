#################################################
# Only pulls data from MongoDB database
#################################################

from flask import Flask, render_template, jsonify, json, request

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo
# import requests
from datetime import datetime

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
    dates = []
    years = []
    year_list = []
    init_cat = 'Assault'
    init_year = '2010'
    init_time = 'Day'

    init_objs = []

    for obj in db.crimes.find({}, {'_id': False}):
        dates.append(obj['date'])
        datesplit = obj['date'].split('-')
        year = datesplit[0]
        years.append(year)

        if year not in year_list:
            year_list.append(year)
        else:
            exit

        time_split = obj['time'].split(':')
        hour = int(time_split[0])
        if (hour > 5) and (hour < 18):
            time = 'Day'
        else:
            time = 'Night'
        
        if (obj['category'] == init_cat) and (year == init_year) and (init_time == time):
            init_objs.append(obj)
        else:
            exit
    
    year_list.sort()
     
    cats = list(db.crimes.distinct( "category" ))

    return render_template('index.html',cats=cats,years=years,time=time,year_list=year_list,init_cat=init_cat,init_year=init_year,init_time=init_time,init_objs=init_objs)


@app.route('/_data_search')
def data_search():
    car = request.args.get('car', 0)
    year = request.args.get('year', 0)
    dn = request.args.get('dn', 0)
    new_objs = []

    for obj in db.crimes.find({}, {'_id': False}):
        datesplit = obj['date'].split('-')
        search_year = datesplit[0]

        time_split = obj['time'].split(':')
        hour = int(time_split[0])
        if (hour > 5) and (hour < 18):
            search_time = 'Day'
        else:
            search_time = 'Night'
        
        if (obj['category'] == car) and (search_year == year) and (search_time == dn):
            new_objs.append(obj)
        else:
            exit

    # Return the new objects
    return jsonify(new_objs = new_objs)

if __name__ == "__main__":
    app.run(debug=True)