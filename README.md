# Genome Hub — R Fundamentals Quiz

A responsive, dependency-free English quiz built from the 200 questions supplied by Bandar.


## Answer review
All 200 supplied answer keys were reviewed; no answer-key corrections were necessary. Q68 now explicitly asks about names without backticks, and Q148 clarifies that the result is a one-element list named b containing "R". Arithmetic was independently recalculated. R semantics were checked against the R reference documentation. An R runtime was not available for execution.

Important details: negative indices exclude positions (Q18); filtering uses strictly greater than 5 (Q25); unique preserves first-occurrence order (Q33); rep with times repeats the complete vector (Q35). The original answer pattern is predictable, so option shuffling is enabled by default and grading uses original option indices.

References:
- https://stat.ethz.ch/CRAN/doc/manuals/r-release/R-intro.html
- https://www.stat.math.ethz.ch/R-manual/R-devel/library/base/html/unique.html

## Editing the bank
`questions.js` holds each prompt, four options, and a zero-based correct answer index. The map assigns stable original question IDs. When expanding the bank, also update the session count choices, visible count text, and storage version in `app.js` to avoid resuming stale sessions.

## Verification
JavaScript syntax checked. The original browser checks verified selection, scoring, review, and retry. The expanded bank passed completeness (IDs 1–200), four distinct options per question, answer index checks, and preservation of code strings including the tab separator. Browser verification of the 200-question edition confirmed a full session of 200, navigation to Q200, and correct grading after option shuffling in practice mode. Mobile/tablet refinement: layouts checked inside 320px, 390px and 820px viewport frames with no horizontal overflow on setup or quiz. Question map touch targets measured at least 44px, and map expand/collapse was verified. Physical iPhone/iPad hardware and Safari were not tested.

## Privacy and limitations
Progress stays in the current browser and does not sync between devices. Storage restrictions can prevent resuming; the app shows a notice. This is a self-study quiz: answers are shipped with the static files and are not intended to be secret from someone inspecting source code.

## Mobile and iPad layout
Touch controls are at least 44px tall. The question map is collapsible with its own bounded scrolling region. Layouts stack on tablet portrait and smaller widths, and use available width on landscape screens. Select fields use 16px text, code options wrap, and safe-area insets are respected. Browser zoom remains available.
