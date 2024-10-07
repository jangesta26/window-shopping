'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Winshopee ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Window Shopping designed to replicate the experience of window shopping, allowing users to browse a diverse array of products visually. With an intuitive interface, customers can explore various categories, view items from multiple angles, and access detailed descriptions without the pressure of immediate purchase. This leisurely shopping experience encourages exploration, making it easy to discover new products and enjoy the thrill of shopping from the comfort of home.`,
    keywords: 'Winshopee, E-commerce, jangesta26 github, janell-gesta-a5966815a LinkedIn, Ghin Xam Cloudinary, Shadcn UI, Mantine UI, HTML, CSS, Javascript, Typescript, React.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`https://....${pathname}`} />
      <link rel='canonical' href={`https://....${pathname}`} />
      <link rel='me' href='mailto:janellgesta@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Janell Gesta' />
      <meta property='og:title' content={meta.title} />
    </>
  )
}

export default Head;