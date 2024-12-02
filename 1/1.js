import fs from 'fs';

const readInput = (filePath) => {
    return fs.readFileSync(filePath, 'utf-8');
};

const lilregex = /(\d*)(?:[^\d]*)(\d*)/;

(() => {
    const rawInput = readInput('1/input.txt');
    let list1 = [];
    let list2 = [];
    let bothLists = [list1, list2];
    rawInput.split('\n').forEach((str) => {
        const [_zero, one, two] = lilregex.exec(str);
        list1.push(one);
        list2.push(two);
    });
    list1.sort();
    list2.sort();

    let diff = 0;

    for (let index = 0; index < list1.length; index++) {
        const one = list1[index];
        const two = list2[index];

        if (one > two) {
            diff += (one - two);
        } else if (two > one){
            diff += (two - one);
        }
        
        console.log('diff is', diff);
    }

    console.log('final diff is', diff);

})()