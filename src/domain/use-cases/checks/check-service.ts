// Classes implement interfaces.
interface CheckServiceUseCase {
    execute: ( url: string ) => Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = ( error: string ) => void;

export class CheckService implements CheckServiceUseCase {
    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) { }

    async execute( url: string ): Promise<boolean> {
        try {
            const request = await fetch( url );
            if ( !request.ok ) {
                throw new Error( `Error on Check Service: ${url}` );
            }
            this.successCallback();
            console.log( `Connection to server '${url}' successfully` );
            return true;

        } catch ( error ) {
            console.log( `${error}` );
            this.errorCallback( `${error}` );
            return false;
        }
    }
}