import Ajv, { type JSONSchemaType } from "ajv";
import ajvErrors from "ajv-errors";
import type { Work } from "../types/index.js";
import { skillPostSchema, skillPutSchema } from "./skill.schema.js";
import { contributorPostSchema, contributorPutSchema } from "./contributor.schema.js";

const ajv = new (Ajv as any)({ allErrors: true });
(ajvErrors as any)(ajv);

export const workPostSchema: JSONSchemaType<Work> = {
  type: "object",
  properties: {
    id: { type: "string", nullable: true, errorMessage: "id must be a string" },
    title: { type: "string", errorMessage: "title must be a string" },
    quickDoc: { type: "string", errorMessage: "quickDoc must be a string" },
    photoPrev: { type: "string", errorMessage: "photoPrev must be a string" },
    creationDate: { type: "string", errorMessage: "creationDate must be a string" },
    doc: { type: "string", errorMessage: "doc must be a string" },
    technologies: {
      type: "array",
      items: skillPostSchema,
      errorMessage: "technologies must be an array of objects"
    },
    contributors: {
      type: "array",
      items: contributorPostSchema,
      errorMessage: "contributors must be an array of objects"
    },
    src: {
      type: "array",
      items: { type: "string" },
      errorMessage: "src must be an array of strings"
    },
    numOfImages: { type: "number", errorMessage: "numOfImages must be a number" },
    images: {
      type: "array",
      items: { type: "string" },
      errorMessage: "images must be an array of strings"
    }
  },
  required: ["title", "quickDoc", "creationDate", "doc", "technologies", "contributors", "src", "numOfImages"],
  additionalProperties: false,
  errorMessage: {
    type: "Work data must be an object",
    required: {
      title: "title is required",
      quickDoc: "quickDoc is required",
      creationDate: "creationDate is required",
      doc: "doc is required",
      technologies: "technologies is required",
      contributors: "contributors is required",
      src: "src is required",
      numOfImages: "numOfImages is required"
    }
  }
};

export const workPutSchema = {
  type: "object",
  properties: {
    id: { type: "string", nullable: true, errorMessage: "id must be a string" },
    title: { type: "string", errorMessage: "title must be a string" },
    quickDoc: { type: "string", errorMessage: "quickDoc must be a string" },
    photoPrev: { type: "string", errorMessage: "photoPrev must be a string" },
    creationDate: { type: "string", errorMessage: "creationDate must be a string" },
    doc: { type: "string", errorMessage: "doc must be a string" },
    technologies: { type: "array", items: skillPutSchema },
    contributors: { type: "array", items: contributorPutSchema },
    src: { type: "array", items: { type: "string" } },
    numOfImages: { type: "number", errorMessage: "numOfImages must be a number" },
    images: { type: "array", items: { type: "string" } }
  },
  additionalProperties: false,
  errorMessage: {
    type: "Work data must be an object"
  }
};

export const validateWorkPost = ajv.compile(workPostSchema);
export const validateWorkPut = ajv.compile(workPutSchema);