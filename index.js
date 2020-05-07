miro.onReady(() => {
      miro.initialize({
        extensionPoints: {
          bottomBar: {
            title: 'Open Window',
            svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
            onClick: () => {
              alert('Clicked!')
            }
          }
        }
      })
})
