import { useEffect, type ReactNode } from 'react';
import { currentDateAtom } from '../store/jotai/atoms';
import { useSetAtom } from 'jotai';

export function TimeProvider({ children }: { children: ReactNode }) {
  const setCurrentDate = useSetAtom(currentDateAtom);

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <>{children}</>;
}
