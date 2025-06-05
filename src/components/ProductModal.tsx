import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import type { Product } from '../types/product';

interface Props {
  product: Product | null;
  onClose: () => void;
}

function ProductModal({ product, onClose }: Props) {
  return (
    <Transition appear show={!!product} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="ease-in duration-200"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-500 opacity-[0.7]" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-50 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-50 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {product && (
                  <>
                    <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      {product?.title}
                    </DialogTitle>
                    <div className="mt-2">
                      <img src={product?.image} alt={product?.title} className="w-48 h-48 mx-auto object-contain" />
                      <p className="text-sm text-gray-500 mt-4">{product?.description}</p>
                      <p className="text-lg font-semibold mt-2">${product?.price}</p>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200"
                        onClick={onClose}
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ProductModal;