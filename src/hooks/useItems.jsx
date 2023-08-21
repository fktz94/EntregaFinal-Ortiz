import { useCallback } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default function useItems() {
  const getAllProducts = useCallback(async () => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'PRODUCTOS');
    let data;
    try {
      const dbData = await getDocs(itemsCollection);
      const snapshot = dbData.docs.map((el) => {
        return { ...el.data(), id: el.id };
      });
      data = snapshot;
    } catch (e) {
      throw new Error(e);
    }
    return data;
  }, []);

  return { getAllProducts };
}
