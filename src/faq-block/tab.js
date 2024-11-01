import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { TextControl } from '@wordpress/components';
import { subscribe } from '@wordpress/data';

/**********************************************************
 * Registering Child Innerblock for the Tabbed Content block
 **********************************************************/
registerBlockType( 'wpgb-captain-block/tab', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'FAQ Single Section' ), // Block title.
	icon: 'welcome-add-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	parent: [ 'create-block/tabs' ],
	category: 'design', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	supports: {
        color: true
    },
	attributes: {
        tabLabel:{
            type: 'string',
			default: ''
        },
		blockIndex:{
            type: 'number',
			default: ''
        },
		tabTagline:{
			type: 'string',
			default: ''
		}

    },
    keywords: [
		__( 'tab' ),
	],

	/**
	 * 
	 * Edit function for Child Slide Block
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
        const { 
			attributes: { tabLabel, blockIndex}, 
			setAttributes 
		} = props;


		// const onChangeTabLabel = newTabLabel => {
		// 	setAttributes({ tabLabel: newTabLabel});
		// 	setAttributes({ blockIndex: getBlockIndex});
		// 	wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( parentBlockID, { updateChild: true } );
		// };

		const onChangeTabLabel = newTitle => {
			setAttributes({ tabLabel: newTitle});
		};
		
		const blockProps = useBlockProps();
		

		return (
			<div className={ props.className }>			
				<h4>FAQ Single Heading</h4>
                <TextControl
                className={ "tab-label_input" }
                    value={ tabLabel }
                    onChange={onChangeTabLabel}
                    placeholder="FAQ Single Title"
					type="text"
                />
                <h4>FAQ Single Content</h4>
				<InnerBlocks/>
			</div>
		);
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
	save: ( props ) => {

		const { attributes } = props;
		const { tabLabel} = attributes;
		const blockProps = useBlockProps.save();
		
		return (
			<div className="tab-panel-wrapper" role="tabpanel" tabindex="0" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
				<div className="tab-title" itemprop="name">
					<RichText.Content { ...blockProps } tagName="" className='' value={ tabLabel } />
				</div>
				<div className="tab-panel" role="tabpanel" tabindex="0" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
					<div itemprop="text">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},
} );