import Link from 'next/link'

export default (
  () => (
    <div className='link-container'>
      <Link as='/color-switch/' href='/'><a>Index</a></Link>
      <Link as='/color-switch/page1' href='/page1'><a>Page1</a></Link>
      <style jsx>{`
        a {
          color: blue;
          margin-right: 10px;
        }

        .link-container {
          margin: 20px 0;
        }
      `}</style>
    </div>
  )
)
