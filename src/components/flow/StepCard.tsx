import { ReactNode } from 'react';

type StepStatus = 'active' | 'completed' | 'disabled' | 'pending';

interface StepCardProps {
  title: string;
  icon: ReactNode;
  status?: StepStatus;
  onClick?: () => void;
}

export function StepCard({ 
  title, 
  icon, 
  status = 'pending', 
  onClick 
}: StepCardProps) {
  const statusStyles = {
    active: {
      border: 'border-[#107a3b]',
      text: 'text-[#107a3b]',
      icon: 'text-[#107a3b]'
    },
    completed: {
      border: 'border-[#107a3b]',
      text: 'text-[#107a3b]',
      icon: 'text-[#107a3b]'
    },
    disabled: {
      border: 'border-[#e4e7e4]',
      text: 'text-[#e4e7e4]',
      icon: 'text-[#e4e7e4]'
    },
    pending: {
      border: 'border-[#e4e7e4]',
      text: 'text-[#717182]',
      icon: 'text-[#717182]'
    }
  };

  const styles = statusStyles[status];
  const isClickable = onClick && status !== 'disabled';

  return (
    <div 
      className={`basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 ${isClickable ? 'cursor-pointer transition-all hover:shadow-md' : ''}`}
      onClick={isClickable ? onClick : undefined}
    >
      <div 
        aria-hidden="true" 
        className={`absolute border-2 ${styles.border} border-solid inset-0 pointer-events-none rounded-[8px] transition-colors`} 
      />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] md:gap-[8px] items-start p-[12px] md:p-[16px] relative w-full">
          <div className={styles.icon}>
            {icon}
          </div>
          <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[18px] md:leading-[20px] min-w-full not-italic relative shrink-0 ${styles.text} text-[13px] md:text-[14px] w-[min-content] transition-colors`}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}