const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: space,
    accessToken: token
})

  // get all posts
  export async function getAllArticles () {
    const entries = await client.getEntries({
      content_type: "article",
      order: "-fields.date",
    });
    if (entries.items) {
      return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
  }
  
  // get a post by slug
  export async function getArticleBySlug(slug) {
    const entries = await client.getEntries({
      content_type: "article",
      limit: 1,
      "fields.slug[in]": slug,
    });
    if (entries.items) {
      return entries.items[0];
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
  }
  
  // get more 3 latest posts
  export async function getMoreArticles(slug) {
    const entries = await client.getEntries({
      content_type: "article",
      limit: 3,
      order: "-fields.date",
      "fields.slug[nin]": slug,
    });
  
    if (entries.items) {
      return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
  }
  
  function parseArticleSlug({ fields }) {
    return {
      slug: fields.slug,
    };
  }
  
  function parseArticleSlugEntries(entries, cb = parseArticleSlug) {
    return entries?.items?.map(cb);
  }
  
  // get all slugs of posts
  export async function getAllArticlesWithSlug() {
    const entries = await client.getEntries({
      content_type: "article",
      select: "fields.slug",
    });
    return parseArticleSlugEntries(entries, (article) => article.fields);
  }