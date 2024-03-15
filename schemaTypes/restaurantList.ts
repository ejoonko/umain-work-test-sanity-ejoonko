import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurantList',
  title: 'Restaurant List',
  type: 'document',
  fields: [
    defineField({
      name: 'restaurantListTitle',
      title: 'Restaurant List Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'restaurantListTitle',
    },
  },
})
