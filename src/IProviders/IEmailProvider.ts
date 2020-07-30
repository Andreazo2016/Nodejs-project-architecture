
interface IMessage {
    to: string;
    from: string;
}

export interface IEmailProvider {
    sendEmail(message: IMessage): Promise<void>
}