/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

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
import Edit from './edit';
import save from './save';

/**
* Every block starts by registering a new block type definition.
*
* @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
*/
registerBlockType( 'wpgb-captain-block/tabs', { 
  title: 'FAQ Section', // Block title.
  icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords:  'FAQ',
  attributes: {
		blockTitle: {
			type: 'string',
			default: '',
		},
		content: {
			type: 'string',
      source: 'html',
			default: '',
		},
    themeBackground: {
			type: 'string',
			default: 'theme-section-full alignfull Transpante-themeBackground'
		},
    faqStyleOption: {
			type: 'string',
			default: ''
		},
    colorBackground : {
			type: 'string',
			default: ''
		},
	},
  /**
  * @see ./edit.js
  */
  edit: Edit,


  /**
  * @see ./save.js
  */
  save,
} );
