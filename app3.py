#################################################
# Only pulls data from MongoDB database
#################################################

from flask import Flask, render_template, jsonify, json

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo
import requests
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
    #crime = list(db.crimes.find())
    cat = list(db.crimes.distinct( "category" ))
    dates = list(db.crimes.distinct( "date" ))
    time = list(db.crimes.distinct( "time" ))
    lat = list(db.crimes.distinct( "lat" ))
    lng = list(db.crimes.distinct( "lng" ))

    ## create a for loop for date and split date
    years = []
    month = []
    day = []

    for date in dates:
        datetime = date.split("-")
        years.append(datetime[0])
        month.append(datetime[1])
        day.append(datetime[2])

    year_list = []
    for year in years:
        if year not in year_list:
            year_list.append(year)
    year_list.sort()
    # print(year_list)
    # print(type(year_list))
    # print(crime)
    # print(cat)
    # print(type(cat))
    # print(year)
    # print(month)
    # print(day)
    # print(time)
    # print(lat)
    # print(lng)

    return render_template('index.html',cat=cat,years=years,month=month,day=day,time=time,lat=lat,lng=lng,year_list=year_list)

    #return ('hello world')

# Set route
@app.route('/<param>')
def index2(param):
    # Store the entire team collection in a list
    #val = f"\"Assault\""
    crime = list(db.crimes.find({'category':param}))
    


    #crime = list(db.crimes.find({'case_number':param}))
    print(crime)

    # Return the template with the crime list passed in
    return render_template('index3.html', crime=crime)
    
    #return (val)



if __name__ == "__main__":
    app.run(debug=True)