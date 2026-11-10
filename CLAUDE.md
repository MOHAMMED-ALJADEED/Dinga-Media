# Dinga Media - Master Context & Guidelines
**Company:** DoubleBahm
**Project:** Dinga Media (A Web Platform for Reels editing and AI Video Production).
**Target Audience:** Global creators and businesses.

## 1. Tech Stack
- **Frontend:** Next.js (App Router), React, Tailwind CSS, TypeScript.
- **Backend & Auth:** Supabase.
- **Hosting:** Vercel.

## 2. Design Identity & UI/UX
- **Theme:** Strictly Dark Mode.
- **Colors:** Deep blacks/dark grays with vibrant **Purple** (#7A1FE0) gradients and accents.
- **Style:** Modern, cinematic, clean, and highly professional. Do not use generic defaults.
- **Vibe:** Bold typography, smooth animations, and high-contrast elements.

## 3. Operational Rules (CRITICAL)
- **NO REA:** Never attempt to Reverse Engineer or scrape native apps. All UI must be built from scratch.
  - **Sole exception:** Kree8.Studio may be reverse-engineered for structural and layout inspiration only. Colors, copy, and services must be Dinga Media's own brand identity.
- **Goal-Oriented:** I will use the `/goal` command. Work autonomously until the specific success criteria are met. 
- **Self-Verification:** Never trust your first output. Run local builds or write unit tests before presenting code.
- **Context Management:** Do not bloat the context with unnecessary explanations. Let the code speak for itself.
# Dinga Media — Technical Execution Rules

## Tech Stack
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Backend / Auth / DB: Supabase (via `@supabase/supabase-js`)
- Hosting & Deployment: Vercel (Production-linked)

## 1. Andrej Karpathy Engineering Safeguards
- **Minimal Mutation**: Never overwrite, refactor, or delete working files unless explicitly requested. Touch only what is strictly necessary.
- **Minimal Dependencies**: Do not install external libraries without explicit necessity. Maximize standard Tailwind CSS and native Web APIs.
- **Intentional Logic**: Explain *why* a particular architecture or logic decision was made in concise code comments, not just *what* it does.
- **Fail-Safe Verifications**: Verify builds and lint passes before concluding tasks (`npm run build`).

## 2. Frontend Design & Impeccable UI Principles
- **Distinctive Studio Aesthetic**: Avoid generic Bootstrap/SaaS templates. Follow the modern, bespoke studio feel observed in reference materials (`kree8.studio` layout, tilted cards, clean typography, spacious negative space).
- **Typography & Layout**: Bold, opinionated typography with disciplined tracking and leading. Use dynamic flex/grid layouts with crisp borders and soft shadows.
- **Media Placeholders**:
  - Keep high-fidelity placeholders featuring the Dinga brand mark for media containers.
  - Structure media wrappers cleanly to allow immediate drop-in replacement with Higgsfield-generated videos/assets without layout breakage.

## 3. Environment & Credentials
- All Supabase integration relies on environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Never hardcode API keys, credentials, or private secrets in source code.
## 4. Customer Support AI Integration (Runtime)
- **Primary Engine**: Ultra-low-cost LLM API endpoint (Jev / DeepSeek-tier) for customer agent routing.
- **Fallback Engine**: Automated fallback to OpenAI (GPT-4o-mini) if the primary API fails.
- **Scope**: Internal agent API only. Core development remains strictly driven by Claude Code.
