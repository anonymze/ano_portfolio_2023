// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { projectsSchema } from "./schema";
import { hobbiesSchema } from "./schema";

// 2. Define your collection(s)
const projectsCollection = defineCollection({
  schema: projectsSchema,
});

const hobbiesCollection = defineCollection({
  schema: hobbiesSchema,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsCollection,
  hobbies: hobbiesCollection,
};
