import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'frontPage',
  title: 'Front Page',
  type: 'document',
  fields: [
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      }),
    defineField({
        name: 'restaurantList',
        type: 'reference',
        to: [{type: 'restaurantList'}],
        validation: (Rule) => Rule.required(),
      }),
    defineField({
        name: 'filterSideBar',
        type: 'reference',
        to: [{type: 'filterSideBar'}],
        validation: (Rule) => Rule.required(),
      }),
    defineField({
        name: 'mobileWelcomeModal',
        type: 'reference',
        to: [{type: 'mobileWelcomeModal'}],
        validation: (Rule) => Rule.required(),
      }),
  ],
  preview: {
    select: {
        media: "logo"
    },
  },
})
