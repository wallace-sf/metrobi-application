import { BigNumber } from 'bignumber.js';
import { FC, useMemo } from 'react';

interface IPointerProps {
  position: number;
  label: string;
}

export const Pointer: FC<IPointerProps> = ({ position, label }) => {
  const left = useMemo(
    () => BigNumber(position).dividedBy(10).times(100).toNumber(),
    [position],
  );

  return (
    <div
      style={{ left: `${left}%` }}
      className="absolute flex flex-col items-center top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300"
    >
      <h2 className="text-xl font-bold text-black">{label}</h2>
      <hr className="w-px h-64 mt-2 border-0 rounded bg-gray-700 shadow-none" />
    </div>
  );
};
