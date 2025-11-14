import { useState } from 'react';
import { 
  FlowContainer, 
  ProgressBar, 
  StepCard, 
  StepGroup, 
  FormInput, 
  NavigationButtons,
  SummaryCard 
} from './components/flow';
import { User, CreditCard, Mail, Phone, FileText, Zap, ShieldCheck } from 'lucide-react';
import svgPaths from "./imports/svg-qpmeuqgsy8";

function Logo() {
  return (
    <div className="h-[37px] relative shrink-0 w-[181px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181 37">
        <g id="logo">
          <g id="bcodex">
            <path d={svgPaths.p147a9880} fill="#107A3B" />
            <path d={svgPaths.p3309ec80} fill="#717182" />
            <path d={svgPaths.p20d12600} fill="#717182" />
            <path d={svgPaths.p25ea0780} fill="#717182" />
            <path d={svgPaths.paf93860} fill="#717182" />
            <path d={svgPaths.p1eadfc00} fill="#717182" />
            <path d={svgPaths.p2783ea00} fill="var(--fill-0, #717182)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SecurityBadge() {
  return (
    <div className="bg-[rgba(3,2,19,0.06)] box-border content-stretch flex flex-col items-start pb-0 pt-[6px] px-[10px] md:px-[12px] relative rounded-[8px] md:rounded-[10px] shrink-0">
      <div className="content-stretch flex gap-[6px] md:gap-[8px] items-center">
        <ShieldCheck className="size-[10px] md:size-[12px] text-[#030213]" strokeWidth={1.5} />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#030213] text-[11px] md:text-[12px]">
          Seguro
        </p>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <div className="relative shrink-0 size-[20px] md:size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p262efe50} stroke="var(--stroke-0, #107A3B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1bd6b00} stroke="var(--stroke-0, #107A3B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CreditCardIcon() {
  return (
    <div className="relative shrink-0 size-[20px] md:size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p26cee00} stroke="var(--stroke-0, #E4E7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: 'Wanderley Proença',
    email: 'wandy.proenca@gmail.com',
    cpf: '062.222.600-20',
    phone: '(34) 9 9438 0293'
  });

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <FlowContainer
      header={
        <>
          <Logo />
          <SecurityBadge />
        </>
      }
      sidebar={
        <SummaryCard
          title="Resumo do Pedido"
          description="Pagamento de Produto Premium"
          items={[
            { label: 'Subtotal', value: 'R$ 1.250,00' }
          ]}
          total={{
            label: 'Total',
            value: 'R$ 1.250,00'
          }}
          features={[
            { text: 'Pagamento 100% seguro' },
            { text: 'Confirmação por e-mail' },
            { 
              icon: <Zap className="size-[12px] text-[#717182]" strokeWidth={2} />,
              text: (
                <>
                  Pagamento rápido com <span className="font-medium underline">Click to Pay</span>
                </>
              )
            }
          ]}
        />
      }
    >
      {/* Progress Bar */}
      <ProgressBar 
        currentStep={currentStep} 
        totalSteps={2} 
      />

      {/* Step Group */}
      <StepGroup>
        {/* Navigation */}
        <NavigationButtons 
          onBack={handleBack}
          onNext={handleNext}
          showNext={false}
        />

        {/* Step Cards */}
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          <StepCard
            title="Dados Pessoais"
            icon={<UserIcon />}
            status={currentStep === 1 ? 'active' : 'completed'}
            onClick={() => setCurrentStep(1)}
          />
          <StepCard
            title="Forma de pagamento"
            icon={<CreditCardIcon />}
            status={currentStep === 2 ? 'active' : 'disabled'}
            onClick={() => currentStep === 2 && setCurrentStep(2)}
          />
        </div>

        {/* Current Step Content */}
        {currentStep === 1 && (
          <>
            {/* Title */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <User className="size-[20px] md:size-[24px] text-[#252525]" strokeWidth={1.5} />
              <h2 className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#030213] text-[16px] tracking-[-0.3125px]">
                Dados Pessoais
              </h2>
            </div>

            {/* Form */}
            <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full">
              <FormInput
                label="Nome Completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                variant="success"
              />

              <FormInput
                label="E-mail"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                variant="success"
                helperText="Como o Click to Pay usa minhas informações?"
                icon={
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path clipRule="evenodd" d={svgPaths.p2c2abd00} fill="#0F172A" fillRule="evenodd" />
                  </svg>
                }
              />

              <div className="content-stretch flex flex-col md:flex-row gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full">
                <div className="w-full md:w-1/2">
                  <FormInput
                    label="CPF"
                    value={formData.cpf}
                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    variant="success"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <FormInput
                    label="Celular"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    variant="success"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <CreditCard className="size-[20px] md:size-[24px] text-[#252525]" strokeWidth={1.5} />
              <h2 className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#030213] text-[16px] tracking-[-0.3125px]">
                Forma de pagamento
              </h2>
            </div>

            <div className="p-8 text-center text-[#717182]">
              <p>Selecione sua forma de pagamento preferida</p>
            </div>
          </>
        )}

        {/* Continue Button */}
        <NavigationButtons 
          onNext={handleNext}
          showBack={false}
          nextDisabled={currentStep === 2}
        />
      </StepGroup>
    </FlowContainer>
  );
}