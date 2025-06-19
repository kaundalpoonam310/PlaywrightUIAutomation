// globalSetup.ts
import { startZapDaemon } from './zapUtils';

async function globalSetup() {
  console.log('⚙️ globalSetup: Start');
  await startZapDaemon();
  console.log('⚙️ globalSetup: Done');
}

export default globalSetup;
