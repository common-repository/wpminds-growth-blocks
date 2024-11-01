import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment,useState  } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton, ColorPalette, ColorPicker  } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText, InnerBlocks } from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'wpgb-captain-block/hero-block-list', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Hero Section' ), // Block title.
	description: __('Set image and words side-by-side for a richer layout.'),
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Header Section' ),
	],
	attributes: {
		heroTitle: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		heroCta: {
			type: 'string',
			default: 'Schedule a Call',
		},
		heroLink: {
			type: 'string',
			default: '',
		},
		heroCtaLink: {
			type: 'string',
			default: '',
		},
		mediaId: {
			type: 'number',
			default: 0
		},
		mediaUrl: {
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
			default: '',
		},
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		const { heroCtaValue, themeHeading, heroTitle, heroDes, heroCta, heroLink, colorText, colorBackground, sectionStyle, buttonStyle, themeBackground} = attributes;

		const removeMedia = () => {
			props.setAttributes({
				mediaId: 0,
				mediaUrl: ''
			});
		}
	 
		 const onSelectMedia = (media) => {
			props.setAttributes({
				mediaId: media.id,
				mediaUrl: media.url
			});
		}
		return (
			<div { ...useBlockProps()}  >
					<InspectorControls >
						<PanelBody>
							<SelectControl
								label="Select Style of section"
								value= { sectionStyle }
								onChange={(newval) => setAttributes({ sectionStyle: newval })}
								options={ [
									{ label: 'Right align image', value: 'text-img-section' },
									{ label: 'Left align image', value: 'img-text-section' },
									{ label: 'Center align without image', value: 'noimage-text-section' },
								] }
								__nextHasNoMarginBottom
							/>
							<SelectControl
								label="Heading Tag H1, H2, H3"
								value= { themeHeading }
								onChange={(newval) => setAttributes({ themeHeading: newval })}
								options={ [
									{ label: 'H1', value: 'theme-H1' },
									{ label: 'H2', value: 'theme-H2' },
									{ label: 'H3', value: 'theme-H3' },
								] }
								__nextHasNoMarginBottom
							/>
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
					<div className="Hero-outter"><div className="Hero-1section">
					<h2 >Header Layout Section</h2>
					<PanelBody>
						<TextControl
							label="Add Section Title Here"
							value={ heroTitle }
							onChange={(newval) => setAttributes({ heroTitle: newval })}
						/>
						<label class="components-base-control__label css-1wzzj1a ej5x27r2">Add Section caption/text Here</label>
						<InnerBlocks 
							className="captain-inner-blockText"
						/>
						<TextControl
							label="Add button Text"
							value={ heroCta }
							onChange={(newval) => setAttributes({ heroCta: newval })}
						/>
						<TextControl
							label="Add button Link"
							value={ heroLink }
							onChange={(newval) => setAttributes({ heroLink: newval })}
						/>
						<TextControl
							label="Add Custom Value for onclick attribute."
							value={ heroCtaValue }
							onChange={(newval) => setAttributes({ heroCtaValue: newval })}
						/>
					</PanelBody>
					<PanelBody>
						<MediaUploadCheck>
						<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
									onSelect={onSelectMedia}
									value={attributes.mediaId}
									allowedTypes={ ['image'] }
									render={({open}) => (
										<Button 
											className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
											onClick={open}
										>
											{attributes.mediaId == 0 && __('Choose an image')}
										
											<img src={attributes.mediaUrl} />
										
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.mediaId != 0 && 
								<MediaUploadCheck>
									<MediaUpload
										title={__('Replace image')}
										value={attributes.mediaId}
										onSelect={onSelectMedia}
										allowedTypes={['image']}
										render={({open}) => (
											<Button onClick={open} isDefault isLarge>{__('Replace image')}</Button>
										)}
									/>
								</MediaUploadCheck>
							}
							{attributes.mediaId != 0 && 
								<MediaUploadCheck>
									<Button onClick={removeMedia} isLink isDestructive>{__('Remove image')}</Button>
								</MediaUploadCheck>
							}
						</div>
						</MediaUploadCheck>
					</PanelBody>
				</div></div>
			</div>
		);
	},
	save : (props) => { 
		const { attributes } = props;
		const { heroCtaValue,themeHeading, heroTitle, heroDes, heroCta, heroLink, colorText, colorBackground, sectionStyle, buttonStyle, themeBackground } = attributes;
    	return (
			<div className={themeBackground} assignedStyle={colorBackground}>
				<div className={sectionStyle}>
					<div className="Hero-outter">
						<div className="Hero-1section">
							<div className="col-2 cColor" styleColor={colorText}>
								<div className="col-inner-2 txt-1">
									{attributes.themeHeading == 'theme-H1' &&
										<h1 className="cColor" styleColor={colorText}>{ heroTitle }</h1>
									}
									{attributes.themeHeading == 'theme-H2' &&
										<h2 className="cColor" styleColor={colorText}>{ heroTitle }</h2>
									}
									{attributes.themeHeading == 'theme-H3' &&
										<h3 className="cColor" styleColor={colorText}>{ heroTitle }</h3>
									}
									<InnerBlocks.Content />
									{attributes.heroLink !== '' &&
										<a className={buttonStyle} href={ heroLink } onclick={ heroCtaValue }>{ heroCta }</a>
									}
								</div>
								{attributes.sectionStyle !== 'noimage-text-section' && 
								<div className="col-inner-2 img-1">
									{attributes.mediaId != 0 && 
										<img src={attributes.mediaUrl} alt={ heroTitle } />
									}
								</div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );