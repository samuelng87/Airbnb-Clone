import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({params}:{ params: IParams}) => {
  const listing = await getListingById(params);

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}   
      />
      </ClientOnly>
  );
}

export default ListingPage;