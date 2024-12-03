import fs from 'fs';

(() => {
    const rawInput = fs.readFileSync('2/input.txt', { encoding: 'utf-8' });
    const safeReports = rawInput.split('\n').reduce((acc, curr) => {
        const levels = curr.split(' ').map((str) => Number(str));
        
        let m = 0;
        for (let index = 1; index < levels.length; index++) {
            const curr = levels[index];
            const prev = levels[index-1];
            const diff = Math.abs(curr - prev)
            if ((diff > 3 || diff < 1) ) {
                m = 0
                break;
            }
            if ((m > 0 && curr < prev) || (m < 0 && curr > prev)) {
                m = 0;
                break;
              }
            if (m === 0) {
                m = prev < curr ? 1 : -1;
            }
        }
        if (m) {
            console.log('this is safe!', acc, JSON.stringify(levels));
            acc += 1;
        }
        return acc;
    }, 0);
    console.log(safeReports);
})();