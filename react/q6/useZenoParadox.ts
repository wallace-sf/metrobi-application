import _clone from 'lodash/clone';
import { useState, useCallback } from 'react';

import { ZenoParadox } from './ZenoParadox';

export const useZenoParadox = (
  achillesSpeed: number,
  turtleSpeed: number,
  turtleLead: number,
) => {
  const [paradox, setParadox] = useState<ZenoParadox>(
    () => new ZenoParadox(achillesSpeed, turtleSpeed, turtleLead),
  );

  return {
    time: paradox.time,
    turtlePosition: paradox.turtlePosition,
    achillesPosition: paradox.achillesPosition,
    step: useCallback(() => {
      const clone = _clone(paradox);
      clone.step();
      setParadox(clone);
    }, [paradox]),
  };
};
