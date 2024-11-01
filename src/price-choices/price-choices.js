import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton, ColorPicker } from '@wordpress/components';
import { InnerBlocks, useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
import './price-single.js';
const ALLOWED_BLOCKS = [ 'wpgb-captain-block/pricesingle' ];

registerBlockType( 'wpgb-captain-block/price-block-list', {
	title: __( 'Price Choices' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Price Choices' ),
	],
	attributes: {
		headingTitle: {
			type: 'string',
			selector: 'h2',
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
		packgesRichTextTitle: {
			type: 'string',
			default: '',
		},
        RichTextTitle: {
			type: 'string',
			default: '',
		},
		TextDes: {
			type: 'string',
			default: '',
		},
        packgesRichTextTitle1: {
			type: 'string',
            source: 'html',
            selector: 'h3',
		},
		RichTextTitle1: {
			type: 'string',
			default: '',
		},
		TextDes1: {
			type: 'string',
			default: '',
		},
        packgesRichTextTitle2: {
			type: 'string',
			default: '',
		},
		RichTextTitle2: {
			type: 'string',
			default: '',
		},
		RichTextTitle3: {
			type: 'string',
			default: '',
		},
		TextDes2: {
			type: 'string',
			default: '',
		},
		TextDes3: {
			type: 'string',
			default: '',
		},
		heroCta: {
			type: 'string',
			default: 'Schedule a Call',
		},
		heroLink: {
			type: 'string',
			default: '',
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
			default: 'Buy Now',
		},
		priceLinksingle1: {
			type: 'string',
			default: '',
		},
		priceTextSingle2: {
			type: 'string',
			default: 'Buy Now',
		},
		priceLinksingle2: {
			type: 'string',
			default: '',
		},
		priceTextSingle3: {
			type: 'string',
			default: 'Buy Now',
		},
		priceLinksingle3: {
			type: 'string',
			default: '',
		},
		priceTextSingle4: {
			type: 'string',
			default: 'Buy Now',
		},
		priceLinksingle4: {
			type: 'string',
			default: '',
		},
		boxStyle: {
			type: 'string',
			default: ''
		},
		colorText : {
			type: 'string',
			default: ''
		},
		colorBackground : {
			type: 'string',
			default: ''
		},
		labelPricing : {
			type: 'string',
			default: ''
		},
		labelPricing1 : {
			type: 'string',
			default: ''
		},
		labelPricing2 : {
			type: 'string',
			default: ''
		},
		labelPricing3 : {
			type: 'string',
			default: ''
		},
		disPricing : {
			type: 'string',
			default: ''
		},
		disPricing1 : {
			type: 'string',
			default: ''
		},
		disPricing2 : {
			type: 'string',
			default: ''
		},
		disPricing3 : {
			type: 'string',
			default: ''
		},
		heroCtaValue: {
            type: 'string',
            default: '',
        },
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		const { heroCtaValue, colorBackground, colorText, boxStyle, maintDes2, themeBackground, buttonStyle, headingTitle,maintDes, heroCta, heroLink} = attributes;
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
								{ label: 'Simple', value: 'wpwpmindsfr-p-Simple' },
								{ label: 'Box Style', value: 'wpwpmindsfr-p-Box' },
								{ label: 'Color Style', value: 'wpwpmindsfr-p-Color' },
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
						<h4>Custom content Color</h4>
						<ColorPicker
							label="Custom Background Color"
							color={colorText}
							onChange={(newval) => setAttributes({ colorText: newval })}
					
						/>
					</PanelBody>
				</InspectorControls>
				
				
				<div className="Hero-1section img-text-section Priceisns">
					<div className="col-100">
						<RichText
							placeholder="Add Section Title Here"
							tagName="h2"
                            value={ headingTitle }
                            onChange={(newval) => setAttributes({ headingTitle: newval })}
						/>
						<RichText
							placeholder="Add Section Caption Here"
							value={ maintDes }
							onChange={(newval) => setAttributes({ maintDes: newval })}
						/>
					</div>
					<div { ...blockProps }>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							renderAppender={ InnerBlocks.ButtonBlockAppender }
						/>	
						<center>Add New Price Table</center>
					</div>
					<div className="col-100">
						<h4>Bottom Content</h4>
						<RichText
							placeholder="Add Section Caption Here for Bottom"
							value={ maintDes2 }
							onChange={(newval) => setAttributes({ maintDes2: newval })}
						/>
						<TextControl
							placeholder="Add button Text"
							value={ heroCta}
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
	const { heroCtaValue, colorBackground, colorText, boxStyle, maintDes2, themeBackground, buttonStyle, headingTitle,maintDes, heroCta, heroLink} = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div className={themeBackground} assignedStyle={colorBackground}>
			<div className={boxStyle}>
				<div class="Hero-outter">
					<div class="col-100">
						<RichText.Content { ...blockProps } tagName="h2" className='cColor'  styleColor={colorText} value={ headingTitle } />
						<RichText.Content { ...blockProps } tagName="p" className='cColor'  styleColor={colorText} value={ maintDes } />
					</div>
					<div class="col-3">
						<InnerBlocks.Content />
					</div>
					<p className='bottomtext cColor'  styleColor={colorText}>{maintDes2}</p>
					{attributes.heroLink !== '' &&
						<a className={buttonStyle} href={ heroLink } onclick={ heroCtaValue }>{ heroCta }</a>
					}
				</div>
			</div>
		</div>
	);
	},
	
} );