import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 1. تعريف الـ Types
export interface Product {
  id: number
  title: string
  price: number
  image: string
}

export interface CartItem extends Product {
  quantity: number
}

export const useShopStore = defineStore('shop', () => {
  // قائمة المنتجات الوهمية
  const products = ref<Product[]>([
    { id: 1, title: 'لابتوب ديل احترافي', price: 950, image: '💻' },
    { id: 2, title: 'ماوس لاسلكي مريح', price: 30, image: '🖱️' },
    { id: 3, title: 'لوحة مفاتيح ميكانيكية', price: 80, image: '⌨️' },
    { id: 4, title: 'سماعات رأس مانعة للضوضاء', price: 150, image: '🎧' }
  ])

  // سلة المشتريات
  const cart = ref<CartItem[]>([])

  // الـ Getters (حساب الإجمالي والعدد)
  const totalItems = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return cart.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  // الـ Actions (إضافة وحذف من السلة)
  const addToCart = (product: Product) => {
    const existing = cart.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: number) => {
    cart.value = cart.value.filter(item => item.id !== productId)
  }

  return {
    products,
    cart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart
  }
})