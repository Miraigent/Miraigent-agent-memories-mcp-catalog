# Source of Truth

Agent Memories public materials must not be duplicated across repositories.

## Single Source

This repository is the source of truth for Agent Memories public catalog content:

- MCP candidate catalog
- public activity log
- roadmap
- distribution flow
- public-safe architecture notes
- use cases
- issue intake
- links to released MCP tools

## Link-Only Repositories

The Miraigent website repository must only link to this repository.

Do not copy Agent Memories catalog text, roadmap text, activity logs, or architecture notes into the Miraigent website.

Allowed in the Miraigent website:

- short one or two sentence summaries
- links to this repository
- links to released npm packages
- links to the free diagnosis

Not allowed in the Miraigent website:

- duplicate Agent Memories roadmap content
- duplicate activity logs
- duplicate MCP architecture documents
- copied issue intake text
- copied catalog entries

## Why

Duplicated public content creates drift.

The failure mode is predictable:

- the catalog gets updated
- the website copy is forgotten
- users see different states
- future operators update the wrong repository

This rule prevents that.

## Update Flow

For Agent Memories MCP public work:

1. Update this repository first.
2. If the website needs a change, update only the link or a short summary.
3. Do not copy the full content into the website.
4. If an implementation exists, update the implementation repository.
5. Return here and update the catalog links.

## Quick Decision

If the content explains Agent Memories itself, update this repository.

If the content helps a business visitor choose Miraigent, update the Miraigent website with a short summary and a link.

If the content is runnable code or an npm release, update the implementation repository.
