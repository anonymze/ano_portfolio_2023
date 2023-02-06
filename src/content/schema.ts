// 1. Import utilities from `astro:content`
import { z } from "astro:content";

export const projectsSchema = z.object({
  img: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  url: z.string().url(),
});
