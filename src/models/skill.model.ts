import { model, Schema } from "mongoose";
import type { SkillDto } from "../types/index.js";
import MODELS from "../types/modelNames.js";

const Skill = model<SkillDto>(
    MODELS.skills,
    new Schema<SkillDto>({
        title: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        techUsage: {
            type: String
        }
    })
)

export default Skill;