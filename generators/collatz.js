export default function generate(start = 27) {

    const result = [start];

    while (start !== 1) {

        start =

            start % 2 === 0

            ? start / 2

            : start * 3 + 1;

        result.push(start);

    }

    return result;

}
