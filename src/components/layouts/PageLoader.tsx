import { Ship } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="flex h-14 w-14 items-center justify-center rounded-2xl maritime-gradient text-white shadow-lg">
          <Ship className="h-7 w-7" />
        </motion.div>
        <p className="text-sm font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
