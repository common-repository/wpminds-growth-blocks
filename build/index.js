/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Value-stack-layout/Value-stack-layout.js":
/*!******************************************************!*\
  !*** ./src/Value-stack-layout/Value-stack-layout.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items.js */ "./src/Value-stack-layout/items.js");









const ALLOWED_MEDIA_TYPES = ['image'];

const ALLOWED_BLOCKS = ['wpgb-captain-block/valuesingle'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpgb-captain-block/value-block-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Value Stack Layout'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Value Stack Layout')],
  attributes: {
    themeBackground: {
      type: 'string',
      default: 'full-bg-color alignfull theme-section-full'
    },
    styleOptions: {
      type: 'string',
      default: 'SimpleHeading1'
    },
    styleOptionsC: {
      type: 'string',
      default: ''
    },
    colorBackground: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      themeBackground,
      styleOptions,
      colorBackground,
      styleOptionsC
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Style Options",
      value: styleOptions,
      onChange: newval => setAttributes({
        styleOptions: newval
      }),
      options: [{
        label: 'Simple Heading',
        value: 'SimpleHeading1'
      }, {
        label: 'Active Heading and Content',
        value: 'ActiveContent1'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Heading and Content Style Options",
      value: styleOptionsC,
      onChange: newval => setAttributes({
        styleOptionsC: newval
      }),
      options: [{
        label: 'Style 1',
        value: 'cstyle1'
      }, {
        label: 'Style 2',
        value: 'cstyle2'
      }, {
        label: 'Style 3',
        value: 'cstyle3'
      }],
      __nextHasNoMarginBottom: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "This will work on Style Options 'Active Heading and Content' only.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Theme Background",
      value: themeBackground,
      onChange: newval => setAttributes({
        themeBackground: newval
      }),
      options: [{
        label: 'Transparent',
        value: 'Transpante-themeBackground alignfull theme-section-full'
      }, {
        label: 'Active Theme Background',
        value: 'full-bg-color alignfull theme-section-full'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom Background Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
      label: "Custom Background Color",
      color: colorBackground,
      onChange: newval => setAttributes({
        colorBackground: newval
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks.ButtonBlockAppender
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("center", null, "Add New Value Stack Layout")))));
  },
  save: props => {
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps.save();
    const {
      attributes
    } = props;
    const {
      colorBackground,
      styleOptions,
      themeBackground,
      styleOptionsC
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: themeBackground,
      assignedStyle: colorBackground
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: styleOptions
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: styleOptionsC
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section Value-1section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks.Content, null)))))));
  }
});

/***/ }),

/***/ "./src/Value-stack-layout/items.js":
/*!*****************************************!*\
  !*** ./src/Value-stack-layout/items.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('wpgb-captain-block/valuesingle', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Value Single Section'),
  icon: 'welcome-add-page',
  parent: ['create-block/valuesingle'],
  category: 'design',
  supports: {
    color: true
  },
  attributes: {
    Value: {
      type: 'string',
      selector: 'h3',
      default: ''
    },
    ValueContent: {
      type: 'string',
      default: ''
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    }
  },
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Value Single Item')],
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      Value,
      ValueContent,
      mediaId,
      mediaUrl
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: props.className
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose an image'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.mediaUrl
      }))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace image'))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove image'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      placeholder: "Value Stack Layout Title",
      tagName: "h3",
      value: Value,
      onChange: newval => setAttributes({
        Value: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      placeholder: "Value Stack Layout Content",
      tagName: "p",
      value: ValueContent,
      onChange: newval => setAttributes({
        ValueContent: newval
      })
    }));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      Value,
      ValueContent
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Value-holder-text"
    }, attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: Value
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "h3",
      className: "",
      value: Value
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "p",
      className: "",
      value: ValueContent
    }));
  }
});

/***/ }),

/***/ "./src/faq-block/edit.js":
/*!*******************************!*\
  !*** ./src/faq-block/edit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab.js */ "./src/faq-block/tab.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */






const {
  InspectorControls,
  useSetting,
  RichText
} = wp.blockEditor;

const ALLOWED_BLOCKS = ['wpgb-captain-block/tab'];

//import './editor.scss';

function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    tabLabelsArray,
    updateChild,
    sideTabLayout,
    blockTitle,
    blockText,
    content,
    themeBackground,
    faqStyleOption,
    colorBackground
  } = attributes;
  const onChangeTabLabel = toggle => {
    setAttributes({
      sideTabLayout: toggle
    });
  };
  const onChangeTitle = newTitle => {
    setAttributes({
      blockTitle: newTitle
    });
  };
  //  const onChangeText = newText => {
  // 	 setAttributes({ content: newText});
  //  };

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Theme Background",
    value: themeBackground,
    onChange: newval => setAttributes({
      themeBackground: newval
    }),
    options: [{
      label: 'Transparent',
      value: 'theme-section-full alignfull Transpante-themeBackground'
    }, {
      label: 'Active Theme Background',
      value: 'theme-section-full alignfull full-bg-color'
    }],
    __nextHasNoMarginBottom: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom Background Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
    label: "Custom Background Color",
    color: colorBackground,
    onChange: newval => setAttributes({
      colorBackground: newval
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "FAQ Style Options",
    value: faqStyleOption,
    onChange: newval => setAttributes({
      faqStyleOption: newval
    }),
    options: [{
      label: 'Simple',
      value: 'simple-faq1'
    }, {
      label: 'Right Border',
      value: 'border-faq1'
    }, {
      label: 'Simple Border',
      value: 'simpleborder-faq1'
    }],
    __nextHasNoMarginBottom: true
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "theme-section-full alignfull"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "Hero-outter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "Hero-1section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "FAQ Section Block"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: props.className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    className: "title-block",
    value: blockTitle,
    onChange: onChangeTitle,
    placeholder: "FAQ Section Title",
    type: "text"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Add FAQs"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender
  })))));
}

