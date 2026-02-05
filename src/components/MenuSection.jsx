import FoodCard from './FoodCard';

const MenuSection = ({ title, items, onAddToCart }) => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-display text-3xl font-bold text-brand-black border-l-4 border-brand-red pl-4">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <FoodCard
                            key={item.id}
                            item={item}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
