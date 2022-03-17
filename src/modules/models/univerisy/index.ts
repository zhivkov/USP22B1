export interface Student {
    fNumber: any;
    dateOfBirth: Date;
    firstName: string;
    lastName: string;
}

export interface StudentGroup {
    id: boolean;
    members: Student[]
}