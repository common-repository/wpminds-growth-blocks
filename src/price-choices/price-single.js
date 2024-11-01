import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton, ColorPalette, ColorPicker  } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText, InnerBlocks } from '@wordpress/block-editor';


registerBlockType( 'wpgb-captain-block/pricesingle', {
	title: __( 'Price Section' ),
	icon: 'welcome-add-page', 
	parent: [ 'create-block/pricesingle' ],
	category: 'design',
	supports: {
        color: true
    },
	attributes: {
        labelPricing: {
			type: 'string',
			selector: 'label',
			default: '',
		},
		packgesRichTextTitle: {
			type: 'string',
			selector: 'label',
			default: '',
		},
		disPricing: {
			type: 'string',
			selector: 'span',
			default: '',
		},
		TextDes: {
			type: 'string',
			selector: 'span',
			default: '',
		},
		RichTextTitle: {
			type: 'string',
			selector: 'span',
			default: '',
		},
		packgesRichTextTitle: {
			type: 'string',
			selector: 'span',
			default: '',
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
    keywords: [
		__( 'Value Single Item' ),
	],
	edit: ( props ) => {
		
    	const { attributes, setAttributes } = props;
		const { heroCtaValue, buttonStyle, colorText, colorBackground, labelPricing, disPricing, TextDes, RichTextTitle, packgesRichTextTitle, priceTextSingle1, priceLinksingle1 , mediaId, mediaUrl} = attributes;
		
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
						<h4>Custom Color Scheme</h4>
						<ColorPicker
							label="Custom Background Color"
							color={colorBackground}
							onChange={(newval) => setAttributes({ colorBackground: newval })}
					
						/>
					</PanelBody>
					<PanelBody>
						<h4>Custom Text Scheme</h4>
						<ColorPicker
							label="Custom Text Color"
							color={colorText}
							onChange={(newval) => setAttributes({ colorText: newval })}
					
						/>
					</PanelBody>
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
				</InspectorControls >
				<div className="col-3">
					<div className="col-inner-3">
						<RichText
							placeholder="EX. MOST POPULAR"
							tagName="label"
							value={ labelPricing }
							onChange={(newval) => setAttributes({ labelPricing: newval })}
						/>
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
						<RichText
							placeholder="Title"
							tagName="h3"
							value={ packgesRichTextTitle }
							onChange={(newval) => setAttributes({ packgesRichTextTitle: newval })}
						/>
						<RichText
							placeholder="Caption"
							tagName="p"
							value={ RichTextTitle }
							onChange={(newval) => setAttributes({ RichTextTitle: newval })}
						/>
						<RichText
							placeholder="Price"
							tagName="h4"
							value={ TextDes }
							onChange={(newval) => setAttributes({ TextDes: newval })}
						/>
						<RichText
							placeholder="Discounted Price"
							tagName="h4"
							value={ disPricing }
							onChange={(newval) => setAttributes({ disPricing: newval })}
						/>
						<TextControl
							placeholder="Add button Text"
							value={ priceTextSingle1 }
							onChange={(newval) => setAttributes({ priceTextSingle1: newval })}
						/>
						<TextControl
							placeholder="Add button Link"
							value={ priceLinksingle1 }
							onChange={(newval) => setAttributes({ priceLinksingle1: newval })}
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
	save: ( props ) => {
		const blockProps = useBlockProps.save();
		const { attributes } = props;
		const { heroCtaValue, buttonStyle, colorText, colorBackground, labelPricing, disPricing, TextDes, RichTextTitle, packgesRichTextTitle, priceTextSingle1, priceLinksingle1 , mediaId, mediaUrl} = attributes;
		
		return (
			<div class="col-inner-3">
				{attributes.labelPricing != 0 && 
					<RichText.Content { ...blockProps } tagName="span" className='labelPricing' value={ labelPricing } />
				}
				
					{attributes.disPricing != 0 &&
						<RichText.Content { ...blockProps } tagName="h4" className='disPricing' value={ disPricing } />
					}
					{attributes.TextDes != 0 &&
						<RichText.Content { ...blockProps } tagName="h4" className='regPricing' value={ TextDes } />
					}
				{attributes.mediaId != 0 && 
					<img src={attributes.mediaUrl} alt={ packgesRichTextTitle } />
				}
				<div class="disPricing-3" assignedStyle={colorBackground}>
					<RichText.Content { ...blockProps } tagName="h3" className='cColor-3' styleColor={colorText} value={ packgesRichTextTitle } />
				</div>
				<RichText.Content { ...blockProps } tagName="div" className='RichTextTitlep' value={ RichTextTitle } />
				{attributes.priceLinksingle1 !== '' &&
					<a className={buttonStyle} styleColor={colorText} assignedStyle={colorBackground} href={ priceLinksingle1 } onclick={ heroCtaValue }>{ priceTextSingle1 }</a>
				}
			</div>
		);
	},
} );