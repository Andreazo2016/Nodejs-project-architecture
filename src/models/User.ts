export class User {
    private readonly id: string;
    name: string;
    email: string;

    User(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);
    }
}