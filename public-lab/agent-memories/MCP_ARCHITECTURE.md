# Agent Memories MCP Architecture

Agent Memories separates the memory foundation from use-case modules.

## Layers

### 1. Base Memory Layer

The Base Memory Layer handles the memory primitives shared by every module.

Responsibilities:

- register a memory vault
- store memory items
- retrieve memory by scope and profile
- support deletion and export
- keep promotion rules explicit
- avoid mixing unrelated accounts or workspaces

Example scopes:

- user
- workspace
- connected account
- project
- agent profile

### 2. Memory Plus Module Layer

Memory Plus modules translate domain-specific activity into useful memory.

Examples:

- SNS activity into posting preferences and relationship notes
- CRM activity into follow-up context and customer handling rules
- support conversations into FAQ candidates and response guidelines
- development work into project rules and repeated technical decisions

Each module should define:

- what it can read
- what it can write
- what it must never store
- how long raw evidence is kept
- what needs human approval before promotion

### 3. Agent / Flow Layer

The Agent / Flow Layer decides how memory is used.

Single-agent mode:

- one AI partner uses Memory MCP
- suitable for creators, individuals, freelancers, and small personal workflows

Multi-agent mode:

- multiple agents use Memory MCP and Flow MCP
- suitable for teams, companies, review workflows, and handoffs

## Core MCP Candidates

### Memory MCP

Purpose: provide reusable memory operations.

Candidate tools:

- `memory.add`
- `memory.search`
- `memory.get`
- `memory.promote`
- `memory.archive`
- `memory.delete`
- `memory.export`

### Flow MCP

Purpose: coordinate multi-agent work with ownership, review, and handoff state.

Candidate tools:

- `flow.create_task`
- `flow.assign_owner`
- `flow.request_review`
- `flow.record_decision`
- `flow.handoff`
- `flow.summarize_status`

### Memory + SNS

Purpose: remember posting preferences, public interaction context, and review rules without storing private material by default.

Candidate tools:

- `sns_memory.capture_preference`
- `sns_memory.suggest_reply_context`
- `sns_memory.record_post_result`
- `sns_memory.review_before_post`

Safety line:

- no automatic DM workflows
- no platform security bypass
- no credential leakage
- no private message storage by default
- no posting without explicit account owner approval

## Storage Options

Agent Memories should support multiple storage modes:

- managed lightweight memory for simple use
- user-owned vault for users who want control
- BYOM: Bring Your Own Memory for advanced users or companies

BYOM means the user or company owns the memory store, execution environment, and related access controls.

## Public Example Policy

Public examples must use synthetic data.

Do not publish:

- private chats
- real customer records
- private Discord metadata
- token paths
- API keys
- cookies
- unpublished sales leads
- internal incident logs

Use rewritten examples that preserve the pattern without exposing the source.
