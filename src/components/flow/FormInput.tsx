import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label: string;
  error?: string;
  helperText?: string;
  icon?: ReactNode;
  variant?: 'default' | 'success';
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helperText, icon, variant = 'default', ...props }, ref) => {
    const borderColor = error 
      ? 'border-red-500' 
      : variant === 'success' 
      ? 'border-[#107a3b]' 
      : 'border-[#e4e7e4]';

    const hasValue = props.value && String(props.value).length > 0;

    return (
      <div className="relative shrink-0 w-full">
        <div className={`bg-white h-[52px] md:h-[56px] relative rounded-[8px] shrink-0 w-full`}>
          <div 
            aria-hidden="true" 
            className={`absolute border ${borderColor} border-solid inset-0 pointer-events-none rounded-[8px] transition-colors`} 
          />
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[52px] md:h-[56px] items-center justify-between p-[14px] md:p-[18px] relative w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <label className="absolute top-0 left-0 font-['Inter:Medium',sans-serif] font-medium text-[#9b9b9b] text-[12px] leading-[1.25] pointer-events-none transition-all">
                  {label}
                </label>
                <input
                  ref={ref}
                  className={`w-full bg-transparent border-none outline-none font-['Inter:Medium',sans-serif] font-medium text-[#333333] text-[14px] md:text-[16px] leading-[1.25] mt-[15px] ${props.disabled ? 'cursor-not-allowed' : ''}`}
                  {...props}
                />
              </div>
              {icon && (
                <div className="shrink-0">
                  {icon}
                </div>
              )}
            </div>
          </div>
        </div>
        {(error || helperText) && (
          <p className={`mt-1 text-[12px] font-['Inter:Medium',sans-serif] font-medium ${error ? 'text-red-500' : 'text-[#acacac]'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';