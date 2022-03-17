export interface Student {
    fNumber: any;
    dateOfBirth: Date;
    firstName: string;
    lastName: string;
    IamNewHere: any;
}

export interface StudentGroup {
    id: boolean;
    members: Student[]
}