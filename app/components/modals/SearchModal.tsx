'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";

import Modal from "./Modal";
import { CountrySelectValue } from "../inputs/CountrySelect";

import useSearchModal from "@/app/hooks/useSearchModal";
import dynamic from "next/dynamic";

enum STEPS {
    LOCATION = 0,
    DATE = 1,
    INFO = 2
}

const searchModal = () => {
    const router = useRouter();
    const params = useSearchParams();
    const searchModal = useSearchModal();

    const [location, setLocation] = useState<CountrySelectValue>()
    const [ step, setStep ] = useState(STEPS.LOCATION)
    const [ guestCount, setGuestCount ] = useState(1);
    const [ roomCount, setRoomCount ] = useState(1);
    const [ bathroomCount, setBathroomCount ] = useState(1);
    const [ dateRange, setDateRange ] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false
    }), [location]);

    const onBack = useCallback(() => {
        setStep((value) => value -1)
    }, []);

    const onNext = useCallback(() => {
        setStep((value) => value + 1)
    }, []);

    const onSubmit = useCallback(async () => {
        if (step !== STEPS.INFO) {
            return onNext();
        }

    }, [])

  return (
      <Modal
        isOpen={searchModal.isOpen}
        onClose={searchModal.onClose}
        onSubmit={searchModal.onOpen}
        title="Filters"
        actionLabel="Search"
      />
  )
}

export default searchModal