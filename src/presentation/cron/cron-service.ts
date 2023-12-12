import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
    static createJob( cronTime: CronTime, onTick: OnTick ): CronJob {
        // & A crone job is executed every time specified in cron time
        const job = new CronJob( cronTime, onTick );

        job.start();

        return job;
    }

}