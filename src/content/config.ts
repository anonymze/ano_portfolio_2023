// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { projectsSchema } from "./schema";

// 2. Define your collection(s)
const projectsCollection = defineCollection({
  schema: projectsSchema,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsCollection,
};
