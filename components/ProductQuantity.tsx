import { cn } from '@/lib/utils';
import React from 'react';
import { Slider } from './ui/slider';

type SliderProps = {
  className?: string;
};

const ProductQuantity = ({ className, ...props }: SliderProps) => {
  return (
    <div>
      <Slider
        defaultValue={[1]}
        max={50}
        step={1}
        className={cn('w-full bg-red-300', className)}
        {...props}
      />
    </div>
  );
};

export default ProductQuantity;
