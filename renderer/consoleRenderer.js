export default class ConsoleRenderer {

    show(item, values, stats) {

        console.log("\nSequence\n");

        console.log(item.name);

        console.log("\nDescription\n");

        console.log(item.description);

        console.log("\nTerms\n");

        console.log(values.join(" "));

        console.log("\nCatalog size:", stats.catalogSize);

        console.log("Generated terms:", stats.generated);

    }

}
