return tags.map(tag => {
    return (
      <span className="mr4" key={tag}>
         <Link href={`/tags/[tagName]`} as={`/tags/${tag}`} passHref prefetch={false}>
            <a className={tagStyles.tagLink}>{tag}</a>
         </Link>
      </span>
    )
  })