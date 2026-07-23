import fs from "fs";

export default class Exporter {

    save(name, sequence) {

        fs.writeFileSync(

            "sequence.txt",

            `${name}\n\n${sequence.join(" ")}`

        );

    }

}
