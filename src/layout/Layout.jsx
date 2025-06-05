
// import { Outlet, useLocation } from 'react-router-dom';
// import {
//   GcdsHeader,
//   GcdsContainer,
//   GcdsFooter,
//   GcdsTopNav,
//   GcdsNavLink,
//   GcdsBreadcrumbsItem,
//   GcdsBreadcrumbs,
//   GcdsLangToggle,
// } from '@cdssnc/gcds-components-react';
// import '@cdssnc/gcds-components-react/gcds.css';
// import './Layout.css';
// import { useTranslation } from 'react-i18next';
// import { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// export default function Layout() {
//   const { t, i18n } = useTranslation();
//   const location = useLocation();
//   const isLandingPage = location.pathname === '/';
//   const [announcement, setAnnouncement] = useState('');

//   useEffect(() => {
//     if (isLandingPage) {
//       document.body.classList.add('landing-page');
//     } else {
//       document.body.classList.remove('landing-page');
//     }
//   }, [isLandingPage]);

//   useEffect(() => {
//     const routeTitles = {
//       '/': t('menu.home'),
//       '/contact-us': t('pages.contactUs.title'),
//     };

//     const currentTitle =
//       routeTitles[location.pathname] + ' - GeoView.ca' || 'GeoView.ca';
//     document.title = currentTitle;

//     const timer = setTimeout(() => {
//       setAnnouncement(currentTitle);
//     }, 200);

//     return () => clearTimeout(timer);
//   }, [location.pathname, t]);

//   const contextualLinks = {
//     [t('footer.resultsExplained')]: '/geocoding-results-explanation',
//     [t('footer.faq')]: '/frequently-asked-questions',
//   };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     toast.dismiss();
//     setAnnouncement(
//       lng === 'fr'
//         ? 'La langue a été changée en français'
//         : 'The language has been changed to English'
//     );
//   };

//   return (
//     <>
//       <GcdsHeader
//         langHref={i18n.language}
//         signatureHasLink="false"
//         lang={i18n.language}
//         style={{ fontSize: '20px' }}
//       >
//         <div slot="menu">
//           <GcdsTopNav label="Top navigation" alignment="right">
//             <GcdsNavLink href="/" slot="home">
//               GeoView
//             </GcdsNavLink>
//             <GcdsNavLink
//               href="/contact-us"
//               current={location.pathname === '/contact-us' ? true : undefined}
//             >
//               {t('menu.contactUs')}
//             </GcdsNavLink>
//           </GcdsTopNav>
//         </div>
//         <div slot="breadcrumb">
//           {!isLandingPage && (
//             <GcdsBreadcrumbs>
//               <GcdsBreadcrumbsItem href="/">GeoView</GcdsBreadcrumbsItem>
//             </GcdsBreadcrumbs>
//           )}
//         </div>
//         <div
//           slot="skip-to-nav"
//           style={{
//             textAlign: 'center',
//             top: '10px',
//             left: 0,
//             width: '100%',
//             zIndex: 3,
//           }}
//         >
//           <a
//             className="skip-to-content-link"
//             href="#main-content"
//             aria-label={t('menu.skipNav')}
//           >
//             {t('menu.skipNav')}
//           </a>
//         </div>
//         <div slot="toggle">
//           <GcdsLangToggle
//             href="#"
//             lang={i18n.language}
//             onClick={(e) => {
//               e.preventDefault();
//               changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
//             }}
//           />
//         </div>
//       </GcdsHeader>

//       {/* Conditional layout for landing vs other pages */}
//       {isLandingPage ? (
//         <div
//           id="main-content"
//           style={{
//             flexGrow: '1',
//             marginTop: '0',
//             paddingTop: '0',
//           }}
//         >
//           <Outlet />
//         </div>
//       ) : (
//         <GcdsContainer
//           size="xl"
//           centered
//           color="black"
//           style={{ flexGrow: '1' }}
//           main-container
//           id="main-content"
//         >
//           <Outlet />
//         </GcdsContainer>
//       )}

//       {/* Live region for announcements */}
//       <span
//         role="status"
//         aria-live="polite"
//         tabIndex="-1"
//         style={{
//           position: 'absolute',
//           left: '-9999px',
//           width: '1px',
//           height: '1px',
//           overflow: 'hidden',
//         }}
//       >
//         {announcement}
//       </span>

