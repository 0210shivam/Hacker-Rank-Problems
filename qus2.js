// Solve the question for alice and bob: 9:42 complete, 3:21 read.

let alice = [5, 6, 7];
let bob = [3, 6, 10];

const check = (alice, bob) => {
    let alice_res = 0;
    let bob_res = 0;

    for (let i = 0; i < alice.length && bob.length; i++) {
        let res = alice[i] - bob[i];

        if (res > 0) {
            alice_res += 1;
        } else if (res < 0) {
            bob_res += 1;
        }

    }

    return [alice_res, bob_res];
};

const result = check(alice, bob);
console.log(result);
