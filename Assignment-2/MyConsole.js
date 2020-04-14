class MyConsole {
    constructor() {
        this.logHistory = [];
    }

    log(input) {
        let temp;
        if (typeof input === "object") {
            temp = JSON.stringify(input);
            console.log(temp);
        } else {
            temp = input.toString();
            console.log(temp);
        }
        this.logHistory.push(temp);
    }

    history(position) {
        if (position) {
            const n = this.logHistory.length;
            position = (position >= n ? n : position);
            for (let i = 0; i < position; i++) {
                console.log(this.logHistory[i]);
            }
        } else {
            this.logHistory.forEach(element => {
                console.log(element);
            });
        }
    }

    clearHistory() {
        this.logHistory = [];
        console.log(true);
    }
}

let log = new MyConsole();
console.log(' ========> Added Data');
log.log(123);
log.log('Aryan');
log.log({ name: 'Aryan' });
console.log(' ========> get only 2 history');
log.history(2);
console.log(' ========> get all history');
log.history();
console.log(' ========> history clierd');
log.clearHistory();