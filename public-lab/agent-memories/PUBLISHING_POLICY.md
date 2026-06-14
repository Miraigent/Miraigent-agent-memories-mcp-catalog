# Agent Memories Publishing Policy

This policy defines what can be moved from internal work into public GitHub materials.

## Allowed

- Public concepts rewritten for outside readers.
- Synthetic examples.
- Public URLs.
- Roadmaps that do not reveal private customers or private operations.
- MCP architecture notes.
- Safety principles.
- Generic workflow diagrams.
- Public release notes.

## Requires Rewrite

- Internal daily notes.
- Discord discussions.
- operator-specific lessons.
- incident reviews.
- customer-like examples.
- screenshots from private tools.
- unpublished product plans.

These can be transformed into public material only after removing private context and rewriting them as general patterns.

## Not Allowed

- secrets, tokens, cookies, passwords, private keys, or session data
- private Discord channel IDs or message IDs
- private user identifiers
- unpublished sales leads
- customer records
- raw support conversations
- private file paths that reveal secret locations
- logs that include credentials, auth state, or account metadata
- claims about implemented features that are still only ideas

## Public Wording Rules

- Say `concept`, `draft`, or `planned` when work is not released.
- Say `released` only when a public URL exists.
- Do not imply customer adoption without evidence.
- Do not imply platform partnership or official approval unless it is confirmed.
- Avoid platform security bypass language.
- For posting automation, emphasize owner approval, review gates, and safe credential handling.

## Release Gate

Before publishing or moving to a public repository:

- Run a secret scan.
- Review links and examples.
- Confirm public URLs are live.
- Confirm no internal identifiers remain.
- Confirm README explains the value in one screen.
- Confirm license and security notes are present when code is included.
