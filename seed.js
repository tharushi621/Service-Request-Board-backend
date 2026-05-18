require("dotenv").config();
const mongoose = require("mongoose");
const JobRequest = require("./models/JobRequest");

const sampleJobs = [
  {
    title: "Leaking kitchen tap needs fixing",
    description:
      "The kitchen tap has been dripping constantly for two weeks. Needs a full washer replacement or tap replacement.",
    category: "Plumbing",
    location: "Glasgow",
    contactName: "James Reid",
    contactEmail: "james.reid@example.com",
    status: "Open",
  },
  {
    title: "Bathroom rewire and new sockets",
    description:
      "Looking for a qualified electrician to rewire the bathroom and add two additional waterproof sockets near the vanity.",
    category: "Electrical",
    location: "Edinburgh",
    contactName: "Sarah Thomson",
    contactEmail: "s.thomson@example.com",
    status: "Open",
  },
  {
    title: "Full exterior house painting",
    description:
      "Three-bedroom semi-detached house requires full exterior painting. Walls, window frames, and front door. Scaffolding may be required.",
    category: "Painting",
    location: "Manchester",
    contactName: "David Brown",
    contactEmail: "david.b@example.com",
    status: "In Progress",
  },
  {
    title: "Custom kitchen cabinet installation",
    description:
      "Need a skilled joiner to install custom-made kitchen cabinets. Cabinets are already purchased and ready. Approx 12 units.",
    category: "Joinery",
    location: "Leeds",
    contactName: "Emma Wilson",
    contactEmail: "emma.wilson@example.com",
    status: "Open",
  },
  {
    title: "Boiler pressure issue",
    description:
      "Combi boiler keeps losing pressure every few days. Needs a plumber to inspect and fix the pressure relief valve or expansion vessel.",
    category: "Plumbing",
    location: "Birmingham",
    contactName: "Mark Hughes",
    contactEmail: "mark.hughes@example.com",
    status: "Open",
  },
  {
    title: "Consumer unit upgrade",
    description:
      "Old fuse board needs replacing with a modern consumer unit with RCBOs. House is a 4-bedroom detached property.",
    category: "Electrical",
    location: "Bristol",
    contactName: "Claire Davies",
    contactEmail: "c.davies@example.com",
    status: "Closed",
  },
  {
    title: "Living room and hallway painting",
    description:
      "Newly plastered living room and hallway need priming and two coats of emulsion. Ceiling, walls, and skirting boards included.",
    category: "Painting",
    location: "Glasgow",
    contactName: "Steven Murray",
    contactEmail: "s.murray@example.com",
    status: "Open",
  },
  {
    title: "Loft hatch and ladder fitting",
    description:
      "Need a joiner to cut a new loft hatch opening and fit a folding loft ladder in the upstairs landing. Boarding of loft also required.",
    category: "Joinery",
    location: "Newcastle",
    contactName: "Laura Johnson",
    contactEmail: "laura.j@example.com",
    status: "Open",
  },
  {
    title: "Outdoor tap installation",
    description:
      "Would like an outdoor garden tap fitted on the rear of the house, connected to the mains supply in the kitchen.",
    category: "Plumbing",
    location: "Liverpool",
    contactName: "Paul Walker",
    contactEmail: "paul.walker@example.com",
    status: "Open",
  },
  {
    title: "Garage lighting and power points",
    description:
      "Detached garage needs three LED strip lights installed and two double plug sockets added. Power supply is already run from the house.",
    category: "Electrical",
    location: "Edinburgh",
    contactName: "Fiona Campbell",
    contactEmail: "fiona.c@example.com",
    status: "In Progress",
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    await JobRequest.deleteMany({});
    console.log("🗑️  Cleared existing jobs");

    const jobs = await JobRequest.insertMany(sampleJobs);
    console.log(`🌱 Seeded ${jobs.length} sample jobs`);

    await mongoose.disconnect();
    console.log("✅ Done. Database disconnected.");
  } catch (err) {
    console.error("❌ Seed error:", err.message);
    process.exit(1);
  }
}

seed();
