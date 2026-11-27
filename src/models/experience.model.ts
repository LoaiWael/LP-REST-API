import { model, Schema } from "mongoose";
import type { ExperienceDto } from "../types/index.js";
import MODELS from "../types/modelNames.js";

const experienceSchema = new Schema({
    role: {
        type: String,
        required: true,
    },
    orgName: {
        type: String,
        required: true,
    },
    orgLogoUrl: {
        type: String,
        required: true,
    },
    startDate: {
        type: Schema.Types.Date,
        required: true,
    },
    endDate: {
        type: Schema.Types.Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Experience = model<ExperienceDto>(
    MODELS.experiences,
    experienceSchema
)

export default Experience;