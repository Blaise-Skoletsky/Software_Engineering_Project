import random as rand


verbs = ["Run", "Jump", "Sing", "Dance", "Laugh", "Cry", "Sleep", "Eat", "Talk", "Write",
"Read", "Cook", "Swim", "Fly", "Drive", "Hug", "Kiss", "Climb", "Surf", "Paint",
"Draw", "Play", "Watch", "Listen", "Build", "Solve", "Create", "Explore", "Imagine",
"Discover", "Think", "Speak", "Whisper", "Shout", "Kick", "Punch", "Skip", "Hop",
"Blink", "Crawl", "Cough", "Sneeze", "Stretch", "Breathe", "Squint"]

# get chatgpt to generate lists of words needed. 

def randomizer(type):

    return verbs[rand.randint(0, len(verbs)-1)]
