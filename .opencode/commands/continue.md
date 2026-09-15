---
description: Continue building Tile Mart until complete or genuinely blocked
---

Continue the Tile Mart website project autonomously.

First read, in this exact order:
1. `AGENTS.md`
2. `PROJECT.md`
3. `ARCHITECTURE.md`
4. `DECISIONS.md`
5. `ROADMAP.md`
6. `TASKS.md`

Then inspect the repository and current git state.

Execution loop:

1. Identify the highest-value unfinished task in `TASKS.md` that is not genuinely blocked.
2. Implement it completely, including all necessary code, content, tests, and documentation.
3. Run the relevant verification commands.
4. If verification fails, debug and fix the failures before moving on.
5. Update `TASKS.md` only for work that is actually complete.
6. Record any durable architectural/product decision in `DECISIONS.md`.
7. Re-read the remaining backlog and immediately continue with the next highest-value independent task.
8. Keep repeating this loop. Do not stop merely because one feature, page, commit, or phase is finished.

Use specialist subagents/reviewers when they materially improve correctness, design, SEO, accessibility, or code quality. Resolve their findings rather than merely reporting them.

For business facts, never guess. If a task requires owner-only information that cannot be verified, mark that exact task `BLOCKED(owner): <missing input>` and continue all other independent work.

Do not ask for permission between ordinary implementation steps. Do not provide a progress-only response and stop. Keep working through the backlog.

You may stop only when one of these conditions is true:
- every non-blocked item in `TASKS.md` is complete and all defined quality gates pass;
- every remaining item is genuinely blocked by owner-only information and no independent work remains;
- continuing would require a destructive, security-sensitive, paid, external-account, or otherwise irreversible action that requires explicit owner authorization.

Before stopping for completion, run the full available verification suite and perform a final repository review. Report exactly what was completed, verification results, any owner-blocked items, and the next external launch steps if applicable.

$ARGUMENTS
