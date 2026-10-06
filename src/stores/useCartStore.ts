import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 1. تعريف Interface للمنتج جوه السلة
interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
}

// 2. تعريف الـ Store
export const useCartStore = defineStore('cart', () => {
  // --- State (البيانات) ---
  const items = ref<CartItem[]>([])

  // --- Getters (البيانات المحسوبة) ---
  // عدد المنتجات الإجمالي في السلة
  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  // السعر الإجمالي
  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  // --- Actions (الدوال اللي بتعدل الحالة) ---
  const addItem = (product: Omit<CartItem, 'quantity'>) => {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      // بنضيف المنتج ومعاه quantity تبدأ بـ 1
      items.value.push({ ...product, quantity: 1 })
    }
  }

  const removeItem = (productId: number) => {
    items.value = items.value.filter(item => item.id !== productId)
  }

  // بنرجع كل الحاجات اللي محتاجينها برا الـ Store
  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem
  }
})