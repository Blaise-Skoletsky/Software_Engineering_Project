import zmq

context = zmq.Context()
socket = context.socket(zmq.REQ)
socket.connect("tcp://localhost:5555")


socket.send(b"Give me a random verb")

while True:
    

    # Receive the response from the server
    response = socket.recv_string()
    print("Received response from server: %s" % response)
