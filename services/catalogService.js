import fibonacci from "../generators/fibonacci.js";
import primes from "../generators/primeNumbers.js";
import look from "../generators/lookAndSay.js";
import collatz from "../generators/collatz.js";

export default class CatalogService {

    generate(name, count) {

        switch (name) {

            case "Fibonacci":
                return fibonacci(count);

            case "Prime Numbers":
                return primes(count);

            case "Look-and-Say":
                return look(count);

            case "Collatz":
                return collatz();

            default:
                return [];

        }

    }

}
