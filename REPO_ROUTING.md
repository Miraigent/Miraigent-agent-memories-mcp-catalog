# Repository Routing

This repository is the public catalog and activity hub for Agent Memories MCP ideas.

It is not the production Miraigent website and it is not the final implementation package for every MCP.

## Update Here

Use this repository for:

- Agent Memories MCP candidate catalog
- public activity logs
- roadmaps
- public-safe architecture notes
- free / paid / member-only boundary notes
- use cases
- issue templates
- links to released MCP tools
- summary pages for upcoming MCP distribution

## Do Not Update Here

Do not put these here:

- production Miraigent site HTML
- Cloudflare Pages deploy assets
- secrets, tokens, cookies, private keys, customer data, or private logs
- unpublished sales leads
- full implementation code for mature npm packages
- private internal operating notes copied verbatim

## Related Repositories

### Miraigent site

- Repo: `rebirth-ai/miraigent-site`
- Local: `/home/ubuntu/.openclaw/workspace-violet/projects/agent-works/miraigent-site`
- Purpose: official site, blog, diagnosis pages, public resource pages
- Rule: link to Agent Memories work when useful, but do not keep the Agent Memories catalog here

### Free AI Ops MCP

- Repo: `Miraigent/miraigent-free-ai-ops-mcp`
- Local: `/home/ubuntu/.openclaw/workspace-violet/projects/agent-works/miraigent-free-ai-ops-mcp`
- npm: `@miraigent/free-ai-ops-mcp`
- Purpose: working MCP server package for AI operations tools

### AI Ops Templates

- Repo: `Miraigent/miraigent-ai-ops-templates`
- Local: `/home/ubuntu/.openclaw/workspace-violet/projects/agent-works/miraigent-ai-ops-templates`
- npm: `@miraigent/ai-ops-templates`
- Purpose: public templates and starter MCP materials

## Future MCP Distribution Flow

Use this sequence for new MCP tools:

1. Add the idea and use case here in the catalog.
2. Collect or define the expected user pain, inputs, outputs, and safety line.
3. Decide whether it is:
   - catalog-only
   - prototype
   - npm package
   - site resource
   - paid / member-only extension
4. If implementation starts, create or choose the implementation repo.
5. Publish implementation in the implementation repo.
6. Return here and update:
   - catalog entry
   - README link
   - activity log
   - public URL
   - npm URL if available

## Quick Rule

Catalog and visibility live here.

Working code and npm releases live in implementation repositories.

Miraigent site links to the public assets but does not own the catalog.
