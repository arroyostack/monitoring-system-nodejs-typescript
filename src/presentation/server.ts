import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class ServerApp {
    /* 
    & Public indicates that the start function is available, however class methods are public by default.
    & Static allow to access the method directly without creating a new instance. It can be accessed through new instances.
    */
    public static start() {
        console.log( 'Server Started' );
        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                new CheckService(
                    () => console.log( `Successfully connected to ${url}` ),
                    ( error ) => console.log( error )
                ).execute( url );
            }
        );
    }




}


