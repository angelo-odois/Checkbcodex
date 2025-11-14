import { CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface SummaryItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface SummaryFeature {
  icon?: ReactNode;
  text: string | ReactNode;
}

interface SummaryCardProps {
  title: string;
  description?: string;
  items?: SummaryItem[];
  total?: {
    label: string;
    value: string;
  };
  features?: SummaryFeature[];
}

export function SummaryCard({ 
  title, 
  description, 
  items = [], 
  total,
  features = []
}: SummaryCardProps) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] md:p-[25px] relative rounded-[12px] md:rounded-[16px] shrink-0 w-full lg:w-[368px]">
      <div aria-hidden="true" className="absolute border border-[rgba(3,2,19,0.08)] border-solid inset-0 pointer-events-none rounded-[12px] md:rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      
      <div className="content-stretch flex flex-col gap-[16px] md:gap-[20px] items-start relative shrink-0 w-full">
        {/* Title */}
        <h3 className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#030213] text-[16px] tracking-[-0.3125px]">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[12px] md:pb-[16px] pt-0 px-0 relative shrink-0 w-full border-b border-[rgba(3,2,19,0.15)]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#717182] text-[12px]">
              Descrição
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#030213] text-[14px] tracking-[-0.1504px]">
              {description}
            </p>
          </div>
        )}

        {/* Items */}
        {items.map((item, index) => (
          <div 
            key={index}
            className="box-border content-stretch flex items-center justify-between pb-[12px] md:pb-[17px] pt-0 px-0 relative shrink-0 w-full border-b border-[rgba(3,2,19,0.15)]"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#717182] text-[14px] tracking-[-0.1504px]">
              {item.label}
            </p>
            <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[14px] tracking-[-0.1504px] ${item.highlight ? 'text-[#107a3b]' : 'text-[#030213]'}`}>
              {item.value}
            </p>
          </div>
        ))}

        {/* Total */}
        {total && (
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#030213] text-[16px] tracking-[-0.3125px]">
              {total.label}
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic text-[#030213] text-[20px] tracking-[-0.4395px]">
              {total.value}
            </p>
          </div>
        )}

        {/* Features */}
        {features.length > 0 && (
          <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] md:pt-[17px] px-0 relative shrink-0 w-full border-t border-[rgba(3,2,19,0.13)]">
            {features.map((feature, index) => (
              <div key={index} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="shrink-0 size-[12px]">
                  {feature.icon || <CheckCircle className="size-[12px] text-[#717182]" strokeWidth={1.5} />}
                </div>
                <div className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#717182] text-[12px]">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}