import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clean up
  await prisma.orderItem.deleteMany({})
  await prisma.order.deleteMany({})
  await prisma.menuItem.deleteMany({})
  await prisma.category.deleteMany({})

  // Categories
  const burgers = await prisma.category.create({
    data: { name: 'Burgers', slug: 'burgers' }
  })
  const bowls = await prisma.category.create({
    data: { name: 'Bowls', slug: 'bowls' }
  })
  const dessert = await prisma.category.create({
    data: { name: 'Desserts', slug: 'desserts' }
  })
  const brunch = await prisma.category.create({
    data: { name: 'Brunch', slug: 'brunch' }
  })

  // Menu Items
  await prisma.menuItem.createMany({
    data: [
      {
        name: 'Korean Fried Burger',
        description: 'Ultra-saftiges fried chicken, getaucht in unserer sticky-spicy koreanischen BBQ-Sauce, dazu cremige Mayo, crisp Eisbergsalat, sesamige Karottenstreifen und knackige Essiggurken.',
        price: 14.90,
        imageUrl: '/images/608563124_18325245766301030_56-d543c68b5b46.webp',
        categoryId: burgers.id,
      },
      {
        name: 'Halloumi Burger',
        description: 'Gegrillter Halloumi, dazu gebackene Melanzani & rote Beete. Abgerundet mit knackigem Rotkraut, Rotweinzwiebeln, frischem Eisbergsalat und Senf-Honig-Sauce.',
        price: 13.50,
        imageUrl: '/images/588456433_18321600325301030_80-861d31c82e60.webp',
        categoryId: burgers.id,
      },
      {
        name: 'Spicy Korean Duck Bowl',
        description: '100% Vegan. Sesamreis trifft auf saftige, vegane Duck aus Soja, begleitet von feurigem Kimchi, Chili-Gurken & cremiger Spicy Mayo.',
        price: 15.90,
        imageUrl: '/images/587290189_18320854813301030_41-6dae546d8340.webp',
        categoryId: bowls.id,
      },
      {
        name: 'Vegan Cheesecake Dreams',
        description: 'Wahlweise Caramel Pecan, Pistachio Lime oder Ferrero Chocolate. Vegan, sugar-free, soy-free und gluten-free.',
        price: 6.90,
        imageUrl: '/images/586719461_18322032922301030_26-b6e94323618f.webp',
        categoryId: dessert.id,
      },
      {
        name: 'French Toast Moment',
        description: 'Fluffiges, goldbraun gebratenes Pain Brioche, dazu fruchtige Himbeersauce, frische Erdbeeren, Himbeeren, Blaubeeren und ein Hauch Zimt.',
        price: 11.50,
        imageUrl: '/images/587954095_18323194984301030_70-4345a9e36fa4.webp',
        categoryId: brunch.id,
      }
    ]
  })

  console.log('Seed completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
