// src/getPrevNext.js
import { projectOrder } from "./ProjectData";

export default function getPrevNext(projectData, currentPathname) {
  const cleanPath = currentPathname.replace(/\/$/, "");

  const entries = projectOrder
    .map((key) => projectData[key])
    .filter((p) => p?.link)
    .map((p) => ({ title: p.title, link: p.link }));

  const index = entries.findIndex((e) => e.link === cleanPath);
  if (index === -1) return { prev: null, next: null };

  const prev = entries[(index - 1 + entries.length) % entries.length];
  const next = entries[(index + 1) % entries.length];

  return { prev, next };
}
