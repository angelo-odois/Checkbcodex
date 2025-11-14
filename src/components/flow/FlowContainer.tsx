import { ReactNode } from 'react';

interface FlowContainerProps {
  children: ReactNode;
  sidebar?: ReactNode;
  header?: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

const widthClasses = {
  sm: 'max-w-[640px]',
  md: 'max-w-[760px]',
  lg: 'max-w-[1024px]',
  xl: 'max-w-[1280px]'
};

export function FlowContainer({ 
  children, 
  sidebar, 
  header,
  maxWidth = 'md'
}: FlowContainerProps) {
  return (
    <div className="bg-[#f2f2f2] min-h-screen relative w-full">
      {/* Header */}
      {header && (
        <div className="absolute bg-white box-border content-stretch flex h-[80px] md:h-[100px] items-center justify-between left-0 px-[16px] md:px-[32px] lg:px-[64px] py-0 top-0 w-full z-10">
          {header}
        </div>
      )}

      {/* Main content */}
      <div className={`${header ? 'pt-[100px] md:pt-[140px]' : 'pt-[20px] md:pt-[40px]'} pb-[20px] md:pb-[40px] px-[16px] md:px-[32px] flex justify-center`}>
        <div className="content-stretch flex flex-col lg:flex-row gap-[24px] md:gap-[32px] items-start w-full max-w-[1160px]">
          {/* Main flow */}
          <div className={`bg-white box-border content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start p-[16px] md:p-[25px] relative rounded-[12px] md:rounded-[16px] shrink-0 w-full ${widthClasses[maxWidth]} flex-1`}>
            <div aria-hidden="true" className="absolute border border-[rgba(3,2,19,0.08)] border-solid inset-0 pointer-events-none rounded-[12px] md:rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
            {children}
          </div>

          {/* Sidebar */}
          {sidebar && (
            <div className="shrink-0 w-full lg:w-auto">
              {sidebar}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}