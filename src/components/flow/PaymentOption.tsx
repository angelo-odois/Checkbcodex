import { ReactNode } from 'react';

interface PaymentOptionProps {
  id: string;
  icon: ReactNode;
  title: string;
  description?: string;
  selected?: boolean;
  onClick?: () => void;
  rightContent?: ReactNode;
  children?: ReactNode;
  expanded?: boolean;
}

export function PaymentOption({ 
  id,
  icon, 
  title, 
  description,
  selected = false, 
  onClick,
  rightContent,
  children,
  expanded = false
}: PaymentOptionProps) {
  return (
    <div className="relative shrink-0 w-full">
      {/* Main card container */}
      <div 
        className={`bg-white relative rounded-[8px] shrink-0 w-full transition-all ${
          selected || expanded ? '' : ''
        }`}
      >
        <div 
          aria-hidden="true" 
          className={`absolute border ${selected || expanded ? 'border-[#107a3b]' : 'border-[#e4e7e4]'} border-solid inset-0 pointer-events-none rounded-[8px] transition-colors`} 
        />
        <div className="size-full">
          {/* Clickable header */}
          <div 
            className="box-border content-stretch flex items-center justify-between p-[16px] md:p-[20px] relative w-full cursor-pointer"
            onClick={onClick}
          >
            {/* Left: Icon + Text */}
            <div className="content-stretch flex gap-[12px] md:gap-[16px] items-center relative">
              <div className="shrink-0 size-[32px] md:size-[40px] flex items-center justify-center">
                {icon}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#030213] text-[14px] md:text-[15px]">
                  {title}
                </p>
                {description && !(selected || expanded) && (
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#717182] text-[12px] md:text-[13px]">
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* Right: Content or Radio */}
            <div className="shrink-0">
              {rightContent || (
                <div className={`size-[20px] md:size-[24px] rounded-full border-2 ${
                  selected || expanded ? 'border-[#107a3b]' : 'border-[#e4e7e4]'
                } flex items-center justify-center transition-colors`}>
                  {(selected || expanded) && (
                    <div className="size-[10px] md:size-[12px] rounded-full bg-[#107a3b]" />
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Expanded content */}
          {expanded && children && (
            <div className="box-border px-[16px] md:px-[20px] pb-[16px] md:pb-[20px]">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}