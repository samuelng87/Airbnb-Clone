import { User, Listing } from "@prisma/client";

export type SafeListings = Omit<
    Listing,
    "createdAt"
> & {
    createAt: string;
}

export type SafeUser = Omit<
    User,
    "createAt" | "updateAt" | "emailVerified"
> & {
    createAt: string;
    updateAt: string;
    emailVerified: string | null;
}