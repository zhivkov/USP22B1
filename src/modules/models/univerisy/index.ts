export interface Student {
    fNumber: string;
    dateOfBirth: Date;
    firstName: string;
    lastName: string;
}

export interface StudentGroup {
    id: number;
    members: Student[]
}