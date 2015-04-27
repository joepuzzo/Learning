
def obvious_total(subtotal: 0, tax: 0, discount: 0)
  subtotal + tax - discount
end

puts obvious_total(subtotal: 100, tax: 10, discount: 5)

puts obvious_total(100,10,5)

