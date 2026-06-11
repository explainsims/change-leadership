/*
 * CHanGE — content model.
 * This is the single source of truth for the app. To add, edit or re-order
 * a resource, change the data below — no markup changes needed.
 *
 * Item shape:
 *   { title, summary, url, type }
 *   type: "doc" (Google Doc) | "canva" | "web" | "note" (concept, no link)
 *   url is optional — omit it for reference-only "note" cards.
 */
// Attach to window so app.js can read it. A top-level `const` in a classic
// <script> is NOT exposed as a window property, so we assign it explicitly —
// otherwise app.js reads window.CHANGE_DATA as undefined and throws.
window.CHANGE_DATA = {
  brand: {
    name: "CHanGE",
    owner: "Nick Haywood",
    tagline: "Habits → Behaviours → Culture → Results",
  },

  // The master framework document (overview of the whole system).
  framework: {
    title: "The CHanGE Framework",
    summary: "Habits drive Behaviours, Behaviours create Culture, Culture generates Results. The full operating system in one document.",
    url: "https://docs.google.com/document/d/1SRKR1Bob2xhxcZuE4DyfIDu88wrw8me7eCagxK7SVxk/edit",
  },

  pillars: [
    {
      id: "habits",
      name: "Habits",
      verb: "drive",
      kicker: "The daily infrastructure",
      desc: "Systemic micro-routines that automate focus, recovery and time — the invisible tracks your days run on.",
      items: [
        { title: "Sleep · 10/3/2/1/0", type: "web",
          url: "https://healthhub.hif.com.au/sleep-hygiene/what-is-the-10-3-2-1-0-sleep-rule",
          summary: "10 hrs no caffeine · 3 no food · 2 no work · 1 no screens · 0 snoozes." },
        { title: "8 before 8", type: "note",
          summary: "Bank eight small personal or health wins before 8:00am." },
        { title: "BMW", type: "note",
          summary: "Body · Mind · Work — the non-negotiable morning alignment." },
        { title: "168", type: "doc",
          url: "https://docs.google.com/document/d/1D5VtQdEL5QcLMpU56P3kDBxKOYh8GLf_ixQdxxNZCDY/edit",
          summary: "Audit where your 168 hours each week actually go." },
        { title: "Eisenhower Matrix", type: "doc",
          url: "https://docs.google.com/document/d/1COL7CWX_mE14_Z8SRomSJPJ5Ie6UoRHi/edit",
          summary: "Sort urgent vs important to protect your bandwidth." },
      ],
    },
    {
      id: "behaviours",
      name: "Behaviours",
      verb: "create",
      kicker: "The kinetic action",
      desc: "How you show up under pressure — tangible, visible, coachable interactions.",
      items: [
        { title: "TLT", type: "doc",
          url: "https://docs.google.com/document/d/1TZ5spdUC4CqAdazxxeXTxyy3FXSYfsCXQBqt-neMMs4/edit",
          summary: "Think · Lead · Talk — showing up deliberately under pressure." },
        { title: "COD", type: "doc",
          url: "https://docs.google.com/document/d/1out-buPuFf-R4BG03dOSJ-eHOMPNUmt-/edit",
          summary: "Clarity of Direction — align action to one clear line." },
        { title: "Difficult Conversations", type: "doc",
          url: "https://docs.google.com/document/d/14IJxlUIYTjXbZ6G6pgiOKNaiH5GxHnftZON4KkmWOBo/edit",
          summary: "Frameworks for friction-filled, face-to-face feedback." },
      ],
    },
    {
      id: "culture",
      name: "Culture",
      verb: "generates",
      kicker: "The collective environment",
      desc: "The glue — defined by what behaviours get celebrated and what gets tolerated.",
      items: [
        { title: "Swerving", type: "doc",
          url: "https://docs.google.com/document/d/12HpOfY6Ooypqly6kJJMhO6Ip3g4vFDHXfA3B7gkpiVg/edit",
          summary: "Stay in your lane, then swerve — synchronised intervention for the team." },
        { title: "Green Flags", type: "doc",
          url: "https://docs.google.com/document/d/16F_-32Dav9eJeGgK5GNwepifySvUJl86/edit",
          summary: "Call out and multiply the positive behaviours you want more of." },
        { title: "Speed of Trust", type: "doc",
          url: "https://docs.google.com/document/d/1LrgE6-4Hr35mANbHrNCWLPtZwgU8N0Q0HWUC-ttetOM/edit",
          summary: "Trust = Character × Competence, compounding over time." },
        { title: "Huddle Session", type: "canva",
          url: "https://www.canva.com/design/DAGvj6FiOxo/GoCkQmPMc7BJG3Aa4CVd1g/edit",
          summary: "Rapid standing huddle to align and share strategy." },
        { title: "Ideas", type: "doc",
          url: "https://docs.google.com/document/d/169hGU7FeY2NSu6Wrpm4g0rsQY6mpqEcsUvczRk_3vTs/edit",
          summary: "Running idea bank for sessions and activities." },
      ],
    },
    {
      id: "results",
      name: "Results",
      verb: "",
      kicker: "The manifestation",
      desc: "The natural consequence of the pipeline — you don't chase results, you execute the habits and behaviours that make them inevitable.",
      items: [
        { title: "Productivity Mapping", type: "note",
          summary: "Productivity matches the clarity of direction." },
        { title: "Hats, Haircuts & Tattoos", type: "note",
          summary: "Decision triage: reversible · semi-permanent · permanent." },
        { title: "Not an Emergency", type: "note",
          summary: "De-escalate stress so executive function keeps firing." },
        { title: "Focus / Next Play", type: "note",
          summary: "Immediate psychological reset after a mistake." },
        { title: "Just Hands", type: "doc",
          url: "https://docs.google.com/document/d/1lmgNMAvyvxZfZ8meFAzBRnasngBM8rUg/edit",
          summary: "A deep bank of hands-only connection and energiser games." },
      ],
    },
  ],

  // Links present in the source PDF but not named in the master framework.
  // Labelled generically — rename or remove these as needed.
  extras: [
    { title: "Canva resource", type: "canva",
      url: "https://www.canva.com/design/DAG7KUV8HYM/VDJKqBH8u_tsm8u69qZbuw/edit",
      summary: "Additional Canva design (unlabelled)." },
    { title: "Document", type: "doc",
      url: "https://docs.google.com/document/d/1XftsLsdB6seBqeacmWjJActzAXsnJM1KdQ2r4z5t9gM/edit",
      summary: "Additional document (unlabelled)." },
    { title: "Document", type: "doc",
      url: "https://docs.google.com/document/d/1toak6LfJmiA_2avlzh-wovc249cSyjCVWwfaxYUb80U/edit",
      summary: "Additional document (unlabelled)." },
    { title: "Document", type: "doc",
      url: "https://docs.google.com/document/d/18UWbYYUdsnaNjJlITic0j7e2JJMAmhcn9sSIiHrkixY/edit",
      summary: "Additional document (unlabelled)." },
  ],
};
