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
          max-width: 330px;
          background-color: #fafafa;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
            sans-serif;
        }

        #carbonads a {
          color: inherit;
          text-decoration: none;
        }

        #carbonads a:hover {
          color: inherit;
        }

        #carbonads span {
          display: block;
          position: relative;
          overflow: hidden;
        }

        #carbonads .carbon-wrap {
          display: flex;
        }

        #carbonads .carbon-img img {
          display: block;
        }

        #carbonads .carbon-text {
          align-self: center;
          margin-bottom: 20px;
          padding: 8px 10px;
          font-size: 12px;
          line-height: 1.5;
          text-align: left;
        }

        #carbonads .carbon-poweredby {
          display: block;
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 6px 8px;
          border-top-left-radius: 3px;
          background-color: #f1f1f1;
          font-size: 8px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.5px;
          text-align: center;
          text-transform: uppercase;
        }
      `;

      document.head.insertBefore(styleEl, document.querySelector("head style, head link[rel*='stylesheet']"));
    },
  };
})(window);
