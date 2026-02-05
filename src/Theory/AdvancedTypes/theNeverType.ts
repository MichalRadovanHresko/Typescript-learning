function reject(message: string) {
    throw new Error(message);
}
function processEvent(): never {
    while(true) {
        // Reads a message from queue
    }
}

reject('...')
processEvent('Hello');