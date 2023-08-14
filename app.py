from flask import Flask, render_template, request
import database

# Starting Flask Application
app = Flask(__name__)

# Connect MongoDB
client = database.connect_to_mongodb()
db = client['GuestList']
collection = db['Guests']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/invite', methods=['GET', 'POST'])
def guestlist():
    if request.method == 'POST':
        name = request.form.get('name')
        code = request.form.get('confirmationCode')
        print(str(compute_hash(name)))

        if code.isdigit() and compute_hash(name) == int(code):
            updated = database.update_guest_status(collection, name, True)
            if updated == "updated":
                return render_template('invite.html', status="post", message="Presença de " + name + " confirmada!")
            elif updated == "unknow":
                return render_template('invite.html', status="post", message="Falha ao Confirmar Presença!")
            else:
                return render_template('invite.html', status="post", message="Sua presença já foi confirmada!")

        return render_template('invite.html', status="post", message="Falha ao Confirmar Presença!")
    
    elif request.method == 'GET':
        return render_template('invite.html', status="get", message="")

@app.route('/gifts')
def gifts():
    return render_template('gifts.html')

def read_guests():
    confirmed_guests = []
    guests = database.get_guests(collection)

    for document in guests:
        confirmed_guests.append((document['Name'], document['Confirmation']))
    return confirmed_guests

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