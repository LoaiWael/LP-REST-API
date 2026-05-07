import Ajv, { type JSONSchemaType } from "ajv";
import ajvErrors from "ajv-errors";
import type { Skill } from "../types/index.js";

const ajv = new (Ajv as any)({ allErrors: true });
(ajvErrors as any)(ajv);

export const skillPostSchema: JSONSchemaType<Skill> = {
  type: "object",
  properties: {
    id: { type: "string", errorMessage: "id must be a string" },
    title: { type: "string", errorMessage: "title must be a string" },
    icon: { type: "string", errorMessage: "icon must be a string" },
    techUsage: { type: "string", nullable: true, errorMessage: "techUsage must be a string" }
  },
  required: ["id", "title", "icon"],
  additionalProperties: false,
  errorMessage: {
    type: "Skill data must be an object",
    required: {
      id: "id is required",
      title: "title is required",
      icon: "icon is required"
    }
  }
};

export const skillPutSchema = {
  type: "object",
  properties: {
    id: { type: "string", errorMessage: "id must be a string" },
    title: { type: "string", errorMessage: "title must be a string" },
    icon: { type: "string", errorMessage: "icon must be a string" },
    techUsage: { type: "string", nullable: true, errorMessage: "techUsage must be a string" }
  },
  additionalProperties: false,
  errorMessage: {
    type: "Skill data must be an object"
  }
};

export const validateSkillPost = ajv.compile(skillPostSchema);
export const validateSkillPut = ajv.compile(skillPutSchema);

