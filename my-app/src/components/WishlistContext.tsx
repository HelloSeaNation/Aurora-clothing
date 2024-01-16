import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  hoverImage: string;
}

interface WishlistContextProps {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (item: WishlistItem) => void;
  isInWishlist: (item: WishlistItem) => boolean;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  
    const addToWishlist = (item: WishlistItem) => {
      setWishlistItems((prevItems) => [...prevItems, item]);
    };
  
    const removeFromWishlist = (item: WishlistItem) => {
      setWishlistItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    };
  
    const isInWishlist = (item: WishlistItem) => {
      return wishlistItems.some((i) => i.id === item.id);
    };
  
    return (
      <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}>
        {children}
      </WishlistContext.Provider>
    );
  };

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
      throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};