import prisma from "@/app/libs/prismadb"


export default async function getListings() {
    try {
        const listings = await prisma.listing.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const safeLightings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));

        return safeLightings
        
    } catch (error: any) {
        throw new Error(error);
    }
  }