//       <GcdsFooter
//         lang={i18n.language}
//         display="full"
//         contextualHeading={t('footer.additionalNav')}
//         contextualLinks={contextualLinks}
//         style={{ paddingTop: '50px' }}
//       />
//       <ToastContainer position="top-right" autoClose={false} theme="dark" />
//     </>
//   );
// }



// import { Outlet, useLocation } from 'react-router-dom';
// import {
//   GcdsHeader,
//   GcdsContainer,
//   GcdsFooter,
//   GcdsTopNav,
//   GcdsNavLink,
//   GcdsBreadcrumbsItem,
//   GcdsBreadcrumbs,
//   GcdsLangToggle,
// } from '@cdssnc/gcds-components-react';

// import '@cdssnc/gcds-components-react/gcds.css';
// import './Layout.css';

// import { useTranslation } from 'react-i18next';
// import { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// export default function Layout() {
//   const { t, i18n } = useTranslation();
//   const location = useLocation();
//   const isLandingPage = location.pathname === '/';
//   const [announcement, setAnnouncement] = useState('');

//   useEffect(() => {
//     if (isLandingPage) {
//       document.body.classList.add('landing-page');
//     } else {
//       document.body.classList.remove('landing-page');
//     }
//   }, [isLandingPage]);

//   useEffect(() => {
//     const routeTitles = {
//       '/': t('menu.home'),
//       '/contact-us': t('pages.contactUs.title'),
//     };

//     const currentTitle =
//       routeTitles[location.pathname] + ' - GeoView.ca' || 'GeoView.ca';
//     document.title = currentTitle;

//     const timer = setTimeout(() => setAnnouncement(currentTitle), 200);
//     return () => clearTimeout(timer);
//   }, [location.pathname, t]);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     toast.dismiss();
//     setAnnouncement(
//       lng === 'fr'
//         ? 'La langue a été changée en français'
//         : 'The language has been changed to English'
//     );
//   };

//   const contextualLinks = {
//     [t('footer.resultsExplained')]: '/geocoding-results-explanation',
//     [t('footer.faq')]: '/frequently-asked-questions',
//   };

//   return (
//     <>
//       <GcdsHeader
//         langHref={i18n.language}
//         signatureHasLink="false"
//         lang={i18n.language}
//         style={{ fontSize: '20px' }}
//       >
//         <div slot="menu">
//           <GcdsTopNav label="Top navigation" alignment="right">
//             <GcdsNavLink href="/" slot="home">
//               GeoView
//             </GcdsNavLink>
//             <GcdsNavLink
//               href="/contact-us"
//               current={location.pathname === '/contact-us' ? true : undefined}
//             >
//               {t('menu.contactUs')}
//             </GcdsNavLink>
//           </GcdsTopNav>
//         </div>

//         {!isLandingPage && (
//           <div slot="breadcrumb">
//             <GcdsBreadcrumbs>
//               <GcdsBreadcrumbsItem href="/">GeoView</GcdsBreadcrumbsItem>
//             </GcdsBreadcrumbs>
//           </div>
//         )}

//         <div
//           slot="skip-to-nav"
//           style={{
//             textAlign: 'center',
//             top: '10px',
//             left: 0,
//             width: '100%',
//             zIndex: 3,
//           }}
//         >
//           <a
//             className="skip-to-content-link"
//             href="#main-content"
//             aria-label={t('menu.skipNav')}
//           >
//             {t('menu.skipNav')}
//           </a>
//         </div>

//         <div slot="toggle">
//           <GcdsLangToggle
//             href="#"
//             lang={i18n.language}
//             onClick={(e) => {
//               e.preventDefault();
//               changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
//             }}
//           />
//         </div>
//       </GcdsHeader>

//       {/* Main Content */}
//       {isLandingPage ? (
//         <div
//           id="main-content"
//           style={{ flexGrow: 1, marginTop: 0, paddingTop: 0 }}
//         >
//           <Outlet />
//         </div>
//       ) : (
//         <GcdsContainer
//           size="xl"
//           centered
//           color="black"
//           style={{ flexGrow: 1 }}
//           main-container
//           id="main-content"
//         >
//           <Outlet />
//         </GcdsContainer>
//       )}

//       {/* Accessibility Live Region */}
//       <span
//         role="status"
//         aria-live="polite"
//         tabIndex="-1"
//         style={{
//           position: 'absolute',
//           left: '-9999px',
//           width: '1px',
//           height: '1px',
//           overflow: 'hidden',
//         }}
//       >
//         {announcement}
//       </span>

