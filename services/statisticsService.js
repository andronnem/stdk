export default class StatisticsService {

    build(catalog, generated) {

        return {

            catalogSize: catalog.length,

            generated: generated.length

        };

    }

}
