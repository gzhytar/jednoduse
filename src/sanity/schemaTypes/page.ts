import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'blocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'offering' },
        { type: 'testimonial' },
        { type: 'bio' },
        { type: 'cta' },
        { type: 'faq' },
        { type: 'richText' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare(selection) {
      const { title, slug } = selection
      return {
        title: title,
        subtitle: slug ? `/${slug}` : 'No slug',
      }
    },
  },
})
