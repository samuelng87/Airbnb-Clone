import { User, Listing, Reservation } from "@prisma/client";

export type SafeListings = Omit<
    Listing,
    "createdAt"
> & {
    createAt: string;
}

export type safeReservation = Omit<
Reservation,
"createdAt" | "startDate" | "endDate" | "listing"
> & {
    createAt: string;
    startDate: string;
    endDate: string;
    listing: SafeListings;
}


export type SafeUser = Omit<
    User,
    "createAt" | "updateAt" | "emailVerified"
> & {
    createAt: string;
    updateAt: string;
    emailVerified: string | null;
}