/***/ }),

/***/ "./src/faq-block/index.js":
/*!********************************!*\
  !*** ./src/faq-block/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/faq-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/faq-block/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
* All files containing `style` keyword are bundled together. The code used
* gets applied both to the front of your site and to the editor.
*
* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
*/
//  import './style.scss';
//  import './style.css';

/**
* Internal dependencies
*/



/**
* Every block starts by registering a new block type definition.
*
* @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
*/
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('wpgb-captain-block/tabs', {
  title: 'FAQ Section',
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: 'FAQ',
  attributes: {
    blockTitle: {
      type: 'string',
      default: ''
    },
    content: {
      type: 'string',
      source: 'html',
      default: ''
    },
    themeBackground: {
      type: 'string',
      default: 'theme-section-full alignfull Transpante-themeBackground'
    },
    faqStyleOption: {
      type: 'string',
      default: ''
    },
    colorBackground: {
      type: 'string',
      default: ''
    }
  },
  /**
  * @see ./edit.js
  */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
  * @see ./save.js
  */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/faq-block/save.js":
/*!*******************************!*\
  !*** ./src/faq-block/save.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


const {
  RawHTML
} = wp.element;
const {
  RichText
} = wp.blockEditor;

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save(props) {
  const {
    attributes: {
      sideTabLayout,
      blockTitle,
      content,
      themeBackground,
      faqStyleOption,
      colorBackground
    }
  } = props;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  if (sideTabLayout) {
    blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'side-tab-layout'
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: themeBackground,
    assignedStyle: colorBackground
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: faqStyleOption
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-outter Hero-outter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, blockTitle), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content",
    itemscope: true,
    itemtype: "https://schema.org/FAQPage"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))))));
}

/***/ }),

/***/ "./src/faq-block/tab.js":
/*!******************************!*\
  !*** ./src/faq-block/tab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



const {
  __
} = wp.i18n; // Import __() from wp.i18n
const {
  registerBlockType
} = wp.blocks; // Import registerBlockType() from wp.blocks



/**********************************************************
 * Registering Child Innerblock for the Tabbed Content block
 **********************************************************/
