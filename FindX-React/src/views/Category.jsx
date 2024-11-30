// const callouts = [
//     {
//       name: 'Fashion',
//       description: 'Clothing, accessories, and personal style',
//       imageSrc: 'https://img.freepik.com/premium-photo/online-fashion-shopping-collage_23-2150535851.jpg?w=360',
//       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//       href: '#',
//     },
//     {
//       name: 'Electronic Accessories',
//       description: 'Gadgets, devices, and technology',
//       imageSrc: 'https://img.freepik.com/premium-photo/high-angle-view-computer-keyboard-table_1048944-27721217.jpg?w=1380',
//       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//       href: '#',
//     },
//     {
//       name: 'Vehicles',
//       description: 'Cars, bikes, and transportation solutions',
//       imageSrc: 'https://img.freepik.com/free-photo/man-sitting-roof-car-with-megaphone_1194-1195.jpg?t=st=1732615439~exp=1732619039~hmac=c9b3f3203d64edcafbbec59b001281a5e0bcc963e006133530955ccbc73f0276&w=900',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: '#',
//     },
//   ]
  
//   export default function Category() {
//     return (
//       <>
//       <div className="bg-gray-100">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
//             <h2 className="text-2xl font-bold text-gray-900">Category</h2>
  
//             <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
//               {callouts.map((callout) => (
//                 <div key={callout.name} className="group relative">
//                   <img
//                     alt={callout.imageAlt}
//                     src={callout.imageSrc}
//                     className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
//                   />
//                   <h3 className="mt-6 text-sm text-gray-500">
//                     <a href={callout.href}>
//                       <span className="absolute inset-0" />
//                       {callout.name}
//                     </a>
//                   </h3>
//                   <p className="text-base font-semibold text-gray-900">{callout.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
      
//     )
//   }
  

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const callouts = [
  {
    name: 'Fashion',
    description: 'Clothing, accessories, and personal style',
    imageSrc: 'https://img.freepik.com/premium-photo/online-fashion-shopping-collage_23-2150535851.jpg?w=360',
    imageAlt: 'A variety of fashion items including clothing, accessories, and shopping bags.',
    href: '#',
  },
  {
    name: 'Electronic Accessories',
    description: 'Gadgets, devices, and technology',
    imageSrc: 'https://img.freepik.com/premium-photo/high-angle-view-computer-keyboard-table_1048944-27721217.jpg?w=1380',
    imageAlt: 'A workspace with a computer keyboard, mug, and other tech accessories.',
    href: '#',
  },
  {
    name: 'Vehicles',
    description: 'Cars, bikes, and transportation solutions',
    imageSrc: 'https://img.freepik.com/free-photo/man-sitting-roof-car-with-megaphone_1194-1195.jpg?t=st=1732615439~exp=1732619039~hmac=c9b3f3203d64edcafbbec59b001281a5e0bcc963e006133530955ccbc73f0276&w=900',
    imageAlt: 'A person sitting on top of a car with a megaphone, representing transportation.',
    href: '#',
  },
];

export default function Category() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>

          {/* Trigger to open the modal */}
          <button
            onClick={toggleModal}
            className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Activate Agent System
          </button>

          {/* Modal as overlay */}
          {isModalOpen && (
            <Dialog open={isModalOpen} onClose={toggleModal} className="relative z-10">
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
              />

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                  >
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                          <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                           Seller Agent Activated!!
                          </DialogTitle>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)} // Close the modal
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-autofocus
                        onClick={() => setIsModalOpen(false)} // Close the modal
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Cancel
                      </button>
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
}
