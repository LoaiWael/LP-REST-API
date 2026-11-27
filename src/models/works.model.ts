import { model, Schema, Types } from "mongoose";
import type { WorkDto } from "../types/index.js";
import MODELS from "../types/modelNames.js"

export interface IWork extends Omit<WorkDto, "id" | "contributors"> {
    contributors: Types.ObjectId[];
}

const Work = model<IWork>(
    MODELS.works,
    new Schema<IWork>({
        title: {
            type: String,
            required: true,
        },
        quickDoc: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ["websites", "open-source", "ui-ux", "3d"],
            required: true,
        },
        photoPrev: {
            type: String,
            required: true,
        },
        creationDate: {
            type: String,
            required: true,
        },
        doc: {
            type: String,
            required: true,
        },
        technologies: [
            {
                name: { type: String, required: true },
                techUsage: { type: String, required: true },
            },
        ],
        contributors: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: MODELS.contributors,
                },
            ],
            index: true,
            required: true,
        },
        src: {
            type: [String],
            required: true,
        },
        numOfImages: {
            type: Number,
            required: true,
        },
        images: {
            type: [String],
            required: true,
        },
    })
)

export default Work;