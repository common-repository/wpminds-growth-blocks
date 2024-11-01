import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { ColorPicker, TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton } from '@wordpress/components';
import { InnerBlocks, useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
import './testimonial-section.js';
const ALLOWED_BLOCKS = [ 'wpgb-captain-block/testimonialsingle' ];

registerBlockType( 'wpgb-captain-block/testimonials-block-list', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Testimonials Section' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'testimonials Section' ),
	],
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
		colorBackground : {
			type: 'string',
			default: ''
		},
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		const { styleOptions,themeBackground, colorBackground, AstyleOptions} = attributes;
		const blockProps = useBlockProps();
		
		return (
			<div { ...useBlockProps()}  >
				<InspectorControls >
					<PanelBody>
						<SelectControl
							label="Theme Background"
							value= { themeBackground }
							onChange={(newval) => setAttributes({ themeBackground: newval })}
							options={ [
								{ label: 'Transparent', value: 'theme-section-full alignfull Transpante-themeBackground' },
								{ label: 'Active Theme Background', value: 'theme-section-full alignfull full-bg-color' },
							] }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
					<PanelBody>
						<h4>Custom Background Color</h4>
						<ColorPicker
							label="Custom Background Color"
							color={colorBackground}
							onChange={(newval) => setAttributes({ colorBackground: newval })}
					
						/>
					</PanelBody>
					<PanelBody>
						<SelectControl
							label="Style Options"
							value= { styleOptions }
							onChange={(newval) => setAttributes({ styleOptions: newval })}
							options={ [
								{ label: 'Right align', value: 'simple-right-image' },
								{ label: 'Center align', value: 'simple-Center-image' },
								{ label: 'Left align', value: 'simple-Left-image' },
							] }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
					<PanelBody>
						<SelectControl
							label="Archive Style Options"
							value= { AstyleOptions }
							onChange={(newval) => setAttributes({ AstyleOptions: newval })}
							options={ [
								{ label: 'List', value: 'listsimple' },
								{ label: 'Grid', value: 'gridsimple' },
								{ label: 'Slider', value: 'Slidersimple owl-carousel' },
							] }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
					<PanelBody>
					</PanelBody>
				</InspectorControls>
				
				<div className="Hero-outter">
					<div className="Hero-1section">
						<div { ...blockProps }>
							<InnerBlocks
								allowedBlocks={ ALLOWED_BLOCKS }
								renderAppender={ InnerBlocks.ButtonBlockAppender }
							/>	
							<center>Add New Testimonial</center>
						</div>
					</div>
				</div>
			</div>
		);
	},
	save : (props) => { 
		const { attributes } = props;
		const { styleOptions,themeBackground, colorBackground, AstyleOptions} = attributes;
		const blockProps = useBlockProps.save();

	return (
		<div className={themeBackground} assignedStyle={colorBackground}>
			<div className={styleOptions}>
				<div class="Hero-1section">
					<div class="Hero-outter">
						<div className={AstyleOptions}>
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
		
	},
} );