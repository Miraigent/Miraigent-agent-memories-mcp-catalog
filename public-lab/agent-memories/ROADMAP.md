# Agent Memories Roadmap

This roadmap tracks public-facing Agent Memories work that can later become a dedicated repository or product line.

## Phase 0 - Public Foundation

Goal: make the project understandable from GitHub.

- Create a public README and project index.
- Explain the difference between memory storage and useful operating context.
- Publish safe example memory profiles with no private data.
- Document what will not be stored by default.
- Link Miraigent's public MCP and template work.

Public outputs:

- GitHub index
- concept page
- example schemas
- activity log

## Phase 1 - Base Memory MCP

Goal: define a minimal memory layer that other tools can use.

Core ideas:

- memory item schema
- memory vault registration
- scoped retrieval by account, workspace, and profile
- deletion and export paths
- lightweight promotion rules from raw notes into reusable memory

Expected public outputs:

- JSON schema examples
- MCP tool list
- sample request/response files
- README with local demo instructions

## Phase 2 - Flow MCP

Goal: support multi-agent and team workflows without mixing roles.

Core ideas:

- task owner
- reviewer
- approval state
- handoff context
- decision log
- next action

Expected public outputs:

- Flow MCP design document
- sample workflow traces
- handoff examples
- safe review checklist

## Phase 3 - Memory Plus Modules

Goal: add use-case specific memory modules on top of the base memory layer.

Candidate modules:

- memory + SNS
- memory + CRM
- memory + customer support / FAQ
- memory + sales
- memory + development
- memory + learning

The first MVP candidate is memory + SNS, starting with X-style preferences and posting workflows.

## Phase 4 - Public Examples and Distribution

Goal: turn the concept into assets people can try.

Distribution candidates:

- GitHub examples
- npm package
- MCP client setup examples
- note / Qiita / Zenn tutorials
- Miraigent resource page

## Measurement

Track signals separately by platform:

- GitHub: stars, issues, forks, README clicks
- npm: downloads, version adoption, issue references
- note / X: reactions, saves, comments, profile clicks
- Miraigent site: resource clicks, free diagnosis clicks
- business inquiries: requests that mention memory, MCP, or AI operations

## Current Priority

Prepare public materials that make the work easy to understand before moving implementation into a dedicated repository.
