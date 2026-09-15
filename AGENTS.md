# AGENTS

## Mission
Build and maintain the Tile Mart website to production quality with strong local SEO, credible content, excellent mobile UX, fast performance, and reliable conversion paths.

## Required reading order
Before changing code, read:
1. `PROJECT.md`
2. `ARCHITECTURE.md`
3. `DECISIONS.md`
4. `ROADMAP.md`
5. `TASKS.md`

## Operating rules
- Treat `TASKS.md` as the current execution backlog.
- Do not invent business facts.
- Keep brand naming consistent: `Tile Mart`.
- Prefer simple, maintainable architecture over unnecessary infrastructure.
- Mobile usability is a release requirement, not a polish task.
- SEO copy must be useful to humans first.
- Use semantic HTML and accessible interactions.
- Avoid fake reviews, fake ratings, fake urgency, fake stock, or fake discounts.
- Do not commit secrets or credentials.
- Keep environment-specific values out of source control.
- After meaningful implementation work, run the relevant verification commands.
- Update `TASKS.md` when work is actually complete, not when it merely started.
- Record architectural/product decisions that materially affect future work in `DECISIONS.md`.

## Continuous execution
When instructed to continue the project, do not stop after one small task. Work through successive independent tasks in priority order. After each task:
1. verify it,
2. fix failures,
3. update the backlog,
4. immediately choose the next highest-value unfinished task.

Stop only when:
- all planned work and quality gates are complete,
- every remaining task is genuinely blocked by owner-only information, or
- the next action would be destructive, unsafe, or requires explicit authorization.

If one task is blocked, document the blocker and continue every other independent task.

## Quality gates
Before declaring completion, require at minimum:
- typecheck success
- lint success
- production build success
- core-route smoke tests
- responsive review
- accessibility review
- SEO/content-integrity review
- broken-link review
- no obvious console/runtime errors

## Git discipline
Keep commits coherent and descriptive. Do not rewrite shared history unless explicitly authorized. Never force-push merely to clean up history.
