import { model, Schema } from "mongoose";
import type { ContributorDto } from "../types/index.js";
import MODELS from "../types/modelNames.js";

const Contributor = model<ContributorDto>(
    MODELS.contributors,
    new Schema<ContributorDto>({
        name: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        communication: {
            type: String,
            required: true,
        },
    })
)

export default Contributor;