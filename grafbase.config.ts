import { g, auth, config } from '@grafbase/sdk';

// Define User model
const User = {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githuburl: g.url().optional(),
  linkedInUrl: g.url().optional(),
};

// Define Project model
const Project = {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: User, // Assuming User is the creator of a project
};

// Define configuration object
const userConfig = {
  schema: g,
  // Add any other configuration options here if needed
};

export default config(userConfig);
