import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton, ColorPicker } from '@wordpress/components';
import { InnerBlocks, useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
import './plan-single.js';
const ALLOWED_BLOCKS = [ 'wpgb-captain-block/plansingle' ];

registerBlockType( 'wpgb-captain-block/plan-block-list', {
	title: __( 'Plan Section' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Plan Section' ),
	],
	attributes: {
		headingTitle: {
			type: 'string',
			default: '',
		},
		maintDes: {
			type: 'string',
			default: '',
		},
		maintDes2: {
			type: 'string',
			default: '',
		},
		heroCta: {
			type: 'string',
			default: '',
		},
		heroLink: {
			type: 'string',
			default: '',
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
		colorBackground : {
			type: 'string',
			default: ''
		},
		colorText : {
			type: 'string',
			default: ''
		},
		buttonStyle: {
			type: 'string',
			default: 'wp-block-button__link'
		},
		heroCtaValue: {
            type: 'string',
            default: '',
        },
	},
	edit: (props) => {
		const { attributes, setAttributes } = props;
		const { heroCtaValue, colorBackground, colorText, boxStyle, styleHorizontal, themeBackground, maintDes2, RichTextTitle, TextDes, RichTextTitle1, TextDes1, RichTextTitle2, TextDes2, headingTitle,maintDes, heroCta, heroLink,buttonStyle} = attributes;
		const blockProps = useBlockProps();
		return (
			<div { ...useBlockProps()}  >
				<InspectorControls >
				<PanelBody>
						<SelectControl
								label="Select Button Style"
								value= { buttonStyle }
								onChange={(newval) => setAttributes({ buttonStyle: newval })}
								options={ [
									{ label: 'Primary Button', value: 'wpwpmindsfr-button-primary wp-block-button__link' },
									{ label: 'Secondary Button', value: 'wpwpmindsfr-button-secondary wp-block-button__link' },
									{ label: 'Outline Button', value: 'wpwpmindsfr-button-outline wp-block-button__link' },
								] }
								__nextHasNoMarginBottom
							/>
						</PanelBody>
					<PanelBody>
						<SelectControl
							label="Style Option"
							value= { boxStyle }
							onChange={(newval) => setAttributes({ boxStyle: newval })}
							options={ [
								{ label: 'Simple', value: 'wpwpmindsfr-Simple' },
								{ label: 'Box Style', value: 'wpwpmindsfr-Box' },
								{ label: 'Two Col (Will Work with HORIZONTAL style only)', value: 'wpwpmindsfr-Two' },
							] }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
					<PanelBody>
						<SelectControl
							label="Horizontal or Vertical style"
							value= { styleHorizontal }
							onChange={(newval) => setAttributes({ styleHorizontal: newval })}
							options={ [
								{ label: 'Vertical', value: 'Vertical-section-full' },
								{ label: 'Horizontal', value: 'Horizontal-section-full' },
							] }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
					<PanelBody>
						<SelectControl
							label="Theme Background"
							value= { themeBackground }
							onChange={(newval) => setAttributes({ themeBackground: newval })}
							options={ [
								{ label: 'Transparent', value: 'Transpante-themeBackground' },
								{ label: 'Active Theme Background', value: 'full-bg-color' },
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
							<h4>Custom content Color</h4>
							<ColorPicker
								label="Custom Background Color"
								color={colorText}
								onChange={(newval) => setAttributes({ colorText: newval })}
							/>
						</PanelBody>

				</InspectorControls>

				<div className="Hero-1section img-text-section">
					<div className="col-100">

						<RichText
							tagName='h2'
							placeholder = 'Add Section Title Here'
							value={ headingTitle }
							onChange={(newval) => setAttributes({ headingTitle: newval })}
						/>
						<RichText
							tagName='p'
							placeholder="Add Section Content Here"
							value={ maintDes }
							onChange={(newval) => setAttributes({ maintDes: newval })}
						/>
					</div>
					<div className="col-100">
						<div { ...blockProps }>
							<InnerBlocks
								allowedBlocks={ ALLOWED_BLOCKS }
								renderAppender={ InnerBlocks.ButtonBlockAppender }
							/>
							<center>Add New Plan Item</center>
						</div>
					</div>
					<div className="col-100">
						<RichText
							className='top-28'
							placeholder="Add Section bottom content Here"
							value={ maintDes2 }
							onChange={(newval) => setAttributes({ maintDes2: newval })}
						/>
						<br/>
						<TextControl 
							placeholder="Add button Text"
							value={ heroCta }
							onChange={(newval) => setAttributes({ heroCta: newval })}
						/>
						<TextControl 
							placeholder="Add button Link"
							value={ heroLink }
							onChange={(newval) => setAttributes({ heroLink: newval })}
						/>
						<TextControl
                            label="Add Custom Value for onclick attribute."
                            value={ heroCtaValue }
                            onChange={(newval) => setAttributes({ heroCtaValue: newval })}
                        />
					</div>
				</div>
			</div>
		);
},
save : (props) => { 

	const { attributes } = props;
	const { heroCtaValue, colorText, colorBackground, boxStyle, styleHorizontal, themeBackground, maintDes2, headingTitle,maintDes, heroCta, heroLink, buttonStyle} = attributes;
	const blockProps = useBlockProps.save();
	var activBg = ( themeBackground )
	if( activBg = 'full-bg-color' ){ activBg = 'alignfull' }
	return (
		<div className={"theme-section-full  " + activBg + " " + ( themeBackground ) } assignedStyle={colorBackground} StyleColor={colorText}>
			<div className={"Hero-outter " +  ( boxStyle )   }>
				<div className="Hero-1section img-text-section">
					<div className="col-100">
						<RichText.Content { ...blockProps } tagName="h2" className='cColor' styleColor={colorText} value={ headingTitle } />
						<RichText.Content { ...blockProps } tagName="p" className='cColor' styleColor={colorText} value={ maintDes } />
					</div>
					<div className={"styleoutter " + ( styleHorizontal ) }>
						<div className="col-100">
								<InnerBlocks.Content />
						</div>
					</div>
					<div className="col-100s">
						<RichText.Content { ...blockProps } tagName="p" className='top-28 cColor' styleColor={colorText}  value={ maintDes2 } />
						{attributes.heroLink !== '' &&
							<a className={buttonStyle} href={ heroLink } onclick={ heroCtaValue }>{ heroCta }</a>
						}
					</div>
				</div>
			</div>
		</div>
	);

},
} );