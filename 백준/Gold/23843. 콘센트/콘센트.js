const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N, M, arr, time = 0, concentration = [];

rl.on('line', (line) => {
    if (!N && !M) {
        [N, M] = line.trim().split(' ').map(Number);
    } else {
        arr = line.trim().split(' ').map(Number);
        arr.sort((a, b) => a - b);
        rl.close();
    }
});

rl.on('close', () => {
    while (true) {
        while (arr.length > 0) {
            while (concentration.length < M && arr.length > 0) {
                concentration.push(arr.pop());
            }
            concentration.sort((a, b) => b - a);
            let fast = concentration[concentration.length - 1];
            time += fast;
            let tagetId = -1;
            for (let i = concentration.length - 1; i >= 0; i--) {
                concentration[i] -= fast;
                if (concentration[i] === 0) {
                    tagetId = i;
                }
            }
            concentration = concentration.slice(0, tagetId);
        }
        if (concentration.length > 0) {
            arr = concentration;
            concentration = [];
        } else {
            break;
        }
    }
    console.log(time);
});
