# सरकार साथी (Sarkar Sathi) – Government Scheme Finder

**भारत के लिए बनाओ। असल समस्याओं के लिए बनाओ।**

Sarkar Sathi is a 'Hindi-First' mobile-responsive web application built for the **Navgurukul Build for Good 2026 Hackathon** under the theme **05 AWAAZ (Government schemes & entitlements)**.

## 🌟 The Problem
Millions of citizens in India—especially informal workers, farmers, and first-generation students—miss out on life-changing government schemes. The reasons are scattered information, complex legal/official language barriers, and confusing eligibility criteria.

## 🚀 Our Solution
'Sarkar Sathi' simplifies this entire journey in 3 simple steps:
1. **Eligibility Core Router:** Users enter basic demographic data (Age, Income, State, Occupation).
2. **Instant Matching:** Our highly optimized TypeScript logic instantly filters and displays only the schemes they qualify for.
3. **Actionable Roadmap:** Instead of complex jargon, users get a simple Hindi breakdown and a dynamic document checklist to prepare for the application.

---

## 🛠️ Tech Stack
- **Frontend:** React.js (Vite)
- **Type Safety:** TypeScript (Strict type interfaces for robust data routing)
- **Form Management:** Formik & Yup (For bulletproof input validation & localized error messages)
- **Styling:** Tailwind CSS (Mobile-first, lightweight, and accessible design)

## 📦 Project Structure
```text
src/
├── components/
│   ├── SchemeForm.tsx       # Formik + Yup Input Form
│   └── SchemeResults.tsx    # Filtered Results & Document Checklist
├── data/
│   └── schemesData.ts       # Structured JSON/TS Database of Schemes
├── utils/
│   └── filterLogic.ts       # Core Eligibility Routing Algorithm
└── App.tsx                  # Main Layout & State Handler
