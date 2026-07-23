export default function generate(count) {

    const primes = [];

    let n = 2;

    while (primes.length < count) {

        let ok = true;

        for (let i = 2; i < n; i++) {

            if (n % i === 0) {

                ok = false;

                break;

            }

        }

        if (ok) {

            primes.push(n);

        }

        n++;

    }

    return primes;

}
