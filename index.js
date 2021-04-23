(function(window) {
  window.DocsifyCarbon = {
    create(CarbonId, CarbonPlacement) {
      return function(hook, vm) {
        hook.ready(function() {
          window.DocsifyCarbon.injectCarbonStyle();
        });

        hook.doneEach(function() {
          window.DocsifyCarbon.injectCarbonScript(CarbonId, CarbonPlacement);
        });
      };
    },

    injectCarbonScript(CarbonId, CarbonPlacement) {
      const adEl = document.querySelector("#carbonads");
      const scriptID = "_carbonads_js";
      const sidebarEl = document.querySelector(".sidebar-nav");

      if (!adEl && sidebarEl) {
        let scriptEl = document.querySelector(`#${scriptID}`);

        if (scriptEl) {
          scriptEl = scriptEl.parentNode.removeChild(scriptEl);
        }
        else {
          scriptEl = document.createElement("script");
          scriptEl.src = `https://cdn.carbonads.com/carbon.js?serve=${CarbonId}&placement=${CarbonPlacement}`;
          scriptEl.async = "async";
          scriptEl.id = scriptID;
        }

        sidebarEl.insertBefore(scriptEl, sidebarEl.firstChild);
      }
    },

    injectCarbonStyle() {
      const styleEl = document.createElement("style");

      styleEl.textContent = `
        #carbonads * {
          margin: initial;
          padding: initial;
        }

        #carbonads {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
        }

        #carbonads {
          display: flex;
          max-width: 330px;
          background-color: hsl(0, 0%, 98%);
          box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, 0.1);
          z-index: 100;
        }

        #carbonads a {
          color: inherit;
          text-decoration: none;
        }

        #carbonads a:hover {
          color: inherit;
        }

        #carbonads span {
          position: relative;
          display: block;
          overflow: hidden;
        }

        #carbonads .carbon-wrap {
          display: flex;
        }

        #carbonads .carbon-img {
          display: block;
          margin: 0;
          line-height: 1;
        }

        #carbonads .carbon-img img {
          display: block;
        }

        #carbonads .carbon-text {
          font-size: 13px;
          padding: 10px;
          margin-bottom: 16px;
          line-height: 1.5;
          text-align: left;
        }

        #carbonads .carbon-poweredby {
          display: block;
          padding: 6px 8px;
          background: #f1f1f2;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          font-size: 8px;
          line-height: 1;
          border-top-left-radius: 3px;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      `;

      document.head.insertBefore(styleEl, document.querySelector("head style, head link[rel*='stylesheet']"));
    },
  };
})(window);
