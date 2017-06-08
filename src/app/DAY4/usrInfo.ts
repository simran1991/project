export class UserInfo {
    name: string;
    address: {
        street?: String;//? denotes nullable value
        postcode?: String;
        country?: String;
    }
}