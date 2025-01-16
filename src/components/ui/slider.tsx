'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/utilities/cn'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div>
    <div className=" float-right bg-primary/5 text-sm p-1 border border-primary w-28 text-center mb-2 text-gray-700 shadow-inner shadow-primary/50 rounded-md  hover:text-foreground  ">
      {props.value && props.value[0]}-{props.value && props.value[1]}
    </div>
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center   cursor-grab focus:cursor-grabbing  ',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden  duration-[10ms] rounded-full  transition-all bg-secondary ">
        <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-transparent to-transparent via-primary from-0% to-100%   transition-all duration-[10ms]" />
      </SliderPrimitive.Track>

      <TooltipProvider skipDelayDuration={0}>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background  transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab aria-pressed:cursor-grabbing" />
          </TooltipTrigger>
          <TooltipContent
            onPointerDownOutside={(event) => {
              event.preventDefault()
            }}
          >
            {props.value && props.value[0]}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider skipDelayDuration={0}>
        <Tooltip delayDuration={0} defaultOpen>
          <TooltipTrigger asChild>
            <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background  transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab aria-pressed:cursor-grabbing" />
          </TooltipTrigger>
          <TooltipContent
            onPointerDownOutside={(event) => {
              event.preventDefault()
            }}
          >
            {props.value && props.value[1]}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </SliderPrimitive.Root>
  </div>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
