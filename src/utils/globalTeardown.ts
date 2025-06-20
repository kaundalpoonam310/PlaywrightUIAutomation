// globalTeardown.ts
import { generateZapReport, stopZapDaemon } from './zapUtils';
import fs from 'fs';
import path from 'path';

async function globalTeardown() {
  console.log('⚙️ globalTeardown: Start');

  // ✅ Execution time tracking
  const filePath = path.resolve(__dirname, 'executionTime.json');

  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const start = new Date(data.startTime);
    const end = new Date();
    const durationSeconds = (end.getTime() - start.getTime()) / 1000;

    console.log(`🕒 Total test execution time: ${durationSeconds.toFixed(2)} seconds`);
  } else {
    console.warn('⚠️ executionTime.json not found. Cannot compute test duration.');
  }

  // 🔄 ZAP cleanup tasks
  // await generateZapReport();
  // stopZapDaemon();

  console.log('⚙️ globalTeardown: Done');
}

export default globalTeardown;
