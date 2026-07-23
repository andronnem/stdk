export default function generate(count) {

    const result = ["1"];

    while (result.length < count) {

        let current = result.at(-1);

        let next = "";

        let i = 0;

        while (i < current.length) {

            let c = current[i];

            let total = 1;

            while (

                current[i + 1] === c

            ) {

                total++;

                i++;

            }

            next += total + c;

            i++;

        }

        result.push(next);

    }

    return result;

}
