/*
 * CHanGE — content model.
 * This is the single source of truth for the app. To add, edit or re-order
 * a resource, change the data below — no markup changes needed.
 *
 * Item shape:
 *   { title, summary, url, type }
 *   type: "doc" (Google Doc) | "canva" | "web" | "note" (concept, no link)
 *   url is optional — omit it for reference-only "note" cards.
 *
 * Note: a top-level `const` in a classic <script> is NOT exposed as a window
 * property, so we assign to window.CHANGE_DATA explicitly — otherwise app.js
 * reads it as undefined and throws.
 */
window.CHANGE_DATA = {
  brand: {
    name: "CHanGe",
    owner: "Nick Haywood",
    tagline: "Habits → Behaviours → Culture → Results",
  },

  // The master framework document (overview of the whole system).
  framework: {
    title: "The CHanGe Framework",
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
        { title: "10/3/2/1/0", type: "web",
          url: "https://healthhub.hif.com.au/sleep-hygiene/what-is-the-10-3-2-1-0-sleep-rule",
          summary: "10 hrs no caffeine · 3 no food · 2 no work · 1 no screens · 0 snoozes." },
        { title: "8 before 8", type: "note",
          summary: "Bank eight small personal or health wins before 8:00am." },
        { title: "BMW", type: "note",
          summary: "Body · Mind · Work — the non-negotiable morning alignment." },
        { title: "168", type: "doc",
          url: "https://docs.google.com/document/d/1D5VtQdEL5QcLMpU56P3kDBxKOYh8GLf_ixQdxxNZCDY/edit",
          summary: "Audit where your 168 hours each week actually go." },
        { title: "Eisenhower", type: "doc",
          url: "https://docs.google.com/document/d/1COL7CWX_mE14_Z8SRomSJPJ5Ie6UoRHi/edit",
          summary: "Sort urgent vs important to protect your bandwidth." },
        { title: "HHH/SSS", type: "doc",
          url: "https://docs.google.com/document/d/1TZ5spdUC4CqAdazxxeXTxyy3FXSYfsCXQBqt-neMMs4/edit?tab=t.0",
          summary: "Daily non-negotiables checklist." },
        { title: "7/38/55", type: "doc",
          url: "https://docs.google.com/document/d/1TZ5spdUC4CqAdazxxeXTxyy3FXSYfsCXQBqt-neMMs4/edit?tab=t.0",
          summary: "Communication: 7% words · 38% tone · 55% body language." },
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
        { title: "Tough Convos", type: "doc",
          url: "https://docs.google.com/document/d/14IJxlUIYTjXbZ6G6pgiOKNaiH5GxHnftZON4KkmWOBo/edit",
          summary: "Frameworks for friction-filled, face-to-face feedback." },
        { title: "Glue Guys", type: "doc",
          url: "https://docs.google.com/document/d/1XftsLsdB6seBqeacmWjJActzAXsnJM1KdQ2r4z5t9gM/edit?tab=t.0",
          summary: "The connectors who hold a team together." },
        { title: "Hairy Yellow", type: "canva",
          url: "https://www.canva.com/design/DAG7KUV8HYM/VDJKqBH8u_tsm8u69qZbuw/edit",
          summary: "Visual behaviour prompt." },
        { title: "Time & Space", type: "doc",
          url: "https://docs.google.com/document/d/1TZ5spdUC4CqAdazxxeXTxyy3FXSYfsCXQBqt-neMMs4/edit?tab=t.0",
          summary: "Give people the time and space to respond well." },
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
        { title: "Ideas 1.5", type: "doc",
          url: "https://docs.google.com/document/d/169hGU7FeY2NSu6Wrpm4g0rsQY6mpqEcsUvczRk_3vTs/edit",
          summary: "Running idea bank for sessions and activities." },
        { title: "Broccoli x Cauliflower", type: "doc",
          url: "https://docs.google.com/document/d/1hjliJHyXvPbTG4Cjhp1uhm3mcXDsfQi6FNCyaXyupYk/edit?tab=t.0",
          summary: "Two things that look alike but aren't — a culture metaphor." },
        { title: "OG Ideas", type: "doc",
          url: "https://docs.google.com/document/d/1lmgNMAvyvxZfZ8meFAzBRnasngBM8rUg/edit",
          summary: "The original bank of connection and energiser games." },
        { title: "CHanGe 2.0", type: "doc",
          url: "https://docs.google.com/document/d/1SRKR1Bob2xhxcZuE4DyfIDu88wrw8me7eCagxK7SVxk/edit?tab=t.0",
          summary: "The evolved CHanGe framework." },
      ],
    },
    {
      id: "results",
      name: "Results",
      verb: "",
      kicker: "The manifestation",
      desc: "The natural consequence of the pipeline — you don't chase results, you execute the habits and behaviours that make them inevitable.",
      items: [
        { title: "Feedback LOOP", type: "doc",
          url: "https://docs.google.com/document/d/18UWbYYUdsnaNjJlITic0j7e2JJMAmhcn9sSIiHrkixY/edit?tab=t.0",
          summary: "Closing the feedback loop." },
        { title: "Meeting", type: "doc",
          url: "https://docs.google.com/document/d/1toak6LfJmiA_2avlzh-wovc249cSyjCVWwfaxYUb80U/edit",
          summary: "Running effective meetings." },
        { title: "Homebase", type: "doc",
          url: "https://docs.google.com/document/d/1SRKR1Bob2xhxcZuE4DyfIDu88wrw8me7eCagxK7SVxk/edit?tab=t.0",
          summary: "Your central CHanGe reference point." },
      ],
    },
  ],

  // No unsorted extras.
  extras: [],
};
