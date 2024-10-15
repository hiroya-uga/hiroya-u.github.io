import Link from 'next/link';
import { SimpleDescriptionList } from '@/components/List';
import { PageTitle } from '@/components/structures/PageTitle';

import { getMetadata } from '@/utils/seo';

export const metadata = getMetadata({
  title: '日本語訳まとめ',
  description: '仕様書など、外部資料を日本語訳したものをまとめた階層です。',
  twitter: {
    card: 'summary_large_image',
    title: '日本語訳まとめ',
    description: '仕様書など、外部資料を日本語訳したものをまとめた階層です。',
  },
});

export default function Page() {
  return (
    <>
      <PageTitle title={metadata.pageTitle}>
        <p>{metadata.description}</p>
      </PageTitle>

      <SimpleDescriptionList
        list={[
          {
            key: `Images Tutorial`,
            title: (
              <>
                <Link href="/documents/translations/w3c/wai/tutorials/images/">Images Tutorial</Link>
              </>
            ),
            description: 'WAI(W3C)による代替テキストに関するチュートリアルの日本語訳。',
          },
          {
            key: `PaulJAdam's Modern Web Accessibility Demos`,
            title: (
              <>
                <Link href="/documents/translations/pauljadam-modern-web-a11y-demos/">
                  PaulJAdam's Modern Web Accessibility Demos
                </Link>
              </>
            ),
            description: 'PaulJAdam氏によるアクセシビリティデモの日本語訳。',
          },
        ]}
      />
    </>
  );
}
