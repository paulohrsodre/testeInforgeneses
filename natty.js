function fibonacci(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

const primeiros40Fibonacci = fibonacci(40);
console.log(primeiros40Fibonacci);

//nesta códiigo a função fibonacci(n) calcula a sequência até o enésimo número representado por n.
//para o exemplo defini o numero 40
//print com o resultado do teste no console, no README.md