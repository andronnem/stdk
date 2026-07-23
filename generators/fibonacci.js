export default function generate(count) {

    const result = [0, 1];

    while (result.length < count) {

        result.push(

            result.at(-1) +

            result.at(-2)

        );

    }

    return result.slice(0, count);

}
