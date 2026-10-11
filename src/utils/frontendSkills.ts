export interface SkillDefinition {
  canonical: string;
  aliases: string[];
  category: string;
}

export const frontendSkills: SkillDefinition[] = [

  // Core
  {
    canonical: "JavaScript",
    aliases: ["javascript", "js", "ecmascript"],
    category: "Core"
  },

  {
    canonical: "TypeScript",
    aliases: ["typescript", "ts"],
    category: "Core"
  },

  {
    canonical: "HTML",
    aliases: ["html", "html5"],
    category: "Core"
  },

  {
    canonical: "CSS",
    aliases: ["css", "css3"],
    category: "Core"
  },

  // Frameworks
  {
    canonical: "React",
    aliases: ["react", "reactjs", "react.js"],
    category: "Framework"
  },

  {
    canonical: "Angular",
    aliases: ["angular", "angularjs"],
    category: "Framework"
  },

  {
    canonical: "Vue",
    aliases: ["vue", "vuejs", "vue.js"],
    category: "Framework"
  },

  {
    canonical: "Next.js",
    aliases: ["next.js", "nextjs"],
    category: "Framework"
  },

  // State
  {
    canonical: "Redux",
    aliases: ["redux", "redux toolkit", "rtk"],
    category: "State Management"
  },

  {
    canonical: "NgRx",
    aliases: ["ngrx"],
    category: "State Management"
  },

  // API
  {
    canonical: "REST API",
    aliases: ["rest api", "restful api", "rest"],
    category: "API"
  },

  {
    canonical: "GraphQL",
    aliases: ["graphql"],
    category: "API"
  },

  {
    canonical: "WebSockets",
    aliases: ["websocket", "websockets", "socket.io"],
    category: "API"
  },

  // Testing
  {
    canonical: "Jest",
    aliases: ["jest"],
    category: "Testing"
  },

  {
    canonical: "Cypress",
    aliases: ["cypress"],
    category: "Testing"
  },

  {
    canonical: "Playwright",
    aliases: ["playwright"],
    category: "Testing"
  },

  // Tooling
  {
    canonical: "Vite",
    aliases: ["vite"],
    category: "Build Tools"
  },

  {
    canonical: "Webpack",
    aliases: ["webpack"],
    category: "Build Tools"
  },

  // Engineering
  {
    canonical: "Git",
    aliases: ["git", "github", "gitlab"],
    category: "Engineering"
  },

  {
    canonical: "CI/CD",
    aliases: ["ci/cd", "cicd", "continuous integration"],
    category: "Engineering"
  },

  {
    canonical: "Docker",
    aliases: ["docker", "containers"],
    category: "Engineering"
  },

  {
    canonical: "Accessibility",
    aliases: ["accessibility", "wcag", "a11y"],
    category: "Engineering"
  }
];