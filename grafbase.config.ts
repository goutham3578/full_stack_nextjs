import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githuburl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUtl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})

const userConfig = {
  schema: g, // Assuming 'schema' should be the defined User model
  // Add any other configuration options here if needed
}

export default config(userConfig); // Passing the configuration object to the config function
