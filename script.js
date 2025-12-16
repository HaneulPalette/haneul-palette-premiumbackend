let premiumResult = {};

/* ================= IMAGE ANALYSIS ================= */

function analyzeImage() {
  const fileInput = document.getElementById("imageUpload");
  if (!fileInput.files.length) {
    alert("Please upload an image");
    return;
  }

  // ---- Simulated premium-safe analysis logic ----
  const undertones = ["Warm", "Cool", "Neutral"];
  const depths = ["Light", "Medium", "Deep"];
  const clarities = ["Soft", "Clear", "Muted"];

  const undertone = undertones[Math.floor(Math.random() * undertones.length)];
  const depth = depths[Math.floor(Math.random() * depths.length)];
  const clarity = clarities[Math.floor(Math.random() * clarities.length)];
  const temperature = undertone === "Warm" ? "Golden" : undertone === "Cool" ? "Rosy" : "Balanced";

  const toneLabel = `${undertone} ${clarity} ${depth}`;

  premiumResult = {
    undertone,
    temperature,
    depth,
    clarity,
    toneLabel,
    palette: [
      { name: "Soft Peach", hex: "#F4B6A6" },
      { name: "Rose Pink", hex: "#D988A1" },
      { name: "Warm Ivory", hex: "#F6E6CC" },
      { name: "Muted Teal", hex: "#6FA3A1" },
      { name: "Cocoa Brown", hex: "#7A4A3A" }
    ]
  };

  displayResults();
}

/* ================= DISPLAY RESULTS ================= */

function displayResults() {
  document.getElementById("undertone").innerText = premiumResult.undertone;
  document.getElementById("temperature").innerText = premiumResult.temperature;
  document.getElementById("depth").innerText = premiumResult.depth;
  document.getElementById("clarity").innerText = premiumResult.clarity;
  document.getElementById("toneLabel").innerText = premiumResult.toneLabel;

  // Enable PDF button ONLY after payment (manual toggle)
  // document.getElementById("downloadPDF").disabled = false;
}

/* ================= PDF GENERATOR ================= */

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  /* ---------- PAGE 1 : COVER ---------- */
  doc.addImage("logo.png", "PNG", 70, 30, 60, 25);
  doc.setFontSize(18);
  doc.text("Premium Color Analysis Report", 20, 80);
  doc.setFontSize(12);
  doc.text("Korean Studio Style – Digital Analysis", 20, 95);
  doc.text("Tone Type: " + premiumResult.toneLabel, 20, 110);

  /* ---------- PAGE 2 : CORE ANALYSIS ---------- */
  doc.addPage();
  doc.setFontSize(16);
  doc.text("1. Core Tone Analysis", 20, 30);

  doc.setFontSize(12);
  doc.text(`Undertone: ${premiumResult.undertone}`, 20, 50);
  doc.text(`Temperature: ${premiumResult.temperature}`, 20, 60);
  doc.text(`Depth: ${premiumResult.depth}`, 20, 70);
  doc.text(`Clarity: ${premiumResult.clarity}`, 20, 80);

  doc.setFontSize(11);
  doc.text(
    "This analysis is derived from visual skin balance and tonal contrast.\n"
    + "It reflects how colors naturally interact with your facial features.",
    20, 100
  );

  /* ---------- PAGE 3 : COLOR PALETTE ---------- */
  doc.addPage();
  doc.setFontSize(16);
  doc.text("2. Personalized Color Palette", 20, 30);

  let y = 50;
  premiumResult.palette.forEach(color => {
    doc.text(`${color.name}  (${color.hex})`, 20, y);
    y += 10;
  });

  doc.text(
    "Avoid extremely neon shades, icy silvers,\n"
    + "and harsh black near the face.",
    20, y + 10
  );

  /* ---------- PAGE 4 : OUTFIT & WARDROBE ---------- */
  doc.addPage();
  doc.setFontSize(16);
  doc.text("3. Outfit & Wardrobe Guidance", 20, 30);

  doc.setFontSize(11);
  doc.text(
    "Office Wear:\n"
    + "• Medium-contrast outfits\n"
    + "• Soft neutrals\n\n"
    + "Casual Wear:\n"
    + "• Muted pastels\n"
    + "• Light layering\n\n"
    + "Occasion Wear:\n"
    + "• Rich but balanced tones",
    20, 50
  );

  /* ---------- PAGE 5 : MAKEUP GUIDE ---------- */
  doc.addPage();
  doc.setFontSize(16);
  doc.text("4. Makeup Harmony Blueprint", 20, 30);

  doc.setFontSize(11);
  doc.text(
    "Foundation:\n"
    + "• Match undertone first, depth second\n\n"
    + "Lips:\n"
    + "• Rose nude\n"
    + "• Soft coral\n\n"
    + "Eyes:\n"
    + "• Peach\n"
    + "• Warm browns",
    20, 50
  );

  /* ---------- PAGE 6 : HAIR, FABRIC & ACCESSORIES ---------- */
  doc.addPage();
  doc.setFontSize(16);
  doc.text("5. Hair, Fabric & Accessories", 20, 30);

  doc.setFontSize(11);
  doc.text(
    "Hair Colors:\n"
    + "• Chocolate brown\n"
    + "• Soft black\n\n"
    + "Accessories:\n"
    + "• Gold & rose gold metals\n\n"
    + "Fabric:\n"
    + "• Matte textures\n"
    + "• Medium thickness materials",
    20, 50
  );

  /* ---------- PAGE 7 : DISCLAIMER ---------- */
  doc.addPage();
  doc.setFontSize(14);
  doc.text("Disclaimer", 20, 30);

  doc.setFontSize(10);
  doc.text(
    "This report is generated using digital image interpretation\n"
    + "and professional color theory guidelines.\n\n"
    + "Results may vary due to lighting, camera quality,\n"
    + "and screen calibration.\n\n"
    + "This analysis is intended for styling guidance only.",
    20, 50
  );

  doc.save("Haneul_Palette_Premium_Report.pdf");
}
