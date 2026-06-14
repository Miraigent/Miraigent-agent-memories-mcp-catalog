# Agent Memories Public Notes

Agent Memories is a public-facing concept for AI partners and AI workflows that keep useful memory across sessions.

The goal is not to store everything. The goal is to keep the right operating context: preferences, review rules, repeated decisions, handoff notes, and lessons that should improve the next interaction.

## Positioning

Agent Memories focuses on a practical problem:

AI work often resets. People repeat the same background, the same tone preferences, the same safety rules, and the same past decisions. Agent Memories turns that repeated context into a reusable memory layer.

Miraigent uses this work in two ways:

- for individuals and creators: AI partners that remember preferences, creative context, posting style, and learning history
- for businesses: safer AI operations with review rules, reusable notes, handoffs, and consistent workflows

## Public Themes

- Memory is not just storage. It is context that changes the next action.
- Memory should be scoped by account, workspace, and use case.
- Personal memory and team workflow memory should be separated.
- Human review rules should stay visible before automation expands.
- Public examples should never expose private user context.

## Current Building Blocks

- [Roadmap](./ROADMAP.md)
- [MCP architecture](./MCP_ARCHITECTURE.md)
- [Public activity log](./ACTIVITY_LOG.md)
- [Publishing policy](./PUBLISHING_POLICY.md)

## Related Miraigent Assets

- Miraigent site: https://miraigent.com/
- Miraigent resources: https://miraigent.com/resources.html
- MIRAI Memory MCP concept page: https://miraigent.com/en/mirai-memory-mcp.html
- Free AI operations MCP: https://github.com/Miraigent/miraigent-free-ai-ops-mcp
- Free AI operations MCP on npm: https://www.npmjs.com/package/@miraigent/free-ai-ops-mcp
- AI operations templates on npm: https://www.npmjs.com/package/@miraigent/ai-ops-templates

## Repository Plan

This directory is a public-ready staging area inside the Miraigent site repository.

As the work matures, the clean public materials can be moved into separate repositories:

- `agent-memories`: concept, roadmap, examples, public documentation
- `agent-memories-mcp`: Memory MCP, Flow MCP, and module implementations
- `agent-memories-examples`: sample memory profiles, safe demo data, and integration examples

## Status

Draft public index. Internal raw notes are not published here. This folder contains rewritten public-facing summaries only.
