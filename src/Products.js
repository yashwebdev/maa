const productsData = [
  {
    name: "HONEY- THE LIQUID GOLD",
    type: "multiple",
    description:
      "Honey is known as the liquid gold. It is not only high on nutrition, but it also alleviates allergies, acts as an instant energy drink, boosts memory, suppresses cough and cold, aids sleep, treats dandruff, treats wounds & burns and much more.",
    items: [
      {
        name: "Organic Natural Honey",
        description: "The gift of nature in its purest form",
        healthBenefits: "It helps in lowering down the cholesterol levels.",
        images: [`${require('./resources/product/Organic Honey/1.jpeg')}`, `${require('./resources/product/Organic Honey/2.jpeg')}`, `${require('./resources/product/Organic Honey/3.jpeg')}`],
        url: 'https://www.amazon.com'
      },
      {
        name: "Organic Jamun Honey",
        description: "The goodness of the tropical fruits blended with honey.",
        healthBenefits: "It helps in lowering down the cholesterol levels.",
        images: [`${require('./resources/product/Jamun Honey/1.jpeg')}`, `${require('./resources/product/Jamun Honey/2.jpeg')}`, `${require('./resources/product/Jamun Honey/3.jpeg')}`]
      },
      {
        name: "Organic Tulsi Honey",
        description:
          "Tulsi is known to be a medicinal herb itself. When blended with honey, it makes up for a warm and soothing combination.",
          healthBenefits: "It helps in lowering down the cholesterol levels.",
        images: [`${require('./resources/product/Tulsi Honey/1.jpeg')}`, `${require('./resources/product/Tulsi Honey/2.jpeg')}`, `${require('./resources/product/Tulsi Honey/3.jpeg')}`]
      },
      {
        name: "Organic Ginger Honey",
        description:
          "Ginger and honey make up a healthy blend and an effective medicine for cough and cold.",
          healthBenefits: "It helps in lowering down the cholesterol levels.",
        images: [`${require('./resources/product/Ginger Honey/1.jpeg')}`, `${require('./resources/product/Ginger Honey/2.jpeg')}`, `${require('./resources/product/Ginger Honey/3.jpeg')}`]
      },
      {
        name: "Organic Cinnamon Honey",
        description:
          "The fragrant flavour of cinnamon comes together to make a warm and tasteful mixture for winter.",
          healthBenefits: "It helps in lowering down the cholesterol levels.",
        images: [`${require('./resources/product/Cinnamon Honey/1.jpeg')}`, `${require('./resources/product/Cinnamon Honey/2.jpeg')}`, `${require('./resources/product/Cinnamon Honey/3.jpeg')}`]
      }
    ]
  },
  {
    name: "FLAVOURED AND SEASONED ORGHANIC DRY FRUITS",
    type: "multiple",
    description: "",
    items: [
      {
        name: "ORGANIC ROASTED ALMONDS",
        description:
          "Roasted in the Himalayan rock salt, organically grown almonds are rich inantioxidants and Vitamin E.",
        healthBenefits: "It helps in lowering down the cholesterol levels.",
        images: [`${require('./resources/product/Roasted Almonds/front.png')}`, `${require('./resources/product/Roasted Almonds/back.png')}`]
      },
      {
        name: "ORGANIC ROASTED CASHEWS",
        description:
          "The roasted ‘chakhna,’ joins up with organic living to create Organic Roasted Cashews. Roasted in rock salt, cashews are rich in zinc, magnesium, copper and iron.",
        healthBenefits:
          "They help boost the immunity system and fights against cancer and promotes formation of Red Blood Cells.",
          images: [`${require('./resources/product/Roasted Cashews/front.png')}`, `${require('./resources/product/Roasted Cashews/back.png')}`]
      },
      {
        name: "ORGANIC DRY FRUIT TRAIL MIX",
        description:
          "A healthy mix of organic almonds, organic cashews, organic walnuts and organic raisins roasted in Himalayan rock salt resulting in a very unique & delicious taste for anytime snacking.",
        healthBenefits:
          "For those who wish to manage weight and keep a watch on heart health the Organic Dry Fruit Trail Mix by MAA is great option. It also gives you a clear skin along with healthy hair since it is loaded with nutrients and is high in anti-oxidants.",
        images: [`${require('./resources/Berries Trail Mix.png')}`]
      },
      {
        name: "CHOCOLATE CASHEWS",
        description:
          "The richness of cashew combined with delicious taste of chocolate, this product by MAA is the cherry on the dry fruits cake. Chocolate Cashews are rich in iron, magnesium, zinc and copper.",
        healthBenefits:
          "healthy cholesterol, boosts immune system, aids in curing cancer, promotes formation of RBCs",
          images: [`${require('./resources/product/Chocolate Cashews/front.png')}`, `${require('./resources/product/Chocolate Cashews/back.png')}`]
      }
    ]
  },
  {
    name: "NUTS AND SEEDS- UNIQUE BLEND OF TASTE AND HEALTH",
    type: "multiple",
    description: "",
    items: [
      {
        name: "ORGANIC ROASTED FLAX SEEDS",
        description:
          "Organic flax seeds by MAA are roasted in Himalayan rock salt. The monotonous taste of flax seeds levels up with MAA.",
        healthBenefits:
          "Rich in high-quality proteins, they help control Cholesterol level and are loaded with nutrients. Rich in dietary fibre flax seeds is also known to lower blood pressure.",
        images: [`${require('./resources/Berries Trail Mix.png')}`]
      },
      {
        name: "ROASTED PUMPKIN SEEDS",
        description:
          "The unprecedented flavour of pumpkin seeds comes together in the twist of being roasted and that too in Himalayan Rock Salt.",
        healthBenefits:
          "Health Benefits: Roasted Pumpkin Seeds are high in antioxidants, high in fibre, good for heart health, contain zinc for immune support, rich in plant-based omega-3 fats, good for prostate health, antidiabetic effects, beneficial in postmenopausal women, stress reliever & provides restful sleep, anti-inflammatory benefits.",
          images: [`${require('./resources/product/Roasted Pumpkin Seeds/front.png')}`, `${require('./resources/product/Roasted Pumpkin Seeds/back.png')}`]
      },
      {
        name: "HEALTHY SEED MIX",
        description:
          "An absolutely new experience of all the healthy seeds sealed in one packet. A mixture of roasted edible seeds like pumpkin seeds, quinoa seeds, watermelon seeds, flax seeds, Healthy Seed Mix by MAA is a consolidated snack fulfilling the daily nutritional requirement.",
        healthBenefits:
          "High in protein and fibre, it is good for heart health.",
          images: [`${require('./resources/product/Healthy Seed Mix/front.png')}`]
      },
      {
        name: "ORGANIC ROASTED PEANUTS",
        description:
          "Purely organic peanuts sprinkled with rock salt are rich in proteins, minerals and Vitamin E.",
        healthBenefits:
          "It helps fight against nervous and heart diseases, prevents Alzheimer’s and nervous diseases.",
        images: [`${require('./resources/Berries Trail Mix.png')}`]
      },
      {
        name: "RATLAMI ROASTED PEANUTS",
        description:
          "Indulge in binge snacking with MAA’s spicy and tangy ratlami roasted peanuts, which gives you an authentic feel of Ratlami aroma and spices right from the very first bite.",
        healthBenefits: "",
        images: [`${require('./resources/Berries Trail Mix.png')}`]
      },
      {
        name: "ACHARI ROASTED PEANUTS",
        description:
          "The tangy flavours of pickle with the goodness of peanuts rich in proteins, minerals and Vitamin E.",
        healthBenefits: "",
        images: [`${require('./resources/Berries Trail Mix.png')}`]
      },
      {
        name: "SWEET CHILLI ROASTED PEANUTS",
        description:
          "Explore the sweet and spicy combination of sweet chilli peanuts and savour the taste blended with health.",
        healthBenefits: "",
        images: [`${require('./resources/Berries Trail Mix.png')}`]
      },
      {
        name: "CHILLI LEMON ROASTED PEANUTS",
        description:
          "Chilli and lemon have always been the best combination when it comes to your love for spicy and tangy food.",
        healthBenefits: "",
        images: [`${require('./resources/Berries Trail Mix.png')}`]
      },
      {
        name: "CHILLI GARLIC ROASTED PEANUTS",
        description:
          "Chilli and garlic when blended together have always been a treat for our taste buds! So, MAA’s Chilli Garlic Peanuts provides you with all the health benefits combined with the best of taste.",
        healthBenefits: "",
        images: [`${require('./resources/product/Chilli Garlic Peanuts/front.png')}`]
      }
    ]
  },
  {
    name: "BINGE SAVOURIES",
    type: "multiple",
    description: "",
    items: [
      {
        name: "CRUNCHY GARLIC STICKS",
        description:
          "Enjoy the taste of freshly baked garlic bread with an interesting twist of sticks form and the crunch of low cal ingredients. Best served with a dip, the Crunchy Garlic Sticks can also be enjoyed without one. It tastes best when served slightly heated.",
        healthBenefits:
          "Rich in high-quality proteins, they help control Cholesterol level and are loaded with nutrients. Rich in dietary fibre flax seeds is also known to lower blood pressure.",
          images: [`${require('./resources/product/Crunchy Garlic Sticks/front.png')}`]
      },
      {
        name: "CHANA HING JEERA",
        description:
          "Roasted not fried, Chana Hing Jeera is another option you can go for with your weight watch routine and foodie instincts. The authentic flavour of hing right in the first bite gives it an edge of Indian feel and also serves as good source of iron and protein.",
        healthBenefits:
          "Health Benefits: Roasted Pumpkin Seeds are high in antioxidants, high in fibre, good for heart health, contain zinc for immune support, rich in plant-based omega-3 fats, good for prostate health, antidiabetic effects, beneficial in postmenopausal women, stress reliever & provides restful sleep, anti-inflammatory benefits.",
          images: [`${require('./resources/product/Chana Hing Jeera/front.png')}`]
      },
      {
        name: "LENTIL SEED MIX",
        description:
          "A unique blend of roasted masoor lentil & roasted watermelon seeds, Lentil Seed Mix by MAA is an excellent option for the diet conscious and lowers cholesterol. Carrying anti-ageing properties, it also nourishes teeth & bones, gives you a glowing & radiant skin, stabilizes blood sugar level and is high on protein.",
        healthBenefits:
          "High in protein and fibre, it is good for heart health.",
        images: [`${require('./resources/product/Lentil Seed Mix/front.png')}`]
      },
      {
        name: "SADABAHAR MIX",
        description:
          "Rice Puff, Corn Flakes, Gram Wheat Flakes and Ground Nuts come together to blend with spices and create an unbelievably lip-smacking namkeen mixture that you can binge on without regrets!",
        healthBenefits:
          "It helps fight against nervous and heart diseases, prevents Alzheimer’s and nervous diseases.",
          images: [`${require('./resources/product/Sadabahar Mix/front.png')}`]
      },
      {
        name: "BERRIES TRAIL MIX",
        description:
          "This one is for the sweet-tooth binge cravers! Roasted dry fruits, roasted seeds, berries and dried fruits make up together for a mixture that feels like paradise to the ones who cannot control the foodie inside. Berries Trail Mix by MAA is a welcome change from the monotonous dry-fruits routine.",
        healthBenefits: "",
        images: [`${require('./resources/product/Berries Trail Mix/front.png')}`]
      },
      {
        name: "SWEET AND SOUR MIX",
        description:
          "A mixture of Rice Chiwda, Grams Wheat Flakes, Pressed Mong, Pressed Gram and Pressed Chana Dal wrapped in sweet and sour spices to give you a watery mouth and binge-eat goals.",
        healthBenefits: "",
        images: [`${require('./resources/product/Sweet n Sour Mix/front.png')}`]
      },
      {
        name: "GUR CHANA",
        description:
          "Bringing back the memories of grandma, a unique blend of jaggery & bhuna chana, traditionally acclaimed healthy snacking product, Gur Chana is the closest you’ll get to healthy snacking. It detoxes the liver, treats flu-like symptoms, purifies blood, boosts immunity and eases menstrual pain.",
        healthBenefits: "",
        images: [`${require('./resources/product/Gur Chana/front.png')}`]
      },
      {
        name: "DRY PEANUT CHUTNEY",
        description:
          "A healthy alternative for the regular chutneys and mayonnaise, Dry Peanut Chutney is an all purpose product. Use it as seasoning, add water/mayo/curd to use it as chutney, enhance taste of your food, use it on pizza/pasta, have it with chapati/parantha, etc.",
        healthBenefits: "",
        images: [`${require('./resources/Berries Trail Mix.png')}`]
      }
    ]
  },
  {
    name: "BESAN LADOO",
    type: "multiple",
    images: [`${require('./resources/Berries Trail Mix.png')}`, `${require('./resources/Roasted Cashews.png')}`, `${require('./resources/Tea Infuser Sticks.jpeg')}`],
    items: [
      {
        name: "BESAN LADOO",
        description:
          "Childhood memories are incomplete without “Nani-Dadi k haath ka khana”. Unleash the magic of &quot;MAA ka pyaar&quot; in the little balls of joy called Besan Laddu. Prepared with 100% organic ingredients, they are made to taste like mother&#39;s love.",
        healthBenefits:
          "Rich in high-quality proteins, they help control Cholesterol level and are loaded with nutrients. Rich in dietary fibre flax seeds is also known to lower blood pressure.",
          images: [`${require('./resources/Berries Trail Mix.png')}`, `${require('./resources/Roasted Cashews.png')}`, `${require('./resources/Tea Infuser Sticks.jpeg')}`]
      }]
  },
  {
    name: "TEA STICKS",
    type: "multiple",
    images: [`${require('./resources/product/Infuser Tea Sticks/front.png')}`],
    items: [
      {
        name: "TEA STICKS",
        description:
          "Tea brewing made instant, easy, innovative and tasty! Now you don't have to worry about the not-so-favourite taste of green tea! With a unique packaging, the infuser sticks are not just 50% more effective than regular tea bags, but also have 40 amazing flavours!",
        healthBenefits:
          "Rich in high-quality proteins, they help control Cholesterol level and are loaded with nutrients. Rich in dietary fibre flax seeds is also known to lower blood pressure.",
          images: [`${require('./resources/product/Infuser Tea Sticks/front.png')}`]
      }]
  },
  {
    name: "ORGANIC APPLE CIDER VINEGAR",
    type: "multiple",
    images: [`${require('./resources/Berries Trail Mix.png')}`, `${require('./resources/Roasted Cashews.png')}`, `${require('./resources/Tea Infuser Sticks.jpeg')}`],
    items: [
      {
        name: "ORGANIC APPLE CIDER VINEGAR",
        description:
          "Made with crushed organic apples, Organic Apple Cider Vinegar by MAA comes with multiple benefits. It is not just a tastemaker, but also helps lower blood sugar levels & fights diabetes, helps you lose weight & reduces belly fat, lowers cholesterol & improves heart health, fights cancer and kills pathogens including bacteria.",
        healthBenefits:
          "Rich in high-quality proteins, they help control Cholesterol level and are loaded with nutrients. Rich in dietary fibre flax seeds is also known to lower blood pressure.",
          images: [`${require('./resources/product/Infuser Tea Sticks/front.png')}`]
      }]
  },
  {
    name: "ORGANIC SAFFRON",
    type: "multiple",
    images: [`${require('./resources/product/Organic Saffron/front.png')}`],
    items: [
      {
        name: "ORGANIC APPLE CIDER VINEGAR",
        description:
          "A fragrant gift from nature, procured directly from the valleys of Kashmir, saffron has been used for food and medicinal purposes for ages. It protects from cancer, promotes learning & memory retention, and fights against cold & cough. It is the perfect food additive for adding a sunset yellow colour to food along with a soothing fragrance. Organic Saffron by MAA is a soothing food product and is absolutely natural & chemical free.",
        healthBenefits:
          "Rich in high-quality proteins, they help control Cholesterol level and are loaded with nutrients. Rich in dietary fibre flax seeds is also known to lower blood pressure.",
          images: [`${require('./resources/product/Organic Saffron/front.png')}`]
      }]
  },
  {
    name: "DESI COW GHEE",
    type: "multiple",
    images: [`${require('./resources/product/Desi Cow Ghee/front.png')}`],
    items: [
      {
        name: "DESI COW GHEE",
        description:
          "Desi Ghee is typically the clarified butter prepared by churning butter on low flame. It is used not just as daily nourishment but also for medicinal and religious purposes. Desi Cow Ghee by MAA helps boost digestion, helps in weight loss, balances your hormones, strengthens immunity & helps in bone development.",
        healthBenefits:
          "Rich in high-quality proteins, they help control Cholesterol level and are loaded with nutrients. Rich in dietary fibre flax seeds is also known to lower blood pressure.",
          images: [`${require('./resources/product/Desi Cow Ghee/front.png')}`]
      }]
  }
];

export default productsData;