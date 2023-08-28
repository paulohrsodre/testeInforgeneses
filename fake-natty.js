const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateChampion(results, scoring) {
    let maxPoints = 0;
    let champions = [];

    for (const result of results) {
        let points = 0;
        for (let i = 0; i < scoring.length; i++) {
            points += scoring[i] * result[i];
        }

        if (points > maxPoints) {
            maxPoints = points;
            champions = [result[0]];
        } else if (points === maxPoints) {
            champions.push(result[0]);
        }
    }

    return champions;
}

function main() {
    let G, P, S;
    const cases = [];

    rl.on('line', line => {
        const parts = line.split(' ').map(Number);

        if (parts.length === 2) {
            [G, P] = parts;
            if (G === 0 && P === 0) {
                for (const { results, scoringSystems } of cases) {
                    for (const scoring of scoringSystems) {
                        const champion = calculateChampion(results, scoring.slice(1));
                        console.log(champion.join(' '));
                    }
                    console.log();
                }
                rl.close();
            }
        } else if (G !== undefined) {
            if (!results) {
                results = [];
            }
            results.push(parts);
            if (results.length === G) {
                S = parseInt(rl);
            }
        } else if (S > 0) {
            if (!scoringSystems) {
                scoringSystems = [];
            }
            scoringSystems.push(parts);
            S--;
            if (S === 0) {
                cases.push({ results, scoringSystems });
                G = P = results = scoringSystems = undefined;
            }
        }
    });
}

main();