import { useState } from 'react';
import { 
  FlowContainer, 
  ProgressBar, 
  StepCard, 
  StepGroup, 
  FormInput, 
  NavigationButtons,
  SummaryCard,
  PaymentOption,
  CreditCardForm,
  PaymentButtons
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
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix' | null>(null);
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

            {/* Continue Button */}
            <NavigationButtons 
              onNext={handleNext}
              showBack={false}
            />
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <CreditCard className="size-[20px] md:size-[24px] text-[#252525]" strokeWidth={1.5} />
              <h2 className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#030213] text-[16px] tracking-[-0.3125px]">
                Forma de Pagamento
              </h2>
            </div>

            {/* Payment Options */}
            <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full">
              {/* Credit Card Option */}
              <PaymentOption
                id="card"
                icon={
                  <svg className="size-[24px] md:size-[32px]" fill="none" viewBox="0 0 32 32">
                    <rect width="32" height="32" rx="6" fill="#F5F5F5"/>
                    <path d="M9 12C9 10.8954 9.89543 10 11 10H21C22.1046 10 23 10.8954 23 12V20C23 21.1046 22.1046 22 21 22H11C9.89543 22 9 21.1046 9 20V12Z" stroke="#030213" strokeWidth="1.5"/>
                    <path d="M9 14H23" stroke="#030213" strokeWidth="1.5"/>
                    <path d="M12 18H14" stroke="#030213" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                }
                title="Cartão de crédito/débito"
                description="Seus cartões salvos de forma segura"
                selected={paymentMethod === 'card'}
                expanded={paymentMethod === 'card'}
                onClick={() => setPaymentMethod('card')}
                rightContent={
                  <div className="flex gap-[4px] items-center">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="#EB001B"/>
                      <circle cx="16" cy="8" r="7" fill="#F79E1B"/>
                      <path d="M12 3.5C10.8 4.7 10 6.3 10 8C10 9.7 10.8 11.3 12 12.5C13.2 11.3 14 9.7 14 8C14 6.3 13.2 4.7 12 3.5Z" fill="#FF5F00"/>
                    </svg>
                    <svg width="30" height="10" viewBox="0 0 40 13" fill="none">
                      <path d="M15.2 12.5L17.8 0.5H21.2L18.6 12.5H15.2Z" fill="#00579F"/>
                      <path d="M31.8 0.8C31.1 0.5 30 0.3 28.7 0.3C25.3 0.3 23 2 23 4.5C23 6.3 24.7 7.3 26 7.9C27.3 8.5 27.8 8.9 27.8 9.4C27.8 10.2 26.8 10.6 25.9 10.6C24.6 10.6 23.9 10.4 22.9 10L22.4 9.8L21.9 12.3C22.7 12.7 24.2 13 25.8 13C29.4 13 31.6 11.3 31.6 8.7C31.6 7.3 30.6 6.2 28.5 5.4C27.3 4.9 26.6 4.5 26.6 4C26.6 3.5 27.2 3 28.5 3C29.6 3 30.4 3.2 31.1 3.5L31.4 3.6L31.8 0.8Z" fill="#00579F"/>
                    </svg>
                    <svg width="24" height="16" viewBox="0 0 32 20" fill="none">
                      <rect width="32" height="20" rx="3" fill="#016FD0"/>
                      <path d="M18.5 14V12.5H19.5V14H18.5ZM20.5 14V12.5H21.5V14H20.5ZM22.5 14V12.5H23.5V14H22.5Z" fill="white"/>
                    </svg>
                    <div className={`ml-2 size-[20px] md:size-[24px] rounded-full border-2 ${
                      paymentMethod === 'card' ? 'border-[#107a3b]' : 'border-[#e4e7e4]'
                    } flex items-center justify-center transition-colors`}>
                      {paymentMethod === 'card' && (
                        <div className="size-[10px] md:size-[12px] rounded-full bg-[#107a3b]" />
                      )}
                    </div>
                  </div>
                }
              >
                <CreditCardForm showClickToPay={true} />
                <div className="mt-4">
                  <PaymentButtons 
                    onPrimaryClick={() => alert('Pagando com Click to Pay')}
                    onSecondaryClick={() => alert('Pagando sem Click to Pay')}
                  />
                </div>
              </PaymentOption>

              {/* PIX Option */}
              <PaymentOption
                id="pix"
                icon={
                  <svg className="size-[24px] md:size-[32px]" fill="none" viewBox="0 0 32 32">
                    <rect width="32" height="32" rx="6" fill="#F5F5F5"/>
                    <path d="M19.5 12.5L16 16L12.5 12.5M12.5 19.5L16 16L19.5 19.5M16 16H16.01" stroke="#00BFA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 10L11 10M11 22L21 22" stroke="#00BFA6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                }
                title="Pix"
                description="Aprovação imediata"
                selected={paymentMethod === 'pix'}
                onClick={() => setPaymentMethod('pix')}
              />
            </div>
          </>
        )}
      </StepGroup>
    </FlowContainer>
  );
}