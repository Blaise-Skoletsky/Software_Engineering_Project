import zmq
import random

verbs = ["Run", "Jump", "Sing", "Dance", "Laugh", "Cry", "Sleep", "Eat", "Talk", "Write",
         "Read", "Cook", "Swim", "Fly", "Drive", "Hug", "Kiss", "Climb", "Surf", "Paint",
         "Draw", "Play", "Watch", "Listen", "Build", "Solve", "Create", "Explore", "Imagine",
         "Discover", "Think", "Speak", "Whisper", "Shout", "Kick", "Punch", "Skip", "Hop",
         "Blink", "Crawl", "Cough", "Sneeze", "Stretch", "Breathe", "Squint"]

def randomizer():
    return random.choice(verbs)

context = zmq.Context()
socket = context.socket(zmq.REP)
socket.bind("tcp://*:5555")

while True:
    # Wait for next request from client
    message = socket.recv()
    print("Received request: %s" % message)

    # Call randomizer and send the result back to the client
    result = randomizer()
    socket.send_string(result)
    print("Sent response: %s" % result)