registerBlockType('wpgb-captain-block/tab', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('FAQ Single Section'),
  // Block title.
  icon: 'welcome-add-page',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  parent: ['create-block/tabs'],
  category: 'design',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  supports: {
    color: true
  },
  attributes: {
    tabLabel: {
      type: 'string',
      default: ''
    },
    blockIndex: {
      type: 'number',
      default: ''
    },
    tabTagline: {
      type: 'string',
      default: ''
    }
  },
  keywords: [__('tab')],
  /**
   * 
   * Edit function for Child Slide Block
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Component.
   */
  edit: props => {
    const {
      attributes: {
        tabLabel,
        blockIndex
      },
      setAttributes
    } = props;

    // const onChangeTabLabel = newTabLabel => {
    // 	setAttributes({ tabLabel: newTabLabel});
    // 	setAttributes({ blockIndex: getBlockIndex});
    // 	wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( parentBlockID, { updateChild: true } );
    // };

    const onChangeTabLabel = newTitle => {
      setAttributes({
        tabLabel: newTitle
      });
    };
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: props.className
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "FAQ Single Heading"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      className: "tab-label_input",
      value: tabLabel,
      onChange: onChangeTabLabel,
      placeholder: "FAQ Single Title",
      type: "text"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "FAQ Single Content"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, null));
  },
  /**
   *
   * Save function for Child Slide Block
   * 
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Frontend HTML.
   */
  save: props => {
    const {
      attributes
    } = props;
    const {
      tabLabel
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tab-panel-wrapper",
      role: "tabpanel",
      tabindex: "0",
      itemscope: true,
      itemprop: "mainEntity",
      itemtype: "https://schema.org/Question"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tab-title",
      itemprop: "name"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      ...blockProps,
      tagName: "",
      className: "",
      value: tabLabel
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tab-panel",
      role: "tabpanel",
      tabindex: "0",
      itemscope: true,
      itemprop: "acceptedAnswer",
      itemtype: "https://schema.org/Answer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      itemprop: "text"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/header-section/header-section.js":
/*!**********************************************!*\
  !*** ./src/header-section/header-section.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpgb-captain-block/hero-block-list', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hero Section'),
  // Block title.
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set image and words side-by-side for a richer layout.'),
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header Section')],
  attributes: {
    heroTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    heroCta: {
      type: 'string',
      default: 'Schedule a Call'
    },
    heroLink: {
      type: 'string',
      default: ''
    },
    heroCtaLink: {
      type: 'string',
      default: ''
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    },
    colorText: {
      type: 'string',
      default: ''
    },
    colorBackground: {
      type: 'string',
      default: ''
    },
    sectionStyle: {
      type: 'string',
      default: 'text-img-section'
    },
    buttonStyle: {
      type: 'string',
      default: 'wp-block-button__link'
    },
    themeBackground: {
      type: 'string',
      default: 'theme-section-full alignfull'
    },
    themeHeading: {
      type: 'string',
      default: 'theme-H2'
    },
    heroCtaValue: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroCtaValue,
      themeHeading,
      heroTitle,
      heroDes,
      heroCta,
      heroLink,
      colorText,
      colorBackground,
      sectionStyle,
      buttonStyle,
      themeBackground
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Select Style of section",
      value: sectionStyle,
      onChange: newval => setAttributes({
        sectionStyle: newval
      }),
      options: [{
        label: 'Right align image',
        value: 'text-img-section'
      }, {
        label: 'Left align image',
        value: 'img-text-section'
      }, {
        label: 'Center align without image',
        value: 'noimage-text-section'
      }],
      __nextHasNoMarginBottom: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Heading Tag H1, H2, H3",
      value: themeHeading,
      onChange: newval => setAttributes({
        themeHeading: newval
      }),
      options: [{
        label: 'H1',
        value: 'theme-H1'
      }, {
        label: 'H2',
        value: 'theme-H2'
      }, {
        label: 'H3',
        value: 'theme-H3'
      }],
      __nextHasNoMarginBottom: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Select Button Style",
      value: buttonStyle,
      onChange: newval => setAttributes({
        buttonStyle: newval
      }),
      options: [{
        label: 'Primary Button',
        value: 'wpwpmindsfr-button-primary wp-block-button__link'
      }, {
        label: 'Secondary Button',
        value: 'wpwpmindsfr-button-secondary wp-block-button__link'
      }, {
        label: 'Outline Button',
        value: 'wpwpmindsfr-button-outline wp-block-button__link'
      }],
      __nextHasNoMarginBottom: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Theme Background",
      value: themeBackground,
      onChange: newval => setAttributes({
        themeBackground: newval
      }),
      options: [{
        label: 'Transparent',
        value: 'theme-section-full alignfull Transpante-themeBackground'
      }, {
        label: 'Active Theme Background',
        value: 'theme-section-full alignfull full-bg-color'
      }],
      __nextHasNoMarginBottom: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom Background Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
      label: "Custom Background Color",
      color: colorBackground,
      onChange: newval => setAttributes({
        colorBackground: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom content Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
      label: "Custom Background Color",
      color: colorText,
      onChange: newval => setAttributes({
        colorText: newval
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Header Layout Section"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      label: "Add Section Title Here",
      value: heroTitle,
      onChange: newval => setAttributes({
        heroTitle: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      class: "components-base-control__label css-1wzzj1a ej5x27r2"
    }, "Add Section caption/text Here"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks, {
      className: "captain-inner-blockText"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      label: "Add button Text",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      label: "Add button Link",
      value: heroLink,
      onChange: newval => setAttributes({
        heroLink: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      label: "Add Custom Value for onclick attribute.",
      value: heroCtaValue,
      onChange: newval => setAttributes({
        heroCtaValue: newval
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
        className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.mediaUrl
      }))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image')))))))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      heroCtaValue,
      themeHeading,
      heroTitle,
      heroDes,
      heroCta,
      heroLink,
      colorText,
      colorBackground,
      sectionStyle,
      buttonStyle,
      themeBackground
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: themeBackground,
      assignedStyle: colorBackground
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: sectionStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-2 cColor",
      styleColor: colorText
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 txt-1"
    }, attributes.themeHeading == 'theme-H1' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
      className: "cColor",
      styleColor: colorText
    }, heroTitle), attributes.themeHeading == 'theme-H2' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "cColor",
      styleColor: colorText
    }, heroTitle), attributes.themeHeading == 'theme-H3' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "cColor",
      styleColor: colorText
    }, heroTitle), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks.Content, null), attributes.heroLink !== '' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: buttonStyle,
      href: heroLink,
      onclick: heroCtaValue
    }, heroCta)), attributes.sectionStyle !== 'noimage-text-section' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 img-1"
    }, attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: heroTitle
    })))))));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _header_section_header_section_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-section/header-section.js */ "./src/header-section/header-section.js");
/* harmony import */ var _Value_stack_layout_Value_stack_layout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Value-stack-layout/Value-stack-layout.js */ "./src/Value-stack-layout/Value-stack-layout.js");
/* harmony import */ var _price_choices_price_choices_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./price-choices/price-choices.js */ "./src/price-choices/price-choices.js");
/* harmony import */ var _plan_section_plan_section_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plan-section/plan-section.js */ "./src/plan-section/plan-section.js");
/* harmony import */ var _lead_generator_section_lead_generator_section_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lead-generator-section/lead-generator-section.js */ "./src/lead-generator-section/lead-generator-section.js");
/* harmony import */ var _faq_block_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./faq-block/index.js */ "./src/faq-block/index.js");
/* harmony import */ var _testimonials_section_testimonials_section_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./testimonials-section/testimonials-section.js */ "./src/testimonials-section/testimonials-section.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */










const ALLOWED_MEDIA_TYPES = ['image'];

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */








/***/ }),

