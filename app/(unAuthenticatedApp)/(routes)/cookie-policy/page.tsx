import ComponentWrapper from '@/components/ComponentWrapper';

export const dynamic = 'force-static';

const CookiePolicy = () => {
  return (
    <ComponentWrapper className='mx-auto my-8 container'>
      <h1 className='mb-4 font-semibold text-3xl'>Cookie Policy</h1>
      <p>
        Effective Date: 19-Jan-2024 <br />
        Last Updated: 19-Jan-2024
      </p>

      <div className='mt-8'>
        <h5 className='mb-4 font-semibold text-xl'>What are cookies?</h5>
        <div className='cookie-policy-p'>
          <p>
            This Cookie Policy explains what cookies are and how we use them,
            the types of cookies we use i.e, the information we collect using
            cookies and how that information is used, and how to manage the
            cookie settings.
          </p>
          <p>
            Cookies are small text files that are used to store small pieces of
            information. They are stored on your device when the website is
            loaded on your browser. These cookies help us make the website
            function properly, make it more secure, provide better user
            experience, and understand how the website performs and to analyze
            what works and where it needs improvement.
          </p>
        </div>
      </div>

      <div className='mt-8'>
        <h5 className='mb-4 font-semibold text-xl'>How do we use cookies?</h5>
        <div className='cookie-policy-p'>
          <p>
            As most of the online services, our website uses first-party and
            third-party cookies for several purposes. First-party cookies are
            mostly necessary for the website to function the right way, and they
            do not collect any of your personally identifiable data.
          </p>
          <p>
            The third-party cookies used on our website are mainly for
            understanding how the website performs, how you interact with our
            website, keeping our services secure, providing advertisements that
            are relevant to you, and all in all providing you with a better and
            improved user experience and help speed up your future interactions
            with our website.
          </p>
        </div>
      </div>

      <div className='mt-8'>
        <h5 className='mb-4 font-semibold text-xl'>Types of Cookies we use</h5>
        <div className='cky-audit-table-element'></div>
      </div>

      <div className='mt-8'>
        <h5 className='mb-4 font-semibold text-xl'>
          Manage cookie preferences
        </h5>
        <a
          href='#'
          className='inline-block border-gray-400 bg-gray-200 px-6 py-2 border rounded text-gray-800 cursor-pointer cky-banner-element'>
          Cookie Settings
        </a>
        <div className='mt-4'>
          <p>
            You can change your cookie preferences any time by clicking the
            above button. This will let you revisit the cookie consent banner
            and change your preferences or withdraw your consent right away.
          </p>
          <p>
            In addition to this, different browsers provide different methods to
            block and delete cookies used by websites. You can change the
            settings of your browser to block/delete the cookies. Listed below
            are the links to the support documents on how to manage and delete
            cookies from the major web browsers.
          </p>
          <ul className='ml-6 list-disc'>
            <li>
              Chrome:{' '}
              <a
                href='https://support.google.com/accounts/answer/32050'
                target='_blank'
                rel='noopener noreferrer'>
                https://support.google.com/accounts/answer/32050
              </a>
            </li>
            <li>
              Safari:{' '}
              <a
                href='https://support.apple.com/en-in/guide/safari/sfri11471/mac'
                target='_blank'
                rel='noopener noreferrer'>
                https://support.apple.com/en-in/guide/safari/sfri11471/mac
              </a>
            </li>
            <li>
              Firefox:{' '}
              <a
                href='https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US'
                target='_blank'
                rel='noopener noreferrer'>
                https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
              </a>
            </li>
            <li>
              Internet Explorer:{' '}
              <a
                href='https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc'
                target='_blank'
                rel='noopener noreferrer'>
                https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
              </a>
            </li>
          </ul>
          <p>
            If you are using any other web browser, please visit your browser’s
            official support documents.
          </p>
        </div>
      </div>

      <p className='mt-8 cookie-policy-p'>
        Cookie Policy Generated By{' '}
        <a
          href='https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW'
          target='_blank'
          rel='noopener noreferrer'>
          CookieYes - Cookie Policy Generator
        </a>
        .
      </p>
    </ComponentWrapper>
  );
};

export default CookiePolicy;
