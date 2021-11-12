module.exports = {
  install: function (Vue, options) {
    Vue.directive('midnight', {

      data: {
        wrapperBaseOffset: 0,
        defaultLogo: undefined,
        logos: [],
        sections: [],
        wrapper: undefined,
        lastResized: Date.now()
      },

      bind: function (el, binding, vnode) {
        var self = Vue.directive('midnight')

        var type = binding.arg
        var logo = Object.keys(binding.modifiers)[0]
        switch (type) {
          case 'wrapper':
            self.registerWrapper(el, logo, binding.value)
            break
          case 'section':
            self.registerSection(el, logo)
            break
          case 'logo':
            self.registerLogo(el, logo)
            break
          default:
            throw new Error('"' + type + '" is an invalid argument for v-midnight. Please use "section", "wrapper", or "logo".')
        }
      },

      unbind: function (el, binding) {
        var self = Vue.directive('midnight')
        var type = binding.arg

        switch (type) {
          case 'wrapper':
            self.unregisterWrapper()
            break
          case 'section':
            self.unregisterSection(el)
            break
        }
      },

      registerWrapper: function (el, logo, baseOffset) {
        var data = this.data
        if (data.wrapper) {
          console.warn('Found multiple "v-midnight:wrapper" directives.')
        } else {
          data.wrapper = {
            el: el,
            offset: undefined,
            lastCached: undefined
          }
          if (logo) {
            data.defaultLogo = logo
          }
          if (baseOffset) {
            data.wrapperBaseOffset = baseOffset
          }
          this.createListeners()
        }
      },

      createListeners: function () {
        var self = this
        window.addEventListener('scroll', this.onPageScroll)
        window.addEventListener('resize', this.setLastResized)

        setInterval(function () {
          self.setLastResized()
        }, 1000)
      },

      unregisterWrapper: function () {
        this.data.wrapper = undefined
        this.destroyListeners()
      },

      destroyListeners: function () {
        window.removeEventListener('scroll', this.onPageScroll)
        window.removeEventListener('resize', this.setLastResized)
      },

      onPageScroll: function () {
        var self = Vue.directive('midnight')
        self.handleLogoVisibilities()
      },

      setLastResized: function () {
        var self = Vue.directive('midnight')
        self.data.lastResized = Date.now()
      },

      handleLogoVisibilities: function () {
        var self = this
        var sectionOffsets = self.getSectionOffsets()

        self.data.logos.forEach(function (logoObj) {
          self.handleLogoVisibility(sectionOffsets, logoObj)
        })
      },

      handleLogoVisibility: function (sectionOffsets, logoObj) {
        var self = this
        var el = logoObj.el
        var scrollY = window.scrollY

        var coordinates = {
          offset: self.getOffset(logoObj) + self.data.wrapperBaseOffset,
          height: self.getHeight(logoObj)
        }

        if (self.data.defaultLogo !== logoObj.logo) {
          el.setAttribute('style', 'max-height: 0;')
        } else {
          el.setAttribute('style', 'z-index: 1; max-height: none;')
        }

        sectionOffsets.map(function (sectionObj, index) {
          var info = {
            showLogo: sectionObj.logo === logoObj.logo,
            sectionTop: sectionObj.offset - scrollY,
            sectionBottom: sectionOffsets[index + 1] ? sectionOffsets[index + 1].offset - scrollY : window.innerHeight,
            logoTop: coordinates.offset,
            logoBottom: coordinates.offset + coordinates.height
          }
          if (info.showLogo && info.logoTop > info.sectionTop && info.logoTop < info.sectionBottom) {
            var pixels = parseInt(info.sectionBottom - info.logoTop)
            el.setAttribute('style', 'max-height: ' + pixels + 'px; z-index: 3')
          } else if (info.showLogo && info.logoBottom > info.sectionTop && info.logoBottom < info.sectionBottom) {
            el.setAttribute('style', 'z-index: 2; max-height: none;')
          }
        })
      },

      getSectionOffsets: function () {
        var self = this
        return self.data.sections.map(function (section) {
          return {
            logo: section.logo,
            offset: self.getOffset(section)
          }
        })
      },

      getOffset: function (element) {
        return this.getProp('offset', 'offsetTop', element)
      },

      getHeight: function (element) {
        return this.getProp('height', 'offsetHeight', element)
      },

      getProp: function (propName, elPropName, element) {
        if (element[propName] === undefined || this.data.lastResized > element.lastCached) {
          element[propName] = element.el[elPropName]
          element.lastCached = Date.now()
        }
        return element[propName]
      },

      registerSection: function (el, logo) {
        var data = this.data

        data.sections.push({
          el: el,
          logo: logo,
          offset: undefined,
          lastCached: undefined
        })
      },

      unregisterSection: function (el) {
        this.data.sections = this.data.sections
          .filter(function (section) {
            return section.el !== el
          })
      },

      registerLogo: function (el, logo) {
        var data = this.data

        var hasExistingLogo = data.logos.some(function (logoObj) {
          return logoObj.logo === logo
        })

        if (hasExistingLogo) {
          console.warn('Found multiple "v-midnight:logo.' + logo + '" directives.')
        } else {
          var newLogo = {
            el: el,
            logo: logo,
            offset: undefined,
            height: undefined,
            lastCached: undefined
          }

          data.logos.push(newLogo)
        }
      }

    })
  }
}