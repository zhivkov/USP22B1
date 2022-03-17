export interface Student {
    fNumber: number;
    dateB: Date;
    firstName: string;
    lastName: string;
}

export interface StudentGroup {
    id: boolean;
    members: Student[]
}