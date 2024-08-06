export class ClientContextMock implements Xrm.ClientContext {
    public client: Xrm.Client;
    public clientState: Xrm.ClientState;

    constructor(client: Xrm.Client, clientState: Xrm.ClientState) {
        this.client = client;
        this.clientState = clientState;
    }

    public getClient(): Xrm.Client {
        return this.client;
    }

    public getClientState(): Xrm.ClientState {
        return this.clientState;
    }

    public getFormFactor(): XrmEnum.ClientFormFactor {
        throw new Error("Method not implemented.");
    }

    public isOffline(): boolean {
        throw new Error("Method not implemented.");
    }

    public isNetworkAvailable(): boolean {
        throw new Error("Method not implemented.");
    }
}
