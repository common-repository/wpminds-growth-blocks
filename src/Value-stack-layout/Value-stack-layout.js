import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton, ColorPicker } from '@wordpress/components';
import { InnerBlocks, useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
import './items.js';
const ALLOWED_BLOCKS = [ 'wpgb-captain-block/valuesingle' ];

registerBlockType( 'wpgb-captain-block/value-block-list', {
	title: __( 'Value Stack Layout' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Value Stack Layout' ),
	],
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
		colorBackground : {
			type: 'string',
			default: ''
		},
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		const { themeBackground, styleOptions, colorBackground, styleOptionsC} = attributes;
		const blockProps = useBlockProps();
		return (
			<div { ...useBlockProps()}  >
				<InspectorControls >
					<PanelBody>
						<SelectControl
							label="Style Options"
							value= { styleOptions }
							onChange={(newval) => setAttributes({ styleOptions: newval })}
							options={ [
								{ label: 'Simple Heading', value: 'SimpleHeading1' },
								{ label: 'Active Heading and Content', value: 'ActiveContent1' },
							] }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
					<PanelBody>
						<SelectControl
							label="Heading and Content Style Options"
							value= { styleOptionsC }
							onChange={(newval) => setAttributes({ styleOptionsC: newval })}
							options={ [
								{ label: 'Style 1', value: 'cstyle1' },
								{ label: 'Style 2', value: 'cstyle2' },
								{ label: 'Style 3', value: 'cstyle3' },
							] }
							__nextHasNoMarginBottom
						/>
						<small>This will work on Style Options 'Active Heading and Content' only.</small>
					</PanelBody>
					<PanelBody>
						<SelectControl
							label="Theme Background"
							value= { themeBackground }
							onChange={(newval) => setAttributes({ themeBackground: newval })}
							options={ [
								{ label: 'Transparent', value: 'Transpante-themeBackground alignfull theme-section-full' },
								{ label: 'Active Theme Background', value: 'full-bg-color alignfull theme-section-full' },
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
				</InspectorControls>
				<div className="Hero-outter">
					<div className="Hero-1section">
						<div { ...blockProps }>
							<InnerBlocks
								allowedBlocks={ ALLOWED_BLOCKS }
								renderAppender={ InnerBlocks.ButtonBlockAppender }
							/>	
							<center>Add New Value Stack Layout</center>
						</div>
					</div>
				</div>
			</div>
		);
	},
	save: (props) => {
        const blockProps = useBlockProps.save();
		const { attributes } = props;
		const { colorBackground, styleOptions, themeBackground, styleOptionsC} = attributes;

        return (
			<div { ...blockProps }>
				<div className={themeBackground} assignedStyle={colorBackground}>
					<div className={styleOptions}>
						<div className={styleOptionsC}>
							<div className="Hero-outter">
								<div className="Hero-1section Value-1section">
									<InnerBlocks.Content />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    },
} );