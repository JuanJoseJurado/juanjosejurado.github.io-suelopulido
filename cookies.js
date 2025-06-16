function loadAnalyticsAndGTM() {
  // Google Analytics (gtag.js)
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-D4NS7LB5RM";
  document.head.appendChild(gtagScript);

  gtagScript.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-D4NS7LB5RM');
  };

  // Google Tag Manager
  var gtmScript = document.createElement('script');
  gtmScript.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WRLV558G');";
  document.head.appendChild(gtmScript);

  // Google Tag Manager (noscript) para el <body>
  var gtmNoScript = document.createElement('div');
  gtmNoScript.innerHTML = '<noscript><iframe src="https://www.googletagmanager.com/ns?id=GTM-WRLV558G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
  document.body.insertBefore(gtmNoScript, document.body.firstChild);
}