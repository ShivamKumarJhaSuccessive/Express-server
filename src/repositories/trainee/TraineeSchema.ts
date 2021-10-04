import VersionableSchema from "../versionable/VersionableSchema";

class TraineeSchema extends VersionableSchema {

    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String
    });
    super(baseSchema, collections);
}
}
export default TraineeSchema;