// globalSetup.ts
import { startZapDaemon } from './zapUtils';
import { loadProperties } from './BaseTest';
import fs from 'fs';
import path from 'path';

async function globalSetup() {
  console.log('⚙️ globalSetup: Start');

  // Store start time
  const startTime = new Date().toISOString();
  const filePath = path.resolve(__dirname, 'executionTime.json');
  fs.writeFileSync(filePath, JSON.stringify({ startTime }), 'utf-8');

  // await startZapDaemon();
  await loadProperties();

  console.log('⚙️ globalSetup: Done');
}

export default globalSetup;
