from flask import Flask, render_template, request
import database

app = Flask(__name__)

GUESTLIST = "./static/guestlist.txt"

# Conectar ao MongoDB
client = database.connect_to_mongodb()
db = client['GuestList']
collection = db['Guests']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/guestlist', methods=['GET', 'POST'])
def guestlist():
    if request.method == 'POST':
        name = request.form.get('name')
        code = request.form.get('confirmationCode')
        confirmed_guests = read_guests()
        for i, (guest, confirmed) in enumerate(confirmed_guests):
            if code.isdigit() and guest == name and compute_hash(name) == int(code):
                confirmed_guests[i] = (guest, True)
                #write_guests(confirmed_guests)
                database.update_guest_status(collection, name, True)
                return "Presença confirmada para " + name + "!"
        return "Código para de confirmação inválido: " + str(compute_hash(name))
    
    confirmed_guests = read_guests()
    return render_template('guestlist.html', guest_names=confirmed_guests)

@app.route('/gifts')
def gifts():
    return render_template('gifts.html')

def read_guests():
    confirmed_guests = []
    guests = database.get_guests(collection)

    for document in guests:
        confirmed_guests.append((document['Name'], document['Confirmation']))
    return confirmed_guests

def write_guests(confirmed_guests):
    with open(GUESTLIST, 'w') as file:
        for guest, confirmed in confirmed_guests:
            print(guest)
            print(confirmed)
            if(not confirmed):
                confirmed = ""
            file.write(f"{guest.rstrip()} {str(confirmed).lower()}\n")

def compute_hash(s):
    p = 53
    m = 10**9 + 9
    hash_value = 0
    p_pow = 1
    for c in s:
        hash_value = (hash_value + (ord(c) + 1) * p_pow) % m
        p_pow = (p_pow * p) % m
    return hash_value

if __name__ == '__main__':
    app.run(debug=True)