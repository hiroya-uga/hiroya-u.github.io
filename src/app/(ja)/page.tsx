import { Footer } from '@/components/structures/Footer/Footer';
import { META } from '@/constants/meta';
import { externalMediaList } from '@/data/externalMediaList';

import { Metadata } from 'next';

export const metadata: Metadata & { title: string } = {
  title: META.siteName,
  description: 'Generated by create next app',
};

export default function Home() {
  return (
    <>
      <header className="py-12 px-4 sm:pt-16">
        <div className="max-w-[960px] mx-auto">
          <h1 className="text-2xl font-bold">{metadata.title}</h1>
        </div>
      </header>

      <main className="px-4">
        <div className="max-w-[960px] mx-auto">
          <blockquote
            cite="https://www.w3.org/mission/accessibility/"
            className="mb-8 p-4 bg-gray-200 rounded-sm sm:py-6 sm:px-8"
          >
            <p className="mb-2">
              <a href="https://www.w3.org/mission/accessibility/">
                The power of the Web is in its universality. Access by everyone regardless of disability is an essential
                aspect.
              </a>
            </p>

            <footer className="text-right">
              <p>—Tim Berners-Lee, W3C Director and inventor of the World Wide Web</p>
            </footer>
          </blockquote>
          <p className="mb-12 sm:mb-28">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora, odio quaerat vero perferendis totam
            beatae ullam illum eveniet adipisci ut dignissimos maiores, atque soluta ducimus placeat! Blanditiis, dicta
            nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus architecto, labore
            assumenda nesciunt laudantium. Consectetur minus quaerat voluptatem ipsa repudiandae repellendus magni
            beatae voluptatibus totam, placeat iste velit labore!
          </p>

          <h2 className="text-2xl mb-4">Documents</h2>

          <h3 className="font-bold mb-4">Translations</h3>

          <ul className="pl-5 mb-12">
            <li className="list-disc pl-1">
              <a href="documents/translations/pauljadam-modern-web-a11y-demos">
                日本語訳：PaulJAdam's Modern Web Accessibility Demos
              </a>
            </li>
          </ul>

          <h3 className="font-bold mb-4">Others</h3>

          <ul className="pl-5 mb-12 sm:mb-28">
            <li className="list-disc pl-1">
              <a href="/documents/fantasized-specs">Fantasized Web Standards and Specifications</a>
            </li>
          </ul>

          <h2 className="text-2xl mb-4">PROFILE</h2>

          <p className="mb-12">
            <a href="https://github.com/hiroya-uga">https://github.com/hiroya-uga</a>
          </p>

          <h3 className="font-bold mb-4">External Media</h3>

          <table className="mb-2">
            <tbody>
              {externalMediaList.slice(0, 3).map(({ date, category, title, href }) => {
                return (
                  <tr key={href} className="leading-6 sm:leading-7">
                    <td className="pr-2 font-mono text-xs leading-[inherit] sm:text-sm sm:pr-8">
                      <span className="inline-block">{date}</span>
                    </td>
                    <td className="pr-2 font-mono text-center uppercase text-xs leading-[inherit] sm:pr-8">
                      <span className="inline-block">{category}</span>
                    </td>
                    <td className="pb-6 text-sm leading-[inherit] sm:text-base sm:pb-4">
                      <a href={href} className="break-all">
                        {title}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className="mb-6 text-right">
            <a href="/documents/media/">外部メディア一覧</a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
