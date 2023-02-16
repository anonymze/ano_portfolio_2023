import { z } from "astro:content";

export const projectsSchema = z.object({
  title: z.string(),
  description: z.string(),
  img: z.string().optional(),
  svgName: z.string().optional(),
  url: z.string().url().optional(),
  technologies: z.string(),
});

export const hobbiesSchema = z.object({
  title: z.string(),
  description: z.string(),
  img: z.string().optional(),
  svgName: z.string().optional(),
  url: z.string().url().optional(),
});
