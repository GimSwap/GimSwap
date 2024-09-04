"use client";

import ChevronRightIcon from "@/public/svg/chevron/right.svg";
import OpenVoucherIcon from "@/public/svg/token/open-voucher-border.svg";
import { useAddToken } from "@/src/lib/hook/useAddToken";
import { OPEN_VOUCHER, TOT } from "@/src/lib/constants/token";

export default function AddTokens() {
  const { addToken } = useAddToken();
  const handleAddToken = () => {
    addToken({
      address: OPEN_VOUCHER.contractAddress,
      image: OPEN_VOUCHER.imageUrl,
      symbol: OPEN_VOUCHER.symbol,
    });
    addToken({
      address: TOT.contractAddress,
      image: TOT.imageUrl,
      symbol: TOT.symbol,
    });
  };
  return (
    <section
      className="p-4 mt-4 w-full shadow-customShadow bg-black-1 rounded-2xl flex justify-between"
      onClick={handleAddToken}
    >
      <div className="flex items-center gap-2">
        <h5 className="font-medium text-black-8">Add Token to Wallet</h5>
        <div className="relative flex flex-row items-center">
          <OpenVoucherIcon className="z-10" />
          <TOT.icon className="-translate-x-1" />
        </div>
      </div>
      <ChevronRightIcon />
    </section>
  );
}
