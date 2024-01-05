import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListing";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly> 
              <EmptyState
                title="Unathorized"
                subtitle="Please login"
              />
            </ClientOnly>
          )
    } 
    
    if (listings.length == 0 ) {
       return  (
       <ClientOnly> 
              <EmptyState
                title="No favorites found"
                subtitle="looks like you have no favorite listing"
              />
            </ClientOnly>)
    }

    return (
        <ClientOnly> 
            <FavoritesClient
            listings={listings}
            currentUser={currentUser}
            />
      </ClientOnly>
    )
}

export default ListingPage
