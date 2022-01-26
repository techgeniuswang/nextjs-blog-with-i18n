import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';


const Homepage = () => {

  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  // console.log('xx i18n.language: ', i18n.language);
  console.log('xx i18n: ', i18n);

  return (
    <React.Fragment>
      <main>

        <div>

          <Link
            href='/'
            locale={router.locale === 'en' ? 'zh' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>  <span> change router.locale</span>

        </div>

        <br />

        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}
        >
          {t('change-locale')}
        </button>  <span> change i18n.language</span>

        <br />

      </main>

    </React.Fragment>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})


export default Homepage;
