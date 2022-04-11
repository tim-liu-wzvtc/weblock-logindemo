// src/utils/external-component.js
      // https://stackoverflow.com/questions/63581504/vue-3-external-component-plugin-loading-in-runtime
      export default async function externalComponent(url) {
        url="http://localhost:5500"+url;
        const name = url
          .split('/')
          .reverse()[0]
          .match(/^(.*?)\.umd/)[1]
      
        if (window[name]) return window[name]
      
        window[name] = new Promise((resolve, reject) => {
          const script = document.createElement('script')
          script.async = true
          script.addEventListener('load', () => {
            resolve(window[name])
          })
          script.addEventListener('error', () => {
            reject(new Error("===="))
          })
          script.src = url
          document.head.appendChild(script)
        })
      
        return window[name]
      }
