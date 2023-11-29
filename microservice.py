import pandas as pd
import random
import time
import requests
import json

def get_player_info():
    randNum = random.randint(0, 90)
    df = pd.read_csv("all_players.csv")

    player = df.iloc[randNum]
    playerName = player.get("Name")
    playerClub = player.get("Club")
    playerNationality = player.get("Nation")
    playerOvrRating = player.get("Overall")

    playerInfo = {
        "name": playerName,
        "club": playerClub,
        "nationality": playerNationality,
        "rating": playerOvrRating
    }
    return str(playerInfo)

url = "http://localhost:3000"
while True:

    time.sleep(1)
    data = {'playerInfo': get_player_info()}
    headers = {'Content-Type': 'application/json'}
    r = requests.post(url, data=json.dumps(data), headers=headers)
    
