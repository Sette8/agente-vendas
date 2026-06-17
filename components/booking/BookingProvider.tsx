'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import type { Service, Barber } from '@/lib/data';

export interface BookingState {
  service: Service | null;
  barber: Barber | null;
  barberName: string | null;
  day: string | null;
  dayLabel: string | null;
  time: string | null;
}

interface BookingContextValue {
  isOpen: boolean;
  state: BookingState;
  openModal: (opts?: { service?: Service; barberName?: string }) => void;
  closeModal: () => void;
  setService: (s: Service) => void;
  setBarber: (name: string) => void;
  setDay: (iso: string, label: string) => void;
  setTime: (t: string) => void;
  reset: () => void;
}

const defaultState: BookingState = {
  service: null,
  barber: null,
  barberName: null,
  day: null,
  dayLabel: null,
  time: null,
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<BookingState>(defaultState);

  const openModal = useCallback(
    (opts?: { service?: Service; barberName?: string }) => {
      setState((prev) => ({
        ...defaultState,
        service: opts?.service ?? prev.service ?? null,
        barberName: opts?.barberName ?? null,
        barber: null,
        day: null,
        dayLabel: null,
        time: null,
      }));
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    },
    []
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const reset = useCallback(() => setState(defaultState), []);

  const setService = useCallback((s: Service) => setState((p) => ({ ...p, service: s })), []);
  const setBarber = useCallback(
    (name: string) => setState((p) => ({ ...p, barberName: name })),
    []
  );
  const setDay = useCallback(
    (iso: string, label: string) =>
      setState((p) => ({ ...p, day: iso, dayLabel: label })),
    []
  );
  const setTime = useCallback((t: string) => setState((p) => ({ ...p, time: t })), []);

  return (
    <BookingContext.Provider
      value={{ isOpen, state, openModal, closeModal, setService, setBarber, setDay, setTime, reset }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider');
  return ctx;
}
