import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

interface NavigationButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  showBack?: boolean;
  showNext?: boolean;
  nextDisabled?: boolean;
  backDisabled?: boolean;
}

export function NavigationButtons({
  onBack,
  onNext,
  backLabel = 'Voltar',
  nextLabel = 'Continuar',
  showBack = true,
  showNext = true,
  nextDisabled = false,
  backDisabled = false
}: NavigationButtonsProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start relative shrink-0 w-full">
      {showBack && (
        <button
          onClick={onBack}
          disabled={backDisabled}
          className="flex items-center gap-[8px] h-[20px] relative shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:opacity-70"
        >
          <ChevronLeft className="size-[16px] text-[#717182]" strokeWidth={1.33} />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#717182] text-[14px] tracking-[-0.1504px]">
            {backLabel}
          </p>
        </button>
      )}

      {showNext && (
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className="bg-[#107a3b] relative rounded-[10px] shrink-0 w-full disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-[#0d6330]"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[7px] items-center justify-center px-[20px] md:px-[24px] py-[10px] md:py-[12px] relative w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] md:text-[16px] text-nowrap text-white whitespace-pre">
                {nextLabel}
              </p>
              <ChevronRight className="size-[18px] md:size-[20px] text-white" strokeWidth={2} />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SecondaryButton({ children, ...props }: SecondaryButtonProps) {
  return (
    <button
      className="bg-white relative rounded-[10px] shrink-0 w-full border border-[#e4e7e4] transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center px-[20px] md:px-[24px] py-[10px] md:py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] md:text-[16px] text-nowrap text-[#030213] whitespace-pre">
            {children}
          </p>
        </div>
      </div>
    </button>
  );
}