import type { categoryTable } from '@/db/schema/categoryTable';
import { Button } from '../ui/button';

interface CategorySelectorProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
  return (
    <div className="rounded-3xl bg-[#F4EFFF] p-6">
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Button
            className="cursor-pointer rounded-full bg-white font-semibold text-xs"
            key={category.id}
            variant="ghost"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
