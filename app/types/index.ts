import { User, Listing } from "@prisma/client";

export type safeListings = Omit<
    Listing,
    "createdAt"
> & {
    createAt: string;
}

export type Safeuser = Omit<
    User,
    "createAt" | "updateAt" | "emailVerified"
> & {
    createAt: string;
    updateAt: string;
    emailVerified: string | null;
}