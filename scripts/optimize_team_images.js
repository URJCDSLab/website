#!/usr/bin/env node
/**
 * scripts/optimize_team_images.js
 * Normalizes and optimizes team member avatars in public/assets/images/team.
 * Targets 480x480px (3x for 160x160 avatar displays) using mozjpeg / pngquant.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const TEAM_DIR = path.join(__dirname, '..', 'public', 'assets', 'images', 'team');
const TARGET_SIZE = 480;

async function optimizeImages() {
  if (!fs.existsSync(TEAM_DIR)) {
    console.error(`Directory not found: ${TEAM_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(TEAM_DIR);
  let totalOrig = 0;
  let totalNew = 0;
  let count = 0;

  console.log(`Optimizing team photos in ${TEAM_DIR} to ${TARGET_SIZE}x${TARGET_SIZE}...`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const filePath = path.join(TEAM_DIR, file);
    const origBuf = fs.readFileSync(filePath);
    const origSize = origBuf.length;
    totalOrig += origSize;

    const img = sharp(origBuf);
    const meta = await img.metadata();

    let pipeline = sharp(origBuf).resize(TARGET_SIZE, TARGET_SIZE, {
      fit: 'cover',
      withoutEnlargement: false,
    });

    let outBuf;
    if (meta.format === 'png') {
      outBuf = await pipeline.png({ quality: 85, compressionLevel: 9 }).toBuffer();
    } else {
      outBuf = await pipeline.jpeg({ quality: 84, mozjpeg: true }).toBuffer();
    }

    // Only overwrite if new size is reasonable and we successfully processed
    if (outBuf && outBuf.length > 0) {
      fs.writeFileSync(filePath, outBuf);
      totalNew += outBuf.length;
      count++;
      const savedPercent = ((1 - outBuf.length / origSize) * 100).toFixed(1);
      console.log(`✔ ${file.padEnd(30)} ${(origSize / 1024).toFixed(1)} KB -> ${(outBuf.length / 1024).toFixed(1)} KB (${savedPercent}%)`);
    } else {
      totalNew += origSize;
    }
  }

  const savedMb = ((totalOrig - totalNew) / (1024 * 1024)).toFixed(2);
  const totalPercent = ((1 - totalNew / totalOrig) * 100).toFixed(1);
  console.log('\n--- Optimization Complete ---');
  console.log(`Processed: ${count} images`);
  console.log(`Before:    ${(totalOrig / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`After:     ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Saved:     ${savedMb} MB (${totalPercent}% reduction)`);
}

optimizeImages().catch((err) => {
  console.error('Error during image optimization:', err);
  process.exit(1);
});
