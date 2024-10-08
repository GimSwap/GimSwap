import { TokenType } from '@/src/lib/types/TokenType';
import PopupTemplate from '../PopupTemplate';
import ArrowDownIcon from '@/public/svg/arrow/arrow-narrow-down.svg';
import { CHAIN_ID_TO_BLOCK_EXPLORER } from '@/src/lib/constants/blockExplorer';
import { safeCalc } from '@/src/lib/utils/safeCalc';
import { insertComma } from '@/src/lib/utils/insertComma';
import { useAccount } from 'wagmi';

interface SwapProgressPopupProps {
  open: boolean;
  onClose: () => void;
  tokens: {
    pay: TokenType;
    receive: TokenType;
  };
  amount: string;
  hash: `0x${string}`;
  closePrevPopup: () => void;
}

export default function SwapSuccessPopup({
  onClose,
  open,
  tokens,
  amount,
  hash,
  closePrevPopup,
}: SwapProgressPopupProps) {
  const { chainId } = useAccount();

  return (
    <PopupTemplate
      showCloseButton
      open={open}
      onClose={() => {
        closePrevPopup();
        onClose();
      }}
      icon="success"
    >
      <section className="px-6 flex flex-col items-center">
        <h3 className="font-bold text-center pb-4">Swap success!</h3>
        <section className="rounded-lg bg-black-3 flex flex-col justify-center items-center p-4 gap-[6px] w-full">
          <div className="flex gap-2 items-center">
            <tokens.pay.icon />
            <h5 className="text-black-8 font-medium">{`${insertComma(
              safeCalc.divide(amount, tokens.pay.unit).toFixed(),
            )}
            ${tokens.pay.name}`}</h5>
          </div>
          <ArrowDownIcon />
          <div className="flex gap-2 items-center">
            <tokens.receive.icon />
            <h5 className="text-black-8 font-medium">{`${insertComma(
              safeCalc.divide(amount, tokens.receive.unit).toFixed(),
            )}
            ${tokens.receive.name}`}</h5>
          </div>
        </section>
        <a
          href={`${CHAIN_ID_TO_BLOCK_EXPLORER[chainId!]}/${hash}`}
          className="text-purple-500 underline underline-offset-[2.5px] mt-4 mb-5"
          target="_blank"
        >
          View on Explorer
        </a>
      </section>
    </PopupTemplate>
  );
}
