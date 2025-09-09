You are an expert full-stack architect and senior Typescript developer. Your task is to design a multi-step refactoring strategy for this web application. Read specs/app-specification.md. The goal is to improve maintainability, enforce DRY (Don’t Repeat Yourself) and SOLID principles, and delete dead code.

Context
The full functional & technical scope is described in app-specification.md (read this first).
The current codebase follows a typical Next.js /app structure with Radix components, tRPC + Prisma.

Deliverables
Produce a detailed Refactoring Plan in Markdown with:

Executive Summary
One-paragraph overview of why the refactor is needed and what benefits it brings.

Step-by-Step Roadmap (ordered list)

For each step include:
 - Objective (what principle/issue it addresses)
 - Scope (specific folders/files/modules)
 - Actions (bullet checklist)
 - Risks & Mitigations
 - Success Criteria (tests/pass conditions)
 - Duplicate-Code Extraction Matrix | Duplication Cluster | Suggested Shared Component / Utility | Destination Path | Notes | (Identify all repeated JSX chunks, hooks, helper functions; propose where to consolidate them).
 - SOLID Audit Table – one row per module violating a SOLID rule. | Module | Violated Principle | Problem Description | Refactor Recommendation |
 - Dead-Code Elimination List
 - Unused components, pages, API routes, env vars, npm deps, CSS classes.
 - Reference detection method (e.g. TypeScript --noUnusedLocals, webpack bundle-analyzer, ESLint rule).

Testing & CI Updates
 - New unit/integration test areas to add.
 - Adjustments to existing Playwright & Cypress suites.
 - Lint/pre-commit rule changes to keep codebase DRY & SOLID.

Constraints & Guidelines
 - Maintain 100 % TypeScript strict-mode compliance.
 - Respect design system: reuse Radix primitives; avoid custom CSS where existing tokens cover needs.
 - Prefer composition over inheritance; favor small Pure UI components + domain services.
 - Use linters/formatters (ESLint, Prettier) to enforce conventions automatically.
 - Keep each step ≤ 1 week of work for a two-developer squad; flag larger tasks for splitting.