//       <GcdsFooter
//         lang={i18n.language}
//         display="full"
//         contextualHeading={t('footer.additionalNav')}
//         contextualLinks={contextualLinks}
//         style={{ paddingTop: '50px' }}
//       />

//       <ToastContainer position="top-right" autoClose={false} theme="dark" />
//     </>
//   );
// }


import { Outlet, useLocation } from 'react-router-dom';
import {
  GcdsHeader,
  GcdsContainer,
  GcdsFooter,
  GcdsTopNav,
  GcdsNavLink,
  GcdsText,
  GcdsBreadcrumbsItem,
  GcdsBreadcrumbs,
  GcdsLangToggle,
} from '@cdssnc/gcds-components-react';

import '@cdssnc/gcds-components-react/gcds.css';
import './Layout.css';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    document.body.classList.toggle('landing-page', isLandingPage);
  }, [isLandingPage]);

  useEffect(() => {
    const routeTitles = {
      '/': t('menu.home'),
      '/contact-us': t('pages.contactUs.title'),
    };

    const currentTitle =
      routeTitles[location.pathname] + ' - GeoView.ca' || 'GeoView.ca';
    document.title = currentTitle;

    const timer = setTimeout(() => setAnnouncement(currentTitle), 200);
    return () => clearTimeout(timer);
  }, [location.pathname, t]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    toast.dismiss();
    setAnnouncement(
      lng === 'fr'
        ? 'La langue a été changée en français'
        : 'The language has been changed to English'
    );
  };

  const contextualLinks = {
    [t('footer.resultsExplained')]: '/geocoding-results-explanation',
    [t('footer.faq')]: '/frequently-asked-questions',
  };

  return (
    <>
      <GcdsHeader
        langHref={i18n.language}
        signatureHasLink="false"
        lang={i18n.language}
        style={{ fontSize: '20px' }}
      >
        <div slot="menu">
          <GcdsTopNav label="Top navigation" alignment="right">
            <GcdsNavLink href="/" slot="home">
              GeoView
            </GcdsNavLink>
            <GcdsNavLink
              href="/contact-us"
              current={location.pathname === '/contact-us' ? true : undefined}
            >
              {t('menu.contactUs')}
            </GcdsNavLink>
          </GcdsTopNav>
        </div>

        {!isLandingPage && (
          <div slot="breadcrumb">
            <GcdsBreadcrumbs>
              <GcdsBreadcrumbsItem href="/">GeoView</GcdsBreadcrumbsItem>
            </GcdsBreadcrumbs>
          </div>
        )}
        {/* <div slot="breadcrumb">
          {isLandingPage ? (
            <GcdsText tag="p" style={{ margin: 0, padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              Disclaimer: This is a proof of concept.
            </GcdsText>
          ) : (
            <GcdsBreadcrumbs>
              <GcdsBreadcrumbsItem href="/">GeoView</GcdsBreadcrumbsItem>
            </GcdsBreadcrumbs>
          )}
        </div> */}


        <div slot="skip-to-nav" className="skip-wrapper">
          <a
            className="skip-to-content-link"
            href="#main-content"
            aria-label={t('menu.skipNav')}
          >
            {t('menu.skipNav')}
          </a>
        </div>

        <div slot="toggle">
          <GcdsLangToggle
            href="#"
            lang={i18n.language}
            onClick={(e) => {
              e.preventDefault();
              changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
            }}
          />
        </div>
      </GcdsHeader>

      {isLandingPage ? (
        <div id="main-content" className="landing-content">
          <Outlet />
        </div>
      ) : (
        <GcdsContainer
          size="xl"
          centered
          color="black"
          style={{ flexGrow: 1 }}
          main-container
          id="main-content"
        >
          <Outlet />
        </GcdsContainer>
      )}

      <span
        role="status"
        aria-live="polite"
        tabIndex="-1"
        className="visually-hidden"
      >
        {announcement}
      </span>

      <GcdsFooter
        lang={i18n.language}
        display="full"
        contextualHeading={t('footer.additionalNav')}
        contextualLinks={contextualLinks}
        style={{ paddingTop: '50px' }}
      />

      <ToastContainer position="top-right" autoClose={false} theme="dark" />
    </>
  );
}
