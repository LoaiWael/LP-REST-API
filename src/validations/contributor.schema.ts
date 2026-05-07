import Ajv, { type JSONSchemaType } from "ajv";
import ajvErrors from "ajv-errors";
import type { Contributor } from "../types/index.js";

const ajv = new (Ajv as any)({ allErrors: true });
(ajvErrors as any)(ajv);

export const contributorPostSchema: JSONSchemaType<Contributor> = {
  type: "object",
  properties: {
    id: { type: "string", nullable: true, errorMessage: "id must be a string" },
    name: { type: "string", errorMessage: "name must be a string" },
    position: { type: "string", errorMessage: "position must be a string" },
    photo: { type: "string", nullable: true, errorMessage: "photo must be a string" },
    communication: { type: "string", errorMessage: "communication must be a string" }
  },
  required: ["name", "position", "communication"],
  additionalProperties: false,
  errorMessage: {
    type: "Contributor data must be an object",
    required: {
      name: "name is required",
      position: "position is required",
      communication: "communication is required"
    }
  }
};

export const contributorPutSchema = {
  type: "object",
  properties: {
    name: { type: "string", errorMessage: "name must be a string" },
    position: { type: "string", errorMessage: "position must be a string" },
    photo: { type: "string", errorMessage: "photo must be a string" },
    communication: { type: "string", errorMessage: "communication must be a string" }
  },
  additionalProperties: false,
  errorMessage: {
    type: "Contributor data must be an object"
  }
};

export const validateContributorPost = ajv.compile(contributorPostSchema);
export const validateContributorPut = ajv.compile(contributorPutSchema);

