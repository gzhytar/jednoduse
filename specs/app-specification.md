Here’s a **ready-to-use prompt** you can give to an LLM agent (Cursor, Lovable, or similar) so it generates the full application for Dagmar Mazalová’s personal coaching website.
It merges the **tech stack we discussed (Next.js + Vercel + Sanity CMS)** with the **specification document you provided**.

---

# ✅ Complete LLM Agent Prompt

**System / Instruction to Agent:**

You are an expert full-stack engineer and designer. Your task is to build a **personal website for a professional coach (Dagmar Mazalová)**.

Use the following requirements and constraints carefully.
Generate the **complete Next.js application** (folder structure, code files, configuration, CMS schema, and example content).

---

## 🎯 Project Goals

* Present Dagmar’s philosophy and offerings with **simplicity, clarity, and authenticity**.
* Website is **minimalist, contemplative, and visually calm**.
* Audience: individuals seeking personal development, therapy, reflection.

---

## 🛠 Technology Stack

* **Framework**: Next.js 14 (App Router, TypeScript).
* **UI**: Tailwind CSS + shadcn/ui components.
* **CMS**: Sanity (free tier) → store texts and images.
* **Hosting**: Vercel.
* **Images**: Sanity assets + Next.js `next/image`.
* **Forms**: Vercel Functions + Resend (or Formspree) for contact form.
* **SEO**: `next-seo` + Vercel Analytics.
* **Revalidation**: ISR (Incremental Static Regeneration) with Sanity webhooks.

---

## 📐 Design & UX

* **Landing page**:

  * Circle visualization of 4 offerings (Konstelace, Arteterapie, Doprovázení, Individuální práce).
  * Each segment clickable → reveals corresponding section.
  * Gentle fade-in animations, scroll-driven content.
* **Main sections**:

  * Intro/Philosophy → core tagline: *„Konstelace nelze popsat, musí se zažít.“*
  * Offerings (4 main services).
  * About Me (background, education, experience).
  * Pricing (transparent).
  * Contact (email, phone, contact form).
* **Interaction style**: minimal clicks, contemplative flow, smooth animations.
* **Accessibility**: clean typography, large readable fonts, calm muted palette.
* **Visual identity**: earth tones, soft whites, deep blues; symbolic photography only (no staged session photos).

---

## 🔒 Technical Features

* Responsive design (mobile → desktop).
* Lightweight, optimized build.
* SEO for keywords: *konstelace, arteterapie, doprovázení*.
* GDPR-compliant contact form.
* Admins can update **texts and photos via Sanity Studio** without redeployment.

---

## 📂 Deliverables (to be generated)

1. **Next.js project structure**:

   * `/app` (pages for landing, offerings, about, pricing, contact).
   * `/components` (circle navigation, content blocks, UI elements).
   * `/lib` (Sanity client, GROQ queries, revalidation).
   * `/app/api/revalidate/route.ts` (webhook endpoint).
   * `/app/api/contact/route.ts` (contact form handler).
2. **Sanity schema**:

   * `siteSettings` (logo, nav, footer, socials).
   * `page` (title, slug, SEO, blocks).
   * Block types: hero, offering, testimonial, bio, CTA, FAQ, rich text.
3. **Tailwind config** with muted natural palette.
4. **Animations** using Framer Motion (gentle fade-ins, circle hover).
5. **Example content** (sample texts, placeholder symbolic images).
6. **Instructions** for:

   * Deploying on Vercel.
   * Connecting Sanity CMS.
   * Setting up webhook for ISR.
   * Configuring contact form (Resend API key).

---

Before implementing: 
 - When uncertain about implementation (< 80% sure), ask clarifying questions. 
 - Search codebase for existing solutions before coding new ones. @admin-implementation.md @app-specification.md 
 - Check `specs/app-specification.md` for patterns and past decisions.
 - Prefer small, incremental fixes; document decision in `specs/app-specification.md` before changes touching > 5 files.

When implementing:
 - Split large tasks into small logical todo items and maintain the todo list in `todo.md`. 
 - Work on one todo item and one open PR at a time; think through ripple effects before edits. 

After implementing each ToDo item:
 - perform code cleanup: fix reported linter warning and errors.
 - mark implemented item in `todo.md` as `[done]` only after explicit confirmation; move to "Recently Completed" with date.

After completing the whole ToDo list:
 - update relevant documents in `specs` to reflect changes in business rules, use-cases, behaviors and important implementation notes
 - move future ideas to `specs/backlog.md` to keep todo focused on immediate work