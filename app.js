import config from "./config.js";

import SequenceRepository from "./repository/sequenceRepository.js";
import CatalogService from "./services/catalogService.js";
import StatisticsService from "./services/statisticsService.js";
import ConsoleRenderer from "./renderer/consoleRenderer.js";
import Exporter from "./services/exporter.js";

const repository = new SequenceRepository();

const catalog = repository.getAll();

const selected = catalog.find(

    s => s.name === config.sequence

);

const generated =

    new CatalogService()

        .generate(

            config.sequence,

            config.terms

        );

const stats =

    new StatisticsService()

        .build(

            catalog,

            generated

        );

new ConsoleRenderer()

    .show(

        selected,

        generated,

        stats

    );

new Exporter()

    .save(

        config.sequence,

        generated

    );
