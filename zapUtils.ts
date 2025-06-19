// zapUtils.ts
import { spawn, ChildProcessWithoutNullStreams } from 'child_process';
import fs from 'fs';
import axios from 'axios';

let zapProcess: ChildProcessWithoutNullStreams;

export async function startZapDaemon(): Promise<void> {
  console.log('➡️ Starting ZAP in daemon mode...');

  zapProcess = spawn('./ZAP.sh', ['-daemon', '-config', 'api.key=12345'], {
    cwd: '/Applications/ZAP.app/Contents/MacOS', // adjust based on your zap install path
    detached: true
  });

  await new Promise((resolve) => setTimeout(resolve, 50000)); // wait for ZAP to be ready
  console.log('✅ ZAP daemon started');
}

export async function generateZapReport(): Promise<void> {
  console.log('📝 Generating ZAP Report...');
  const report = await axios.get('http://localhost:8080/OTHER/core/other/htmlreport/', {
    params: { apikey: '12345' }
  });

  fs.writeFileSync('zap_report.html', report.data);
  console.log('✅ ZAP report saved as zap_report.html');
}

export function stopZapDaemon(): void {
  if (zapProcess && zapProcess.pid !== undefined) {
    process.kill(-zapProcess.pid);
    console.log('🛑 ZAP daemon stopped');
  } else {
    console.log('⚠️ ZAP process not running or pid missing.');
  }
}

