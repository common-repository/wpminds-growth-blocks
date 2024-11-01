import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton, ColorPalette, ColorPicker  } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText, InnerBlocks } from '@wordpress/block-editor';


registerBlockType( 'wpgb-captain-block/plansingle', {
	title: __( 'plan Section' ),
	icon: 'welcome-add-page',
	parent: [ 'create-block/plansingle' ],
	category: 'design',
	supports: {
        color: true
    },
	attributes: {
		RichTextTitle: {
			type: 'string',
			default: '',
		},
		TextDes: {
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
		cardButton: {
			type: 'string',
			default: '',
		},
		cardButtonLink: {
			type: 'string',
			default: '',
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
		__( '' ),
	],
	edit: ( props ) => {
		
    	const { attributes, setAttributes } = props;
		const { heroCtaValue, TextDes, RichTextTitle,  mediaId, mediaUrl , cardButton, cardButtonLink, buttonStyle} = attributes;
		
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
					</InspectorControls>
				<div className="col-12">
					<div className="col-inner-12">
						<h4>Please add your plan content..</h4>
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
							placeholder="Add Title"
							tagName="h3"
							value={ RichTextTitle }
							onChange={(newval) => setAttributes({ RichTextTitle: newval })}
						/>
						<RichText
							placeholder="Add Plan Caption"
							tagName="p"
							value={ TextDes }
							onChange={(newval) => setAttributes({ TextDes: newval })}
						/>
						<TextControl
							placeholder="Add button Text"
							value={ cardButton }
							onChange={(newval) => setAttributes({ cardButton: newval })}
						/>
						<TextControl
							placeholder="Add button Link"
							value={ cardButtonLink }
							onChange={(newval) => setAttributes({ cardButtonLink: newval })}
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
		const { heroCtaValue, TextDes, RichTextTitle,  mediaId, mediaUrl , cardButton, cardButtonLink, buttonStyle } = attributes;

		return (
				<div class="col-inner-35-70">
					{attributes.mediaId != 0 &&
						<img src={attributes.mediaUrl} alt={ RichTextTitle } />
					}
					<div class="col-inner-2-cont">
						<RichText.Content { ...blockProps } tagName="h3" className='' value={ RichTextTitle } />
						<RichText.Content { ...blockProps } tagName="p" className='' value={ TextDes } />
						{attributes.cardButtonLink !== '' &&
							<a className={buttonStyle} href={ cardButtonLink } onclick={ heroCtaValue }>{ cardButton }</a>
						}
					</div>
				</div>
		);
	},
} );