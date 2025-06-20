import fs from 'fs';
import path from 'path';
import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '../pages/BaseFixtureSetup';

// Corrected path to output directory
const outputDir = path.resolve(__dirname, '../../test-results/a11y-scans');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read and sanitize URLs
const filePath = path.resolve(__dirname, '../Files/awsqa/manageurls.txt');
const urls = fs.readFileSync(filePath, 'utf-8')
  .split('\n')
  .map(line => line.trim())
  .filter(Boolean);

// Run accessibility tests
test.describe('Accessibility Scan for URLs', () => {
  for (const url of urls) {
    test(`Accessibility check: ${url}`, async ({ page ,basePageSetup}, testInfo) => {
      const safeFileName = url.replace(/[\/:?<>\\|*"&=]/g, '_'); // safer filename
      const fullUrl = `https://qahris.peoplehum.org${url}`;

      console.log(`Scanning URL: ${fullUrl}`);
      await page.goto(fullUrl, { waitUntil: 'domcontentloaded' });

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .exclude('.non-accessible')
        .analyze();

      // Save scan result as JSON file
      const outputFilePath = path.join(outputDir, `${safeFileName}.json`);
      try {
        fs.writeFileSync(
          outputFilePath,
          JSON.stringify(accessibilityScanResults, null, 2),
          'utf-8'
        );
        console.log(`Saved scan to: ${outputFilePath}`);
      } catch (err) {
        console.error(`Error saving scan for ${url}:`, err);
      }

      // Attach to Playwright test report
      await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
      });

      // Log any violations
      if (accessibilityScanResults.violations.length > 0) {
        console.warn(`Accessibility violations found for ${url}:`);
        console.warn(JSON.stringify(accessibilityScanResults.violations, null, 2));
      }
    });
  }
});
