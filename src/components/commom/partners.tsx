'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

interface PartnersProps {
  title: string;
}

const PartnersLogo = [
  {
    id: 1,
    logoUrl: '/simple-icons_nike.svg',
    name: 'Nike',
  },
  {
    id: 6,
    logoUrl: '/Polo-Ralph-Lauren-Black-1.svg',
    name: 'Polo',
  },
  {
    id: 2,
    logoUrl: '/simple-icons_adidas.svg',
    name: 'Adidas',
  },
  {
    id: 3,
    logoUrl: '/simple-icons_nike.svg',
    name: 'Nike',
  },
  {
    id: 4,
    logoUrl: '/simple-icons_newbalance.svg',
    name: 'New balance',
  },
  {
    id: 5,
    logoUrl: '/simple-icons_puma.svg',
    name: 'Puma',
  },
  {
    id: 6,
    logoUrl: '/g3222.svg',
    name: 'Converse',
  },
  {
    id: 7,
    logoUrl: '/Zara_Logo-1.svg',
    name: 'Zara',
  },
];

const duplicatedClients = [...PartnersLogo, ...PartnersLogo];

const Partners = ({ title }: PartnersProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        <div className="">
          <motion.div
            animate={{
              x: [0, -800],
            }}
            className="flex space-x-8"
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            dragElastic={0.1}
            style={{ cursor: 'grab' }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            whileDrag={{ cursor: 'grabbing' }}
          >
            {duplicatedClients.map((client) => (
              <motion.div
                className="flex h-30 w-30 flex-shrink-0 items-center justify-center rounded-3xl p-4 transition-colors duration-200 "
                key={uuidv4()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center">
                  <Image
                    alt={`Logo ${client.name}`}
                    className="mb-2 h-12 w-full object-contain"
                    height={100}
                    src={client.logoUrl}
                    width={100}
                  />
                  <p className="font-semibold">{client.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
