interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  label?: string;
  showPercentage?: boolean;
}

export function ProgressBar({ 
  currentStep, 
  totalSteps, 
  label, 
  showPercentage = true 
}: ProgressBarProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100);
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {/* Header with step info */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#717182] text-[14px] tracking-[-0.1504px]">
          {label || `Etapa ${currentStep} de ${totalSteps}`}
        </p>
        {showPercentage && (
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#717182] text-[14px] tracking-[-0.1504px]">
            {percentage}% concluído
          </p>
        )}
      </div>
      
      {/* Progress bar */}
      <div className="bg-[rgba(3,2,19,0.13)] content-stretch flex flex-col items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 w-full h-[8px]">
        <div 
          className="bg-[#107a3b] h-[8px] rounded-[1.67772e+07px] shrink-0 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
