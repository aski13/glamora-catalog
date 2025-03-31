
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { 
    items, 
    totalPrice, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    isCartOpen, 
    setIsCartOpen,
    totalItems
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="sm:max-w-md w-full">
        <SheetHeader>
          <SheetTitle>Ваша корзина ({totalItems} товаров)</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col gap-5 py-4 overflow-y-auto max-h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-lg font-medium mb-2">Ваша корзина пуста</h3>
              <p className="text-muted-foreground mb-6">
                Похоже, вы еще не добавили товары в корзину.
              </p>
              <Button 
                className="bg-cosmetic-rose hover:bg-cosmetic-pink"
                onClick={() => setIsCartOpen(false)}
              >
                Продолжить покупки
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div 
                key={item.product.id} 
                className="flex border-b border-gray-100 pb-4"
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <Link 
                          to={`/product/${item.product.id}`}
                          onClick={() => setIsCartOpen(false)}
                          className="hover:text-cosmetic-rose"
                        >
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="ml-4">{(item.product.price * item.quantity).toLocaleString()} ₽</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-1">{item.product.category}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="px-2 text-gray-600 min-w-[30px] text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {items.length > 0 && (
          <>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-1">
                <p>Итого</p>
                <p>{totalPrice.toLocaleString()} ₽</p>
              </div>
              <p className="text-sm text-gray-500">
                Доставка и налоги рассчитываются при оформлении заказа.
              </p>
            </div>
            <SheetFooter className="flex-col gap-3 mt-6">
              <Button className="w-full bg-cosmetic-rose hover:bg-cosmetic-pink text-white">
                Оформить заказ
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={clearCart}
              >
                Очистить корзину
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
