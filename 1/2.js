import fs from 'fs';

const readInput = (filePath) => {
    return fs.readFileSync(filePath, 'utf-8');
};

const lilregex = /(\d*)(?:[^\d]*)(\d*)/;

(() => {
    const rawInput = readInput('1/input.txt');
    let list1 = [];
    let list2 = [];
    rawInput.split('\n').forEach((str) => {
        const [_zero, one, two] = lilregex.exec(str);
        list1.push(one);
        list2.push(two);
    });
    list1.sort();
    list2.sort();

    let lilHash = {};
    list2.forEach(num => {
        if(!lilHash[num]){
            lilHash[num] = 0;
        }
        lilHash[num] += 1;
    });
    console.log(Object.keys(lilHash).length);
    let acc = 0;
    list1.forEach(v => {
        if (lilHash[v]) {
            let score = v * lilHash[v];
            acc += score;
        }
    });

    console.log(list1.length, acc.toString());
})()