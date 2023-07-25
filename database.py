from pymongo import MongoClient
from pymongo.errors import AutoReconnect
import urllib

def connect_to_mongodb():
    mongo_uri = "mongodb+srv://tiago:" + urllib.parse.quote("Wed06.01jkl") + "@cluster0.j7spsbu.mongodb.net/?retryWrites=true&w=majority"
    client = MongoClient(mongo_uri)
    return client

def get_guests(collection):
    try:
        result = collection.find({})
        guests = []
        for document in result:
            guests.append(document)
        return guests
    except AutoReconnect:
        print("Conexão com o banco de dados caiu. Tentando reconectar...")
        client = connect_to_mongodb()
        db = client['GuestList']
        collection = db['Guests']
        get_guests(collection)

def update_guest_status(collection, name, status):
    try:
        filter_criteria = {"Name": name}
        update_operation = {"$set": {"Confirmation": status}}
        collection.update_one(filter_criteria, update_operation)
    except AutoReconnect:
        print("Conexão com o banco de dados caiu. Tentando reconectar...")
        client = connect_to_mongodb()
        db = client['GuestList']
        collection = db['Guests']
        update_guest_status(collection, status)