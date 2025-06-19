// globalTeardown.ts
import { generateZapReport, stopZapDaemon } from './zapUtils';

async function globalTeardown() {
  console.log('⚙️ globalTeardown: Start');
  await generateZapReport();
  stopZapDaemon();
  console.log('⚙️ globalTeardown: Done');
}

export default globalTeardown;
