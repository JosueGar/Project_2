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
    # dates = db.crimes.find( "date" )
    # time = list(db.crimes.distinct( "time" ))
    # lat = list(db.crimes.distinct( "lat" ))
    # lng = list(db.crimes.distinct( "lng" ))

    # print(len(init_objs))
    # print(type(init_objs))

    ## create a for loop for date and split date
    # years = []
    # month = []
    # day = []

    # for date in dates:
    #     datetime = date.split("-")
    #     years.append(datetime[0])
    #     month.append(datetime[1])
    #     day.append(datetime[2])

    # print(len(years))

    return render_template('index.html',cats=cats,years=years,time=time,year_list=year_list,init_cat=init_cat,init_year=init_year,init_time=init_time,init_objs=init_objs)


# Set route
# @app.route('/<cat>/<year>/<time>')
# def index2(cat, year, time):
#     # Store the entire team collection in a list
#     #val = f"\"Assault\""
#     crime = list(db.crimes.find({'category':param}))
    


#     #crime = list(db.crimes.find({'case_number':param}))
#     print(crime)

#     # Return the template with the crime list passed in
#     return render_template('index3.html', crime=crime)
    
#     #return (val)



if __name__ == "__main__":
    app.run(debug=True)