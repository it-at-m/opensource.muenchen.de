import { createContentLoader } from "vitepress";

export default createContentLoader("de/software/*.md", {
  includeSrc: true, // include raw markdown source?
  render: true, // include rendered full page HTML?
  excerpt: true, // include excerpt?
});
