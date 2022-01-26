import Link from 'next/link';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const Homepage = () => {

  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  console.log('xx t: ', t);
  console.log('xx i18n: ', i18n);

  return (
    <>
      <main>

        <div>
          <Link
            href='/'
            locale={router.locale === 'en' ? 'zh' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>

    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Homepage;
