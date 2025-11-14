import { ReactNode } from 'react';

interface StepGroupProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
}

export function StepGroup({ children, title, icon }: StepGroupProps) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e4e7e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start px-[16px] md:px-[24px] py-[12px] md:py-[16px] relative w-full">
          {/* Title with icon */}
          {(title || icon) && (
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              {icon && (
                <div className="shrink-0 size-[20px] md:size-[24px]">
                  {icon}
                </div>
              )}
              {title && (
                <h2 className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#030213] text-[16px] tracking-[-0.3125px]">
                  {title}
                </h2>
              )}
            </div>
          )}
          
          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
}