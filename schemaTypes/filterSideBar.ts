import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'filterSideBar',
  title: 'Filter Side Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'filterTitle',
      title: 'Filter Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'foodCategoryLabel',
        title: 'Food Category Label',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'deliveryTimeLabel',
        title: 'Delivery Time Label',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'priceRangeLabel',
        title: 'Price Range Label',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'priceRanges',
        title: 'Price Ranges',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'priceRange'}
            ]
          }
        ]
    }),
  ],
  preview: {
    select: {
      title: 'filterTitle',
    },
  },
})
