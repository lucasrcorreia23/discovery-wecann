<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Typography

`app/globals.css` defines the entire typographic scale as CSS custom properties in `:root`. This replaced ~23 ad hoc `font-size` values (plus drifting `font-weight`/`letter-spacing`/`line-height`) that had accumulated across the Discovery Wiki docs. **Never hardcode `font-size`, `font-weight`, `letter-spacing`, or `line-height`** — in `app/globals.css` rules or in inline `style={{}}` — always reference one of these tokens. Do this for every new component, card, table, or doc section you add under `components/discovery/`.

**Sizes** — pick by the text's role, not by "what number looks close":
- `--fs-display` — hero `h1` only.
- `--fs-h2` — major section title (`h2`).
- `--fs-h3` (20px) — subsection title (`h3`).
- `--fs-h4-label` (12px) — the base `h4`: a quiet uppercase divider label inside a card/block (e.g. "Perfil e contexto").
- `--fs-h4-heading` (16px) — a real bold subtitle inside a card (scoped `h4`/`h5` overrides, e.g. `.card-title`, `.deliverable h4`).
- `--fs-body-lg` (16px) — root body size, lead paragraphs, pull quotes.
- `--fs-body` (14px) — default paragraph/list text inside cards and components.
- `--fs-body-sm` (12.5px) — secondary text, table cells, captions.
- `--fs-label` (11px) — every uppercase eyebrow/kicker/nav-label/tag/pill — always pair with `--ls-label`.
- `--fs-micro` (10px) — tiny non-uppercase meta text (rare; prefer `--fs-label` for anything tracked/uppercase).

**Weights**: `--fw-regular` (400) · `--fw-medium` (500) · `--fw-semibold` (600) · `--fw-bold` (700). Literal `800` is a deliberate exception reserved for big stat numerals (`.num-card .num`, `.data-card .data-num`, `.tri-stat`) — don't reuse it elsewhere, and never invent an in-between weight (there was a stray `650`; it's gone, keep it that way).

**Letter-spacing**: `--ls-tight` (display/h2/h3), `--ls-normal` (body copy, normal-case headings), `--ls-label` (any uppercase text — every `text-transform: uppercase` rule must pair with this token, never a one-off `px`/`em` value).

**Line-height**: `--lh-tight` (display/h2/h3), `--lh-snug` (h4/card titles), `--lh-normal` (body-sm, dense card text), `--lh-relaxed` (body-lg, running paragraphs).

The only values allowed to stay literal (not tokenized) are the 30px/800-weight "big stat numeral" pattern above, decorative glyph tracking (`.star-level .stars`, `.star-display`), and relative `em` sizing on `code`/inline elements that must scale with their parent's font-size.
