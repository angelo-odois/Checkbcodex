import { ChevronRight } from 'lucide-react';

interface PaymentButtonsProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryDisabled?: boolean;
  secondaryDisabled?: boolean;
  showSecondary?: boolean;
}

export function PaymentButtons({
  primaryLabel = 'Pagar com Click to Pay',
  secondaryLabel = 'Pagar sem Click to Pay',
  onPrimaryClick,
  onSecondaryClick,
  primaryDisabled = false,
  secondaryDisabled = false,
  showSecondary = true
}: PaymentButtonsProps) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full">
      {/* Primary Button */}
      <button
        onClick={onPrimaryClick}
        disabled={primaryDisabled}
        className="bg-[#107a3b] relative rounded-[10px] shrink-0 w-full disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-[#0d6330]"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[7px] items-center justify-center px-[20px] md:px-[24px] py-[12px] md:py-[14px] relative w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] md:text-[16px] text-nowrap text-white whitespace-pre">
              {primaryLabel}
            </p>
            <ChevronRight className="size-[18px] md:size-[20px] text-white" strokeWidth={2} />
          </div>
        </div>
      </button>

      {/* Secondary Button */}
      {showSecondary && (
        <button
          onClick={onSecondaryClick}
          disabled={secondaryDisabled}
          className="bg-white relative rounded-[10px] shrink-0 w-full border-2 border-[#107a3b] transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[7px] items-center justify-center px-[20px] md:px-[24px] py-[12px] md:py-[14px] relative w-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] md:text-[16px] text-nowrap text-[#107a3b] whitespace-pre">
                {secondaryLabel}
              </p>
              <ChevronRight className="size-[18px] md:size-[20px] text-[#107a3b]" strokeWidth={2} />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
