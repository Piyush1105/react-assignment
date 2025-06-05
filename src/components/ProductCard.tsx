import type { Product } from '../types/product';
import { Disclosure, DisclosureButton } from '@headlessui/react';

interface Props {
  product: Product;
  onClick: () => void;
}

function ProductCard({ product, onClick }: Props) {
  return (
    <div className="w-full max-w-xs mx-auto rounded-2xl bg-white p-4 shadow-md hover:shadow-xl transition cursor-pointer border" onClick={onClick}>
      <Disclosure>
        {() => (
          <>
            <DisclosureButton className="flex flex-col items-start w-full space-y-2">
              <img src={product.image} alt={product?.title} className="w-24 h-24 object-contain self-center" />
              <div className="w-full">
                <h2 className="text-base font-semibold text-gray-800 line-clamp-1">{product?.title}</h2>
                <p className="text-xs text-gray-500 line-clamp-2 min-h-[2rem]">{product?.description}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm font-bold text-blue-600">${product?.price}</p>
                </div>
              </div>
            </DisclosureButton>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default ProductCard;