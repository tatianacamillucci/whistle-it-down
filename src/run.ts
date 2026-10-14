console.log('RUN.TS LOADED');
import 'dotenv/config';
import cron from 'node-cron';

async function dailyJob() {
  console.log('[dailyJob] start', new Date().toISOString());
  // TODO: qui poi metti collectAll/analyze/writeReport
  console.log('[dailyJob] done');
}

const hour = process.env.REPORT_HOUR ?? '08';
const minute = process.env.REPORT_MINUTE ?? '30';
const schedule = `${minute} ${hour} * * *`;

async function main() {
  if (process.argv.includes('--now')) {
    await dailyJob();
    process.exit(0);
  }

  console.log(`[scheduler] scheduled: ${schedule}`);
  cron.schedule(schedule, () => dailyJob().catch(console.error));
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