/***/ "./src/lead-generator-section/lead-generator-section.js":
/*!**************************************************************!*\
  !*** ./src/lead-generator-section/lead-generator-section.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpgb-captain-block/lead-block-list', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lead Generator Section'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lead Generator Section')],
  attributes: {
    heroTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    heroDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    heroCta: {
      type: 'string',
      default: ''
    },
    themeBackground: {
      type: 'string',
      default: 'theme-section-full alignfull Transpante-themeBackground'
    },
    boxStyle: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroTitle,
      heroDes,
      heroCta,
      themeBackground,
      boxStyle
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Theme Background",
      value: themeBackground,
      onChange: newval => setAttributes({
        themeBackground: newval
      }),
      options: [{
        label: 'Transparent',
        value: 'theme-section-full alignfull Transpante-themeBackground'
      }, {
        label: 'Active Theme Background',
        value: 'theme-section-full alignfull full-bg-color'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Style Option",
      value: boxStyle,
      onChange: newval => setAttributes({
        boxStyle: newval
      }),
      options: [{
        label: 'Simple',
        value: 'wpwpmindsfr-l-Simple'
      }, {
        label: 'Box Style',
        value: 'wpwpmindsfr-l-Box'
      }, {
        label: 'Two Col',
        value: 'wpwpmindsfr-l-Two'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      label: "Add Section Title Here",
      value: heroTitle,
      onChange: newval => setAttributes({
        heroTitle: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      label: "Add Section Title Caption Here",
      value: heroDes,
      onChange: newval => setAttributes({
        heroDes: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      label: "Add Form ShortCode",
      help: "Create Form and add shortcode of form here.",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, heroDes), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, heroTitle), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "form-lead-section"
    }, heroCta))))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      heroTitle,
      heroDes,
      heroCta,
      themeBackground,
      boxStyle
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: themeBackground
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: boxStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "form-lead-section-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, heroDes), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, heroTitle)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "form-lead-section"
    }, heroCta)))))));
  }
});

/***/ }),

/***/ "./src/plan-section/plan-section.js":
/*!******************************************!*\
  !*** ./src/plan-section/plan-section.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plan_single_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plan-single.js */ "./src/plan-section/plan-single.js");









const ALLOWED_MEDIA_TYPES = ['image'];

