import { useState } from 'react';
import { FormInput } from './FormInput';
import { Info } from 'lucide-react';

interface CreditCardFormProps {
  onSubmit?: (data: CreditCardData) => void;
  showClickToPay?: boolean;
}

export interface CreditCardData {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  installments: string;
  saveCard: boolean;
}

export function CreditCardForm({ onSubmit, showClickToPay = true }: CreditCardFormProps) {
  const [formData, setFormData] = useState<CreditCardData>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    installments: '1',
    saveCard: false
  });

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handleCardNumberChange = (value: string) => {
    const cleaned = value.replace(/\s/g, '').replace(/\D/g, '');
    if (cleaned.length <= 16) {
      setFormData({ ...formData, cardNumber: formatCardNumber(cleaned) });
    }
  };

  const handleExpiryChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 4) {
      setFormData({ ...formData, expiryDate: formatExpiryDate(cleaned) });
    }
  };

  const handleCvvChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 4) {
      setFormData({ ...formData, cvv: cleaned });
    }
  };

  const getCardBrand = () => {
    const cleaned = formData.cardNumber.replace(/\s/g, '');
    if (cleaned.startsWith('5')) return 'mastercard';
    if (cleaned.startsWith('4')) return 'visa';
    return null;
  };

  const CardBrandIcon = () => {
    const brand = getCardBrand();
    if (!brand) return null;

    return (
      <div className="flex gap-[4px]">
        {brand === 'mastercard' && (
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <circle cx="8" cy="8" r="7" fill="#EB001B"/>
            <circle cx="16" cy="8" r="7" fill="#F79E1B"/>
            <path d="M12 3.5C10.8 4.7 10 6.3 10 8C10 9.7 10.8 11.3 12 12.5C13.2 11.3 14 9.7 14 8C14 6.3 13.2 4.7 12 3.5Z" fill="#FF5F00"/>
          </svg>
        )}
        {brand === 'visa' && (
          <svg width="40" height="13" viewBox="0 0 40 13" fill="none">
            <path d="M15.2 12.5L17.8 0.5H21.2L18.6 12.5H15.2Z" fill="#00579F"/>
            <path d="M31.8 0.8C31.1 0.5 30 0.3 28.7 0.3C25.3 0.3 23 2 23 4.5C23 6.3 24.7 7.3 26 7.9C27.3 8.5 27.8 8.9 27.8 9.4C27.8 10.2 26.8 10.6 25.9 10.6C24.6 10.6 23.9 10.4 22.9 10L22.4 9.8L21.9 12.3C22.7 12.7 24.2 13 25.8 13C29.4 13 31.6 11.3 31.6 8.7C31.6 7.3 30.6 6.2 28.5 5.4C27.3 4.9 26.6 4.5 26.6 4C26.6 3.5 27.2 3 28.5 3C29.6 3 30.4 3.2 31.1 3.5L31.4 3.6L31.8 0.8Z" fill="#00579F"/>
            <path d="M37.2 0.5H34.5C33.6 0.5 32.9 0.7 32.5 1.6L27.3 12.5H30.9L31.7 10.4H36L36.4 12.5H39.6L37.2 0.5ZM32.8 7.9L34.5 3.5L35.5 7.9H32.8Z" fill="#00579F"/>
            <path d="M12.8 0.5L9.4 8.7L9 6.8C8.3 4.5 6.2 2 3.9 0.9L7 12.5H10.7L16.5 0.5H12.8Z" fill="#00579F"/>
            <path d="M5.8 0.5H0.1L0 0.7C4.2 1.8 7 4.2 8.1 7.1L6.9 1.6C6.7 0.7 6.1 0.5 5.8 0.5Z" fill="#FAA61A"/>
          </svg>
        )}
      </div>
    );
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] md:gap-[20px] items-start relative w-full">
      {/* Card Brand Logos Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#717182] text-[13px] md:text-[14px]">
          Seus cartões salvos de forma segura
        </p>
        <div className="flex gap-[6px] items-center">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <circle cx="8" cy="8" r="7" fill="#EB001B"/>
            <circle cx="16" cy="8" r="7" fill="#F79E1B"/>
            <path d="M12 3.5C10.8 4.7 10 6.3 10 8C10 9.7 10.8 11.3 12 12.5C13.2 11.3 14 9.7 14 8C14 6.3 13.2 4.7 12 3.5Z" fill="#FF5F00"/>
          </svg>
          <svg width="40" height="13" viewBox="0 0 40 13" fill="none">
            <path d="M15.2 12.5L17.8 0.5H21.2L18.6 12.5H15.2Z" fill="#00579F"/>
            <path d="M31.8 0.8C31.1 0.5 30 0.3 28.7 0.3C25.3 0.3 23 2 23 4.5C23 6.3 24.7 7.3 26 7.9C27.3 8.5 27.8 8.9 27.8 9.4C27.8 10.2 26.8 10.6 25.9 10.6C24.6 10.6 23.9 10.4 22.9 10L22.4 9.8L21.9 12.3C22.7 12.7 24.2 13 25.8 13C29.4 13 31.6 11.3 31.6 8.7C31.6 7.3 30.6 6.2 28.5 5.4C27.3 4.9 26.6 4.5 26.6 4C26.6 3.5 27.2 3 28.5 3C29.6 3 30.4 3.2 31.1 3.5L31.4 3.6L31.8 0.8Z" fill="#00579F"/>
            <path d="M37.2 0.5H34.5C33.6 0.5 32.9 0.7 32.5 1.6L27.3 12.5H30.9L31.7 10.4H36L36.4 12.5H39.6L37.2 0.5ZM32.8 7.9L34.5 3.5L35.5 7.9H32.8Z" fill="#00579F"/>
            <path d="M12.8 0.5L9.4 8.7L9 6.8C8.3 4.5 6.2 2 3.9 0.9L7 12.5H10.7L16.5 0.5H12.8Z" fill="#00579F"/>
            <path d="M5.8 0.5H0.1L0 0.7C4.2 1.8 7 4.2 8.1 7.1L6.9 1.6C6.7 0.7 6.1 0.5 5.8 0.5Z" fill="#FAA61A"/>
          </svg>
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
            <rect width="32" height="20" rx="3" fill="#016FD0"/>
            <path d="M18.5 14V12.5H19.5V14H18.5ZM20.5 14V12.5H21.5V14H20.5ZM22.5 14V12.5H23.5V14H22.5Z" fill="white"/>
            <path d="M9.5 8.5C9.5 9.88071 10.6193 11 12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5Z" fill="#FF6600"/>
          </svg>
        </div>
      </div>

      {/* Card Number */}
      <FormInput
        label="Número do cartão"
        value={formData.cardNumber}
        onChange={(e) => handleCardNumberChange(e.target.value)}
        placeholder="0000 0000 0000 0000"
        icon={<CardBrandIcon />}
      />

      {/* Card Name */}
      <FormInput
        label="Nome no cartão"
        value={formData.cardName}
        onChange={(e) => setFormData({ ...formData, cardName: e.target.value.toUpperCase() })}
        placeholder="Igual ao cartão"
      />

      {/* Expiry and CVV */}
      <div className="content-stretch flex flex-col md:flex-row gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full">
        <div className="w-full md:w-1/2">
          <FormInput
            label="Validade"
            value={formData.expiryDate}
            onChange={(e) => handleExpiryChange(e.target.value)}
            placeholder="MM/AA"
          />
        </div>

        <div className="w-full md:w-1/2">
          <FormInput
            label="Cód. CVV"
            value={formData.cvv}
            onChange={(e) => handleCvvChange(e.target.value)}
            placeholder="000"
            type="password"
            icon={
              <Info className="size-[16px] text-[#030213]" strokeWidth={2} />
            }
          />
        </div>
      </div>

      {/* Installments */}
      <div className="relative shrink-0 w-full">
        <div className="bg-white h-[52px] md:h-[56px] relative rounded-[8px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#e4e7e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[52px] md:h-[56px] items-center justify-between p-[14px] md:p-[18px] relative w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <label className="absolute top-0 left-0 font-['Inter:Medium',sans-serif] font-medium text-[#9b9b9b] text-[12px] leading-[1.25] pointer-events-none">
                  Parcelas
                </label>
                <select
                  value={formData.installments}
                  onChange={(e) => setFormData({ ...formData, installments: e.target.value })}
                  className="w-full bg-transparent border-none outline-none font-['Inter:Medium',sans-serif] font-medium text-[#333333] text-[14px] md:text-[16px] leading-[1.25] mt-[15px] cursor-pointer"
                >
                  <option value="1">1x de R$ 1.250,00</option>
                  <option value="2">2x de R$ 625,00</option>
                  <option value="3">3x de R$ 416,66</option>
                  <option value="4">4x de R$ 312,50</option>
                  <option value="5">5x de R$ 250,00</option>
                  <option value="6">6x de R$ 208,33</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click to Pay section */}
      {showClickToPay && (
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          {/* Click to Pay Info */}
          <div className="flex gap-[8px] items-start">
            <div className="flex gap-[4px] items-center mt-[2px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" fill="#EB001B"/>
                <circle cx="11" cy="8" r="7" fill="#F79E1B"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#030213] text-[12px]">
                Salve minhas informações no{' '}
                <span className="font-medium underline cursor-pointer">Click to Pay</span>{' '}
                para um checkout rápido e seguro.
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#717182] text-[11px] mt-[4px]">
                Seu número de celular será usado para validar você. Sujeito à{' '}
                <span className="underline cursor-pointer">área de mensageiros</span>.
              </p>
            </div>
          </div>

          {/* Checkbox */}
          <label className="flex gap-[8px] items-start cursor-pointer">
            <input
              type="checkbox"
              checked={formData.saveCard}
              onChange={(e) => setFormData({ ...formData, saveCard: e.target.checked })}
              className="mt-[2px] size-[16px] rounded border-[#e4e7e4] text-[#107a3b] focus:ring-[#107a3b]"
            />
            <div className="flex-1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#030213] text-[12px]">
                Manter-me conectado neste navegador{' '}
                <Info className="inline size-[12px] text-[#717182]" strokeWidth={2} />
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#717182] text-[11px] mt-[2px]">
                Ao continuar, você concorda com o{' '}
                <span className="underline cursor-pointer">Termos de Uso</span> da Mastercard e entende que seus dados serão processados de acordo com a{' '}
                <span className="underline cursor-pointer">Aviso de Privacidade</span>.
              </p>
            </div>
          </label>
        </div>
      )}
    </div>
  );
}
