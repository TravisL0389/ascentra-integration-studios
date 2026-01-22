
import { useState, useEffect } from 'react';

export function useEffectsEnabled() {
  const [enabled, setEnabled] = useState(() => {
    const saved = localStorage.getItem('ascentra-effects-enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('ascentra-effects-enabled', JSON.stringify(enabled));
  }, [enabled]);

  return [enabled, setEnabled] as const;
}
