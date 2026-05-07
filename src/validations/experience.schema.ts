import Ajv, { type JSONSchemaType } from "ajv";
import ajvErrors from "ajv-errors";
import type { Experience } from "../types/index.js";

const ajv = new (Ajv as any)({ allErrors: true });
(ajvErrors as any)(ajv);

export const experiencePostSchema: JSONSchemaType<Experience> = {
  type: "object",
  properties: {
    id: { type: "string", nullable: true, errorMessage: "id must be a string" },
    role: { type: "string", errorMessage: "Role must be a string" },
    orgName: { type: "string", errorMessage: "Org name must be a string" },
    orgLogoUrl: { type: "string", errorMessage: "Org logo url must be a string" },
    startDate: { type: ["string", "object"], errorMessage: "Start date must be a date string or object" } as any,
    endDate: { type: ["string", "object"], errorMessage: "End date must be a date string or object" } as any,
    description: { type: "string", errorMessage: "Description must be a string" }
  },
  required: ["role", "orgName", "orgLogoUrl", "startDate", "endDate", "description"],
  additionalProperties: false,
  errorMessage: {
    type: "Experience data must be an object",
    required: {
      role: "role is required",
      orgName: "Org name is required",
      orgLogoUrl: "Org logo url is required",
      startDate: "startDate is required",
      endDate: "endDate is required",
      description: "description is required"
    }
  }
};

export const experiencePutSchema = {
  type: "object",
  properties: {
    id: { type: "string", nullable: true, errorMessage: "id must be a string" },
    role: { type: "string", errorMessage: "role must be a string" },
    orgName: { type: "string", errorMessage: "orgName must be a string" },
    orgLogoUrl: { type: "string", errorMessage: "orgLogoUrl must be a string" },
    startDate: { type: ["string", "object"] },
    endDate: { type: ["string", "object"] },
    description: { type: "string", errorMessage: "description must be a string" }
  },
  additionalProperties: false,
  errorMessage: {
    type: "Experience data must be an object"
  }
};

export const validateExperiencePost = ajv.compile(experiencePostSchema);
export const validateExperiencePut = ajv.compile(experiencePutSchema);