const ALLOWED_BLOCKS = ['wpgb-captain-block/plansingle'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpgb-captain-block/plan-block-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Plan Section'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Plan Section')],
  attributes: {
    headingTitle: {
      type: 'string',
      default: ''
    },
    maintDes: {
      type: 'string',
      default: ''
    },
    maintDes2: {
      type: 'string',
      default: ''
    },
    heroCta: {
      type: 'string',
      default: ''
    },
    heroLink: {
      type: 'string',
      default: ''
    },
    themeBackground: {
      type: 'string',
      default: ''
    },
    styleHorizontal: {
      type: 'string',
      default: 'Vertical-section-full'
    },
    boxStyle: {
      type: 'string',
      default: ''
    },
    colorBackground: {
      type: 'string',
      default: ''
    },
    colorText: {
      type: 'string',
      default: ''
    },
    buttonStyle: {
      type: 'string',
      default: 'wp-block-button__link'
    },
    heroCtaValue: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroCtaValue,
      colorBackground,
      colorText,
      boxStyle,
      styleHorizontal,
      themeBackground,
      maintDes2,
      RichTextTitle,
      TextDes,
      RichTextTitle1,
      TextDes1,
      RichTextTitle2,
      TextDes2,
      headingTitle,
      maintDes,
      heroCta,
      heroLink,
      buttonStyle
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Select Button Style",
      value: buttonStyle,
      onChange: newval => setAttributes({
        buttonStyle: newval
      }),
      options: [{
        label: 'Primary Button',
        value: 'wpwpmindsfr-button-primary wp-block-button__link'
      }, {
        label: 'Secondary Button',
        value: 'wpwpmindsfr-button-secondary wp-block-button__link'
      }, {
        label: 'Outline Button',
        value: 'wpwpmindsfr-button-outline wp-block-button__link'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Style Option",
      value: boxStyle,
      onChange: newval => setAttributes({
        boxStyle: newval
      }),
      options: [{
        label: 'Simple',
        value: 'wpwpmindsfr-Simple'
      }, {
        label: 'Box Style',
        value: 'wpwpmindsfr-Box'
      }, {
        label: 'Two Col (Will Work with HORIZONTAL style only)',
        value: 'wpwpmindsfr-Two'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Horizontal or Vertical style",
      value: styleHorizontal,
      onChange: newval => setAttributes({
        styleHorizontal: newval
      }),
      options: [{
        label: 'Vertical',
        value: 'Vertical-section-full'
      }, {
        label: 'Horizontal',
        value: 'Horizontal-section-full'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Theme Background",
      value: themeBackground,
      onChange: newval => setAttributes({
        themeBackground: newval
      }),
      options: [{
        label: 'Transparent',
        value: 'Transpante-themeBackground'
      }, {
        label: 'Active Theme Background',
        value: 'full-bg-color'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom Background Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
      label: "Custom Background Color",
      color: colorBackground,
      onChange: newval => setAttributes({
        colorBackground: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom content Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
      label: "Custom Background Color",
      color: colorText,
      onChange: newval => setAttributes({
        colorText: newval
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
      tagName: "h2",
      placeholder: "Add Section Title Here",
      value: headingTitle,
      onChange: newval => setAttributes({
        headingTitle: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
      tagName: "p",
      placeholder: "Add Section Content Here",
      value: maintDes,
      onChange: newval => setAttributes({
        maintDes: newval
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks.ButtonBlockAppender
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("center", null, "Add New Plan Item"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
      className: "top-28",
      placeholder: "Add Section bottom content Here",
      value: maintDes2,
      onChange: newval => setAttributes({
        maintDes2: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      placeholder: "Add button Text",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      placeholder: "Add button Link",
      value: heroLink,
      onChange: newval => setAttributes({
        heroLink: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      label: "Add Custom Value for onclick attribute.",
      value: heroCtaValue,
      onChange: newval => setAttributes({
        heroCtaValue: newval
      })
    }))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      heroCtaValue,
      colorText,
      colorBackground,
      boxStyle,
      styleHorizontal,
      themeBackground,
      maintDes2,
      headingTitle,
      maintDes,
      heroCta,
      heroLink,
      buttonStyle
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps.save();
    var activBg = themeBackground;
    if (activBg = 'full-bg-color') {
      activBg = 'alignfull';
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "theme-section-full  " + activBg + " " + themeBackground,
      assignedStyle: colorBackground,
      StyleColor: colorText
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter " + boxStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText.Content, {
      ...blockProps,
      tagName: "h2",
      className: "cColor",
      styleColor: colorText,
      value: headingTitle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText.Content, {
      ...blockProps,
      tagName: "p",
      className: "cColor",
      styleColor: colorText,
      value: maintDes
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "styleoutter " + styleHorizontal
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks.Content, null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100s"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText.Content, {
      ...blockProps,
      tagName: "p",
      className: "top-28 cColor",
      styleColor: colorText,
      value: maintDes2
    }), attributes.heroLink !== '' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: buttonStyle,
      href: heroLink,
      onclick: heroCtaValue
    }, heroCta)))));
  }
});

/***/ }),

/***/ "./src/plan-section/plan-single.js":
/*!*****************************************!*\
  !*** ./src/plan-section/plan-single.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('wpgb-captain-block/plansingle', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('plan Section'),
  icon: 'welcome-add-page',
  parent: ['create-block/plansingle'],
  category: 'design',
  supports: {
    color: true
  },
  attributes: {
    RichTextTitle: {
      type: 'string',
      default: ''
    },
    TextDes: {
      type: 'string',
      default: ''
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    },
    cardButton: {
      type: 'string',
      default: ''
    },
    cardButtonLink: {
      type: 'string',
      default: ''
    },
    buttonStyle: {
      type: 'string',
      default: 'wp-block-button__link'
    },
    heroCtaValue: {
      type: 'string',
      default: ''
    }
  },
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('')],
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroCtaValue,
      TextDes,
      RichTextTitle,
      mediaId,
      mediaUrl,
      cardButton,
      cardButtonLink,
      buttonStyle
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Select Button Style",
      value: buttonStyle,
      onChange: newval => setAttributes({
        buttonStyle: newval
      }),
      options: [{
        label: 'Primary Button',
        value: 'wpwpmindsfr-button-primary wp-block-button__link'
      }, {
        label: 'Secondary Button',
        value: 'wpwpmindsfr-button-secondary wp-block-button__link'
      }, {
        label: 'Outline Button',
        value: 'wpwpmindsfr-button-outline wp-block-button__link'
      }],
      __nextHasNoMarginBottom: true
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-12"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Please add your plan content.."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose an image'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.mediaUrl
      }))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace image'))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove image'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      placeholder: "Add Title",
      tagName: "h3",
      value: RichTextTitle,
      onChange: newval => setAttributes({
        RichTextTitle: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      placeholder: "Add Plan Caption",
      tagName: "p",
      value: TextDes,
      onChange: newval => setAttributes({
        TextDes: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      placeholder: "Add button Text",
      value: cardButton,
      onChange: newval => setAttributes({
        cardButton: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      placeholder: "Add button Link",
      value: cardButtonLink,
      onChange: newval => setAttributes({
        cardButtonLink: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Add Custom Value for onclick attribute.",
      value: heroCtaValue,
      onChange: newval => setAttributes({
        heroCtaValue: newval
      })
    }))));
  },
  save: props => {
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save();
    const {
      attributes
    } = props;
    const {
      heroCtaValue,
      TextDes,
      RichTextTitle,
      mediaId,
      mediaUrl,
      cardButton,
      cardButtonLink,
      buttonStyle
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "col-inner-35-70"
    }, attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: RichTextTitle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "col-inner-2-cont"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "h3",
      className: "",
      value: RichTextTitle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "p",
      className: "",
      value: TextDes
    }), attributes.cardButtonLink !== '' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: buttonStyle,
      href: cardButtonLink,
      onclick: heroCtaValue
    }, cardButton)));
  }
});

/***/ }),

/***/ "./src/price-choices/price-choices.js":
/*!********************************************!*\
  !*** ./src/price-choices/price-choices.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _price_single_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./price-single.js */ "./src/price-choices/price-single.js");









const ALLOWED_MEDIA_TYPES = ['image'];

const ALLOWED_BLOCKS = ['wpgb-captain-block/pricesingle'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpgb-captain-block/price-block-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price Choices'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price Choices')],
  attributes: {
    headingTitle: {
      type: 'string',
      selector: 'h2',
      default: ''
    },
    maintDes: {
      type: 'string',
      default: ''
    },
    maintDes2: {
      type: 'string',
      default: ''
    },
    packgesRichTextTitle: {
      type: 'string',
      default: ''
    },
    RichTextTitle: {
      type: 'string',
      default: ''
    },
    TextDes: {
      type: 'string',
      default: ''
    },
    packgesRichTextTitle1: {
      type: 'string',
      source: 'html',
      selector: 'h3'
    },
    RichTextTitle1: {
      type: 'string',
      default: ''
    },
    TextDes1: {
      type: 'string',
      default: ''
    },
    packgesRichTextTitle2: {
      type: 'string',
      default: ''
    },
    RichTextTitle2: {
      type: 'string',
      default: ''
    },
    RichTextTitle3: {
      type: 'string',
      default: ''
    },
    TextDes2: {
      type: 'string',
      default: ''
    },
    TextDes3: {
      type: 'string',
      default: ''
    },
    heroCta: {
      type: 'string',
      default: 'Schedule a Call'
    },
    heroLink: {
      type: 'string',
      default: ''
    },
    buttonStyle: {
      type: 'string',
      default: 'wp-block-button__link'
    },
    themeBackground: {
      type: 'string',
      default: 'theme-section-full alignfull'
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    },
    mediaIdOne: {
      type: 'number',
      default: 0
    },
    mediaUrlTwo: {
      type: 'string',
      default: ''
    },
    mediaUrlThree: {
      type: 'string',
      default: ''
    },
    mediaIdTwo: {
      type: 'number',
      default: 0
    },
    mediaUrlTwo: {
      type: 'string',
      default: ''
    },
    mediaUrlThree: {
      type: 'string',
      default: ''
    },
    priceTextSingle1: {
      type: 'string',
      default: 'Buy Now'
    },
    priceLinksingle1: {
      type: 'string',
      default: ''
    },
    priceTextSingle2: {
      type: 'string',
      default: 'Buy Now'
    },
    priceLinksingle2: {
      type: 'string',
      default: ''
    },
    priceTextSingle3: {
      type: 'string',
      default: 'Buy Now'
    },
    priceLinksingle3: {
      type: 'string',
      default: ''
    },
    priceTextSingle4: {
      type: 'string',
      default: 'Buy Now'
    },
    priceLinksingle4: {
      type: 'string',
      default: ''
    },
    boxStyle: {
      type: 'string',
      default: ''
    },
    colorText: {
      type: 'string',
      default: ''
    },
    colorBackground: {
      type: 'string',
      default: ''
    },
    labelPricing: {
      type: 'string',
      default: ''
    },
    labelPricing1: {
      type: 'string',
      default: ''
    },
    labelPricing2: {
      type: 'string',
      default: ''
    },
    labelPricing3: {
      type: 'string',
      default: ''
    },
    disPricing: {
      type: 'string',
      default: ''
    },
    disPricing1: {
      type: 'string',
      default: ''
    },
    disPricing2: {
      type: 'string',
      default: ''
    },
    disPricing3: {
      type: 'string',
      default: ''
    },
    heroCtaValue: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroCtaValue,
      colorBackground,
      colorText,
      boxStyle,
      maintDes2,
      themeBackground,
      buttonStyle,
      headingTitle,
      maintDes,
      heroCta,
      heroLink
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Select Button Style",
      value: buttonStyle,
      onChange: newval => setAttributes({
        buttonStyle: newval
      }),
      options: [{
        label: 'Primary Button',
        value: 'wpwpmindsfr-button-primary wp-block-button__link'
      }, {
        label: 'Secondary Button',
        value: 'wpwpmindsfr-button-secondary wp-block-button__link'
      }, {
        label: 'Outline Button',
        value: 'wpwpmindsfr-button-outline wp-block-button__link'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Style Option",
      value: boxStyle,
      onChange: newval => setAttributes({
        boxStyle: newval
      }),
      options: [{
        label: 'Simple',
        value: 'wpwpmindsfr-p-Simple'
      }, {
        label: 'Box Style',
        value: 'wpwpmindsfr-p-Box'
      }, {
        label: 'Color Style',
        value: 'wpwpmindsfr-p-Color'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Theme Background",
      value: themeBackground,
      onChange: newval => setAttributes({
        themeBackground: newval
      }),
      options: [{
        label: 'Transparent',
        value: 'theme-section-full alignfull Transpante-themeBackground'
      }, {
        label: 'Active Theme Background',
        value: 'theme-section-full alignfull full-bg-color'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom Background Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
      label: "Custom Background Color",
      color: colorBackground,
      onChange: newval => setAttributes({
        colorBackground: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom content Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
      label: "Custom Background Color",
      color: colorText,
      onChange: newval => setAttributes({
        colorText: newval
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section Priceisns"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
      placeholder: "Add Section Title Here",
      tagName: "h2",
      value: headingTitle,
      onChange: newval => setAttributes({
        headingTitle: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
      placeholder: "Add Section Caption Here",
      value: maintDes,
      onChange: newval => setAttributes({
        maintDes: newval
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks.ButtonBlockAppender
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("center", null, "Add New Price Table")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Bottom Content"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
      placeholder: "Add Section Caption Here for Bottom",
      value: maintDes2,
      onChange: newval => setAttributes({
        maintDes2: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      placeholder: "Add button Text",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      placeholder: "Add button Link",
      value: heroLink,
      onChange: newval => setAttributes({
        heroLink: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl, {
      label: "Add Custom Value for onclick attribute.",
      value: heroCtaValue,
      onChange: newval => setAttributes({
        heroCtaValue: newval
      })
    }))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      heroCtaValue,
      colorBackground,
      colorText,
      boxStyle,
      maintDes2,
      themeBackground,
      buttonStyle,
      headingTitle,
      maintDes,
      heroCta,
      heroLink
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: themeBackground,
      assignedStyle: colorBackground
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: boxStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "Hero-outter"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "col-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText.Content, {
      ...blockProps,
      tagName: "h2",
      className: "cColor",
      styleColor: colorText,
      value: headingTitle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText.Content, {
      ...blockProps,
      tagName: "p",
      className: "cColor",
      styleColor: colorText,
      value: maintDes
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "col-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "bottomtext cColor",
      styleColor: colorText
    }, maintDes2), attributes.heroLink !== '' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: buttonStyle,
      href: heroLink,
      onclick: heroCtaValue
    }, heroCta))));
  }
});

/***/ }),

/***/ "./src/price-choices/price-single.js":
/*!*******************************************!*\
  !*** ./src/price-choices/price-single.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('wpgb-captain-block/pricesingle', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price Section'),
  icon: 'welcome-add-page',
  parent: ['create-block/pricesingle'],
  category: 'design',
  supports: {
    color: true
  },
  attributes: {
    labelPricing: {
      type: 'string',
      selector: 'label',
      default: ''
    },
    packgesRichTextTitle: {
      type: 'string',
      selector: 'label',
      default: ''
    },
    disPricing: {
      type: 'string',
      selector: 'span',
      default: ''
    },
    TextDes: {
      type: 'string',
      selector: 'span',
      default: ''
    },
    RichTextTitle: {
      type: 'string',
      selector: 'span',
      default: ''
    },
    packgesRichTextTitle: {
      type: 'string',
      selector: 'span',
      default: ''
    },
    priceTextSingle1: {
      type: 'string',
      default: ''
    },
    priceLinksingle1: {
      type: 'string',
      default: ''
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    },
    colorBackground: {
      type: 'string',
      default: ''
    },
    colorText: {
      type: 'string',
      default: ''
    },
    buttonStyle: {
      type: 'string',
      default: 'wp-block-button__link'
    },
    heroCtaValue: {
      type: 'string',
      default: ''
    }
  },
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Value Single Item')],
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroCtaValue,
      buttonStyle,
      colorText,
      colorBackground,
      labelPricing,
      disPricing,
      TextDes,
      RichTextTitle,
      packgesRichTextTitle,
      priceTextSingle1,
      priceLinksingle1,
      mediaId,
      mediaUrl
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom Color Scheme"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
      label: "Custom Background Color",
      color: colorBackground,
      onChange: newval => setAttributes({
        colorBackground: newval
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom Text Scheme"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
      label: "Custom Text Color",
      color: colorText,
      onChange: newval => setAttributes({
        colorText: newval
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Select Button Style",
      value: buttonStyle,
      onChange: newval => setAttributes({
        buttonStyle: newval
      }),
      options: [{
        label: 'Primary Button',
        value: 'wpwpmindsfr-button-primary wp-block-button__link'
      }, {
        label: 'Secondary Button',
        value: 'wpwpmindsfr-button-secondary wp-block-button__link'
      }, {
        label: 'Outline Button',
        value: 'wpwpmindsfr-button-outline wp-block-button__link'
      }],
      __nextHasNoMarginBottom: true
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      placeholder: "EX. MOST POPULAR",
      tagName: "label",
      value: labelPricing,
      onChange: newval => setAttributes({
        labelPricing: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose an image'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.mediaUrl
      }))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace image'))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove image'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      placeholder: "Title",
      tagName: "h3",
      value: packgesRichTextTitle,
      onChange: newval => setAttributes({
        packgesRichTextTitle: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      placeholder: "Caption",
      tagName: "p",
      value: RichTextTitle,
      onChange: newval => setAttributes({
        RichTextTitle: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      placeholder: "Price",
      tagName: "h4",
      value: TextDes,
      onChange: newval => setAttributes({
        TextDes: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      placeholder: "Discounted Price",
      tagName: "h4",
      value: disPricing,
      onChange: newval => setAttributes({
        disPricing: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      placeholder: "Add button Text",
      value: priceTextSingle1,
      onChange: newval => setAttributes({
        priceTextSingle1: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      placeholder: "Add button Link",
      value: priceLinksingle1,
      onChange: newval => setAttributes({
        priceLinksingle1: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Add Custom Value for onclick attribute.",
      value: heroCtaValue,
      onChange: newval => setAttributes({
        heroCtaValue: newval
      })
    }))));
  },
  save: props => {
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save();
    const {
      attributes
    } = props;
    const {
      heroCtaValue,
      buttonStyle,
      colorText,
      colorBackground,
      labelPricing,
      disPricing,
      TextDes,
      RichTextTitle,
      packgesRichTextTitle,
      priceTextSingle1,
      priceLinksingle1,
      mediaId,
      mediaUrl
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "col-inner-3"
    }, attributes.labelPricing != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "span",
      className: "labelPricing",
      value: labelPricing
    }), attributes.disPricing != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "h4",
      className: "disPricing",
      value: disPricing
    }), attributes.TextDes != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "h4",
      className: "regPricing",
      value: TextDes
    }), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: packgesRichTextTitle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "disPricing-3",
      assignedStyle: colorBackground
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "h3",
      className: "cColor-3",
      styleColor: colorText,
      value: packgesRichTextTitle
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "div",
      className: "RichTextTitlep",
      value: RichTextTitle
    }), attributes.priceLinksingle1 !== '' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: buttonStyle,
      styleColor: colorText,
      assignedStyle: colorBackground,
      href: priceLinksingle1,
      onclick: heroCtaValue
    }, priceTextSingle1));
  }
});

/***/ }),

/***/ "./src/testimonials-section/testimonial-section.js":
/*!*********************************************************!*\
  !*** ./src/testimonials-section/testimonial-section.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpgb-captain-block/testimonialsingle', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Single Testimonial'),
  // Block title.
  icon: 'welcome-add-page',
  parent: ['create-block/testimonialsingle'],
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('testimonials Section')],
  attributes: {
    heroTitle: {
      type: 'string',
      default: ''
    },
    heroDes: {
      type: 'string',
      default: ''
    },
    heroCta: {
      type: 'string',
      default: ''
    },
    heroLink: {
      type: 'string',
      default: ''
    },
    heroCtaLink: {
      type: 'string',
      default: ''
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    },
    themeBackground: {
      type: 'string',
      default: ''
    },
    styleOptions: {
      type: 'string',
      default: 'simple-right-image'
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroTitle,
      heroDes,
      heroCta,
      styleOptions,
      themeBackground
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outtertest"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
      placeholder: "Add Testimonials Title Here",
      value: heroTitle,
      tagName: "h2",
      onChange: newval => setAttributes({
        heroTitle: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
      placeholder: "Add Testimonials Here",
      value: heroDes,
      tagName: "p",
      onChange: newval => setAttributes({
        heroDes: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
      placeholder: "Add Testimonials Cite/Name",
      value: heroCta,
      tagName: "h5",
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
        className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.mediaUrl
      }))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'))
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image')))))));
  },
  save: props => {
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps.save();
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroTitle,
      heroDes,
      heroCta
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials-2"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials-txt-1"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText.Content, {
      ...blockProps,
      tagName: "h2",
      className: "",
      value: heroTitle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText.Content, {
      ...blockProps,
      tagName: "p",
      className: "",
      value: heroDes
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText.Content, {
      ...blockProps,
      tagName: "cite",
      className: "",
      value: heroCta
    })), attributes.mediaId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials-img-1"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: heroTitle
    })));
  }
});

/***/ }),

/***/ "./src/testimonials-section/testimonials-section.js":
/*!**********************************************************!*\
  !*** ./src/testimonials-section/testimonials-section.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _testimonial_section_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./testimonial-section.js */ "./src/testimonials-section/testimonial-section.js");









const ALLOWED_MEDIA_TYPES = ['image'];

const ALLOWED_BLOCKS = ['wpgb-captain-block/testimonialsingle'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpgb-captain-block/testimonials-block-list', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Testimonials Section'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('testimonials Section')],
  attributes: {
    themeBackground: {
      type: 'string',
      default: 'theme-section-full alignfull'
    },
    styleOptions: {
      type: 'string',
      default: 'simple-right-image'
    },
    AstyleOptions: {
      type: 'string',
      default: 'listsimple'
    },
    colorBackground: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      styleOptions,
      themeBackground,
      colorBackground,
      AstyleOptions
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Theme Background",
      value: themeBackground,
      onChange: newval => setAttributes({
        themeBackground: newval
      }),
      options: [{
        label: 'Transparent',
        value: 'theme-section-full alignfull Transpante-themeBackground'
      }, {
        label: 'Active Theme Background',
        value: 'theme-section-full alignfull full-bg-color'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Custom Background Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
      label: "Custom Background Color",
      color: colorBackground,
      onChange: newval => setAttributes({
        colorBackground: newval
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Style Options",
      value: styleOptions,
      onChange: newval => setAttributes({
        styleOptions: newval
      }),
      options: [{
        label: 'Right align',
        value: 'simple-right-image'
      }, {
        label: 'Center align',
        value: 'simple-Center-image'
      }, {
        label: 'Left align',
        value: 'simple-Left-image'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Archive Style Options",
      value: AstyleOptions,
      onChange: newval => setAttributes({
        AstyleOptions: newval
      }),
      options: [{
        label: 'List',
        value: 'listsimple'
      }, {
        label: 'Grid',
        value: 'gridsimple'
      }, {
        label: 'Slider',
        value: 'Slidersimple owl-carousel'
      }],
      __nextHasNoMarginBottom: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks.ButtonBlockAppender
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("center", null, "Add New Testimonial")))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      styleOptions,
      themeBackground,
      colorBackground,
      AstyleOptions
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: themeBackground,
      assignedStyle: colorBackground
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: styleOptions
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "Hero-1section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "Hero-outter"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: AstyleOptions
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InnerBlocks.Content, null))))));
  }
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwpminds_growth_blocks"] = globalThis["webpackChunkwpminds_growth_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map