# Distribution Flow

This repository is not only a storage place. It is part of the public path from awareness to trial, feedback, and implementation.

## Target Flow

1. A reader finds Agent Memories through Miraigent, note, X, Qiita, Zenn, GitHub, or npm.
2. They land on a clear public page:
   - concept and activity notes
   - candidate catalog
   - free starter template
   - issue request
3. They choose one small action:
   - read the roadmap
   - try a free template
   - request a use case
   - check an MCP candidate
   - open a GitHub issue
4. If a working MCP exists, they move to the implementation repository or npm package.
5. If they need business support, they move to Miraigent resources or free diagnosis.
6. Feedback returns to this catalog as issues, roadmap updates, and activity log entries.

## Entry Points

### Miraigent Resources

Purpose: business and practical AI operations readers.

Primary action:

- view public Agent Memories notes
- view MCP candidates
- request a use case
- move to free diagnosis if the need is business workflow design

### GitHub README

Purpose: developers, builders, early users, and people checking whether the project is active.

Primary action:

- understand the concept within one screen
- open the catalog
- try a free starter
- open an issue

### note / X

Purpose: people who feel the pain before they understand MCP.

Primary action:

- read a concrete problem
- click to the starter template or catalog
- save or request a use case

### npm

Purpose: developers who want a working package.

Primary action:

- install or run a package
- return to this catalog for roadmap, related tools, and issue requests

## Repository Roles In The Flow

### This Repository

Owns:

- public concept
- candidate catalog
- roadmap
- activity log
- issue intake
- links to released tools

Does not own:

- mature MCP implementation code
- npm package release process
- Miraigent website pages

### Implementation Repositories

Own:

- working MCP server code
- tests
- package metadata
- npm release
- implementation README
- examples

### Miraigent Site

Owns:

- business-facing explanation
- free diagnosis
- public resource page
- blog articles
- trust and conversion path

Important:

- The website should link to this catalog.
- The website should not duplicate this catalog's roadmap, activity log, or architecture notes.
- Full Agent Memories public content stays in this repository.

## Required Links For Each MCP Candidate

Each candidate should eventually have:

- catalog entry
- pain statement
- target user
- free / paid / member boundary
- safety line
- current status
- implementation repository, if any
- npm URL, if any
- issue request link
- related Miraigent resource or diagnosis link

## Status Labels

Use these labels in catalog entries:

- `idea`: only a candidate
- `spec`: input/output/safety line written
- `prototype`: working local or unpublished version exists
- `public-alpha`: public repo exists
- `npm-published`: npm package is available
- `paused`: blocked by safety, platform, or priority

## Conversion Principle

Do not send everyone to the same next step.

- Curious readers go to concept notes.
- Developers go to implementation and npm.
- Creators go to free starter templates.
- Business readers go to Miraigent resources and diagnosis.
- Active users go to GitHub issues and roadmap.

The goal is to make every update answer: what should the reader do next?
