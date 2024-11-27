const callouts = [
    {
      name: 'Fashion',
      description: 'Clothing, accessories, and personal style',
      imageSrc: 'https://img.freepik.com/premium-photo/online-fashion-shopping-collage_23-2150535851.jpg?w=360',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Electronic Accessories',
      description: 'Gadgets, devices, and technology',
      imageSrc: 'https://img.freepik.com/premium-photo/high-angle-view-computer-keyboard-table_1048944-27721217.jpg?w=1380',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Vehicles',
      description: 'Cars, bikes, and transportation solutions',
      imageSrc: 'https://img.freepik.com/free-photo/man-sitting-roof-car-with-megaphone_1194-1195.jpg?t=st=1732615439~exp=1732619039~hmac=c9b3f3203d64edcafbbec59b001281a5e0bcc963e006133530955ccbc73f0276&w=900',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Category() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Category</h2>
  
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
          </div>
        </div>
      </div>
    )
  }